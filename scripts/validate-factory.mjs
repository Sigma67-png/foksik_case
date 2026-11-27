#!/usr/bin/env node
/**
 * Проверка базы фабрики агентов Foksik Case.
 * Запуск: node scripts/validate-factory.mjs
 * Не требует зависимостей и не читает секреты.
 */
import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const checks = [];

function fail(message) {
  errors.push(message);
}

function ok(message) {
  checks.push(message);
}

function read(relativePath) {
  const full = join(root, relativePath);
  if (!existsSync(full)) {
    fail(`Нет файла: ${relativePath}`);
    return '';
  }
  return readFileSync(full, 'utf8');
}

function parseFrontmatter(text, file) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) {
    fail(`Нет frontmatter: ${file}`);
    return {};
  }
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].replace(/^["']|["']$/g, '');
  }
  return data;
}

function stripJsonComments(input) {
  let output = '';
  let inString = false;
  let escaped = false;
  let inLineComment = false;
  let inBlockComment = false;

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    const next = input[i + 1];

    if (inLineComment) {
      if (char === '\n') {
        inLineComment = false;
        output += char;
      }
      continue;
    }

    if (inBlockComment) {
      if (char === '*' && next === '/') {
        inBlockComment = false;
        i += 1;
      }
      continue;
    }

    if (inString) {
      output += char;
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      output += char;
      continue;
    }

    if (char === '/' && next === '/') {
      inLineComment = true;
      i += 1;
      continue;
    }

    if (char === '/' && next === '*') {
      inBlockComment = true;
      i += 1;
      continue;
    }

    output += char;
  }

  return output.replace(/,\s*([}\]])/g, '$1');
}

const expectedSubagents = [
  { id: 'frontend-ui', model: 'opencode-go/hy4-flash-free#high', label: 'Фронтенд и UI' },
  { id: 'logic-state', model: 'opencode-go/hungerg-free', label: 'Логика и стейт' },
  { id: 'backend-db', model: 'opencode-go/hungerg-free', label: 'Бэкенд и БД' },
  { id: 'qa-universal', model: 'opencode-go/beam-free#max', label: 'QA и документация' },
];

const expectedLead = {
  id: 'factory-lead',
  model: 'opencode-go/deepseek-v4.1-flash#max',
  label: 'Главный агент',
  mode: 'primary',
  minSteps: 60,
};

const expectedAgents = [
  expectedLead,
  ...expectedSubagents.map((agent) => ({ ...agent, mode: 'subagent', minSteps: 40 })),
];

const rows = [];
for (const expected of expectedAgents) {
  const relativePath = `.opencode/agents/${expected.id}.md`;
  const text = read(relativePath);
  if (!text) {
    rows.push([expected.label, expected.mode, 'FAIL', 'файл отсутствует']);
    continue;
  }

  const frontmatter = parseFrontmatter(text, relativePath);
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
  const localErrors = [];

  if (frontmatter.mode !== expected.mode) {
    localErrors.push(`mode=${frontmatter.mode || 'нет'}, ожидается ${expected.mode}`);
  }
  if (frontmatter.model !== expected.model) {
    localErrors.push(`model=${frontmatter.model || 'нет'}, ожидается ${expected.model}`);
  }
  if (!frontmatter.description) localErrors.push('нет description');
  if (!frontmatter.steps || Number(frontmatter.steps) < expected.minSteps) {
    localErrors.push(`steps < ${expected.minSteps}`);
  }
  if (!/permissions:\s*\r?\n\s+- action:\s*edit/.test(text)) localErrors.push('нет permissions для edit');
  if (!body.includes('MAXIMUM REASONING')) localErrors.push('нет блока MAXIMUM REASONING');
  if (!body.includes('<thinking>')) localErrors.push('нет требования <thinking>');
  if (!body.includes('Жёсткий контракт')) localErrors.push('нет жёсткого контракта первого символа');
  if (!body.includes('первый символ')) localErrors.push('нет правила «первый символ — <»');

  if (expected.id === expectedLead.id) {
    if (!/action:\s*subagent\s*\r?\n\s*resource:\s*"\*"\s*\r?\n\s*effect:\s*deny/.test(text)) {
      localErrors.push('нет deny subagent *');
    }
    for (const subagent of expectedSubagents) {
      const allowRule = new RegExp(
        `action:\\s*subagent\\s*\\r?\\n\\s*resource:\\s*"${subagent.id}"\\s*\\r?\\n\\s*effect:\\s*allow`,
      );
      if (!allowRule.test(text)) localErrors.push(`нет allow subagent ${subagent.id}`);
    }
  }

  for (const legacy of ['temperature:', 'top_p:', 'maxSteps:', 'disable:', 'permission:']) {
    if (new RegExp(`^${legacy}`, 'm').test(text)) localErrors.push(`legacy-поле ${legacy}`);
  }

  if (localErrors.length) {
    fail(`${expected.label}: ${localErrors.join('; ')}`);
    rows.push([expected.label, expected.mode, 'FAIL', localErrors.join('; ')]);
  } else {
    ok(`${expected.label}: профиль валиден (${expected.mode})`);
    rows.push([expected.label, expected.mode, 'OK', frontmatter.model]);
  }
}

// Ровно 5 профилей: lead + 4 subagent, без старых файлов
const expectedAgentFiles = ['backend-db.md', 'factory-lead.md', 'frontend-ui.md', 'logic-state.md', 'qa-universal.md'];
const actualAgentFiles = readdirSync(join(root, '.opencode/agents'))
  .filter((file) => file.endsWith('.md'))
  .sort();
if (actualAgentFiles.length !== expectedAgentFiles.length) {
  fail(`.opencode/agents: ${actualAgentFiles.length} профилей, ожидается ${expectedAgentFiles.length}`);
} else if (actualAgentFiles.some((file, index) => file !== expectedAgentFiles[index])) {
  fail(`.opencode/agents: неверный набор профилей: ${actualAgentFiles.join(', ')}`);
} else {
  ok('.opencode/agents: ровно 5 профилей (1 lead + 4 subagent)');
}

// Конфиг OpenCode
const configText = read('opencode.jsonc');
if (configText) {
  try {
    const config = JSON.parse(stripJsonComments(configText));
    if (config.default_agent !== 'factory-lead') {
      fail(`opencode.jsonc: default_agent=${config.default_agent || 'нет'}, ожидается factory-lead`);
    } else {
      ok('opencode.jsonc: factory-lead назначен главным агентом');
    }
    if (config.model !== 'opencode-go/deepseek-v4.1-flash') {
      fail(`opencode.jsonc: model=${config.model || 'нет'}, ожидается opencode-go/deepseek-v4.1-flash`);
    } else {
      ok('opencode.jsonc: базовая модель DeepSeek V4.1 Flash');
    }
    if (!Array.isArray(config.permissions) || config.permissions.length === 0) {
      fail('opencode.jsonc: пустые permissions');
    } else {
      const deniesEnvRead = config.permissions.some(
        (rule) => rule.action === 'read' && rule.resource === '.env*' && rule.effect === 'deny',
      );
      if (!deniesEnvRead) fail('opencode.jsonc: нет запрета чтения .env*');
      const deniesEnvEdit = config.permissions.some(
        (rule) => rule.action === 'edit' && rule.resource === '.env*' && rule.effect === 'deny',
      );
      if (!deniesEnvEdit) fail('opencode.jsonc: нет запрета записи .env*');
      if (deniesEnvRead && deniesEnvEdit) ok('opencode.jsonc: валиден, секреты защищены');
    }
    if (config.$schema !== 'https://opencode.ai/config.json') {
      fail('opencode.jsonc: неверный $schema');
    }
  } catch (error) {
    fail(`opencode.jsonc: не парсится (${error.message})`);
  }
}

// Состояние конвейера
const stateText = read('factory/state/pipeline-state.json');
if (stateText) {
  try {
    const state = JSON.parse(stateText);
    const stages = Array.isArray(state.stages) ? state.stages : [];
    if (stages.length !== 5) fail(`pipeline-state: ${stages.length} стадий, ожидается 5`);
    const ids = new Set(stages.map((stage) => stage.id));
    if (ids.size !== stages.length) fail('pipeline-state: повторяющиеся id стадий');
    for (const required of ['00-intake', '01-frontend-ui', '02-logic-state', '03-backend-db', '04-qa']) {
      if (!ids.has(required)) fail(`pipeline-state: нет стадии ${required}`);
    }
    if (state.orchestrator?.agent !== 'factory-lead') {
      fail('pipeline-state: orchestrator.agent должен быть factory-lead');
    }
    if (state.orchestrator?.model !== expectedLead.model) {
      fail(`pipeline-state: orchestrator.model должен быть ${expectedLead.model}`);
    }
    const stateSubagents = Array.isArray(state.orchestrator?.subagents) ? state.orchestrator.subagents : [];
    if (stateSubagents.length !== expectedSubagents.length) {
      fail(`pipeline-state: ${stateSubagents.length} субагентов, ожидается ${expectedSubagents.length}`);
    }
    for (const subagent of expectedSubagents) {
      if (!stateSubagents.includes(subagent.id)) {
        fail(`pipeline-state: нет субагента ${subagent.id}`);
      }
    }
    if (stages[0]?.agent !== 'factory-lead') {
      fail('pipeline-state: стадия 00-intake должна принадлежать factory-lead');
    }
    if (!errors.some((item) => item.includes('pipeline-state'))) {
      ok('pipeline-state: 5 стадий, 4 субагента, оркестратор factory-lead');
    }
  } catch (error) {
    fail(`pipeline-state: не парсится (${error.message})`);
  }
}

// Базовые каталоги и документы
const requiredPaths = [
  'factory/README.md',
  'factory/REASONING-PROTOCOL.md',
  'factory/PIPELINE.md',
  'factory/HANDOFF-SCHEMA.md',
  'factory/runs',
  'factory/artifacts/01-frontend-ui',
  'factory/artifacts/02-logic-state',
  'factory/artifacts/03-backend-db',
  'factory/artifacts/04-qa',
  'tests/unit',
  'tests/e2e',
];
for (const relativePath of requiredPaths) {
  const full = join(root, relativePath);
  if (!existsSync(full)) fail(`Нет пути: ${relativePath}`);
  else if (relativePath.includes('artifacts/') && !statSync(full).isDirectory()) {
    fail(`Ожидался каталог: ${relativePath}`);
  }
}
if (!errors.some((item) => item.startsWith('Нет пути'))) {
  ok('Структура каталогов и документов на месте');
}

const header = ['Агент', 'Режим', 'Статус', 'Модель'];
const widths = [28, 10, 6, 38];
const line = (cells) => cells.map((cell, index) => String(cell).padEnd(widths[index])).join(' | ');
console.log(line(header));
console.log(widths.map((width) => '-'.repeat(width)).join('-+-'));
for (const row of rows) console.log(line(row));
console.log('');

if (errors.length) {
  console.error('Проверка не пройдена:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Проверка пройдена. ${checks.length} проверок.`);
