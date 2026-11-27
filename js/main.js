// ==================== CS2 CATALOG ====================
const CATALOG = Array.isArray(window.CS2_SKINS) ? window.CS2_SKINS : [];
const CATALOG_META = window.CS2_CATALOG_META || {
  source: 'Steam Community Market',
  currency: 'RUB',
  updatedAt: '',
};
const CATALOG_BY_ID = new Map(CATALOG.map((item) => [item.id, item]));
const STEAM_LISTING_BASE = 'https://steamcommunity.com/market/listings/730/';

const CASE_HUE = {
  1: 0,
  2: 170,
  3: 85,
  4: 18,
  5: 235,
  6: 335,
  7: 285,
  8: 40,
  9: 350,
  10: 190,
  11: 25,
  12: 355,
  13: 100,
};

const CASE_THEME = {
  1: { accent: '#c8f94f', art: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3QV7aD7OP01IfbGDzPCmbsm4LU5GnvkzUsi4WvUmIqtci_CPQNyApsjE_lK7EfrhW545A' },
  2: { accent: '#74d7ff', art: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frGxZvqX4avxuIabDXDPJxb534uQ-TH-3wk8isGqByIuoIHKRbQRyXpJ2W6dU5a9fuS_R' },
  3: { accent: '#9bcf4f', art: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3YVvfD9aqVveKaQDDKSl7134bg_HH3hlBty6z7Vn9v6eXmeZgBxWJd0EflK7Efs4hZiKQ' },
  4: { accent: '#c8f94f', art: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHsVtqr8a_dsdKTAWDWVxLgjsrAwHSvgwEQk4m-ByYuqIC2eO1VyD5QiR_lK7EcxQQPYQA' },
  5: { accent: '#b06cff', art: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3cV6vT9avBvefWWDDGTxbZ14rhsTX7qkE90sDiHwt2pdC-TblJ2DsB1QPlK7Ee9riHKAA' },
  6: { accent: '#ff8a4c', art: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3UVu6P-MPQ0dKbCVzLGx7wgtbM6S3jhw0V25m-EnNj7JS7GaQ4nD8QiRflK7EfH0YGFHg' },
  7: { accent: '#ff4fd8', art: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHQV7qCra_JscqPGCzLCl78ktuAxHSzmzUh_sjvWzdqoI33CaQF2DscjR_lK7EeF3oM7TA' },
  8: { accent: '#ffd166', art: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3IV6vSrbfw8eaiWCjWVkewgseM9TXyxl0wi6mSHn9-tIHqUbg5yDpEmEPlK7EcXFmSLsw' },
  9: { accent: '#ff6b6b', art: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fqmwOuKD2PqI6caDBWDeUkO8uteM9SnDglklw6miEn9j6IHKfblNxA5pxW6dU5UH4LtBe' },
  10: { accent: '#7cd9ff', art: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHcVuPaoafU1JqiVWWSVkux15OQ8Giiylk0k5mvTnIqpd3PCaQIhWMYkE_lK7EcNeCKW-w' },
  11: { accent: '#ffd166', art: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3MVv_H4a6FucPPBWjDIkbdz4rg4Syyyxxsi5mzRntuvJCqVbwAgDZBwRPlK7EcZJ5GkQA' },
  12: { accent: '#ff8a4c', art: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHUVt_b6PfY1JfOSXDXJxbgjtLFqHnDqx0Qmtm_Vzdf4ICmUZlJ2C5F2TPlK7EdjN0FcPg' },
  13: { accent: '#c8f94f', art: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bjz61TqQCKj0JfipHMN7aX2bfM9eaPDXT7Glbx1s7Y8HHHnw0sltWXSmYmqcH-UaAU-Sswn_16VNj0' },
};

function getCatalogSkin(id) {
  return CATALOG_BY_ID.get(id) || null;
}

function steamListingUrl(marketHashName) {
  return marketHashName
    ? STEAM_LISTING_BASE + encodeURIComponent(marketHashName)
    : '';
}

function makeDefaultWeights(count) {
  if (count <= 0) return [];
  if (count === 1) return [1];
  const first = 38;
  const last = 0.35;
  const ratio = Math.pow(last / first, 1 / (count - 1));
  return Array.from({ length: count }, (_, index) => first * Math.pow(ratio, index));
}

function buildCaseItems(ids, weights) {
  const skins = ids
    .map((id) => getCatalogSkin(id))
    .filter(Boolean)
    .slice()
    .sort((a, b) => a.price - b.price);

  const profile = weights && weights.length ? weights : makeDefaultWeights(skins.length);

  return skins.map((skin, index) => ({
    ...skin,
    weight: profile[Math.min(index, profile.length - 1)] || 0.35,
  }));
}

function casePrice(items) {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  if (!items.length || totalWeight <= 0) return 10;
  const expectedValue = items.reduce(
    (sum, item) => sum + item.price * (item.weight / totalWeight),
    0
  );
  return Math.max(10, Math.round(expectedValue * 0.9));
}

function buildCase(definition) {
  const items = buildCaseItems(definition.items, definition.weights || []);
  const cover = getCatalogSkin(definition.cover) || items[items.length - 1];
  const theme = CASE_THEME[definition.id] || {};
  return {
    id: definition.id,
    name: definition.name,
    desc: definition.desc,
    badge: definition.badge || null,
    category: definition.category,
    accent: definition.accent || theme.accent || '#c8f94f',
    hue: CASE_HUE[definition.id] || 0,
    caseArt: definition.caseArt || theme.art || '',
    img: cover ? cover.img : 'assets/placeholder.svg',
    price: casePrice(items),
    items,
  };
}

// ==================== DATA ====================
const CASES = [
  buildCase({
    id: 1, name: 'Стартовый кейс', desc: 'Базовые скины CS2 для старта',
    badge: 'hot', category: ['popular', 'cheap', 'budget'], cover: 'ak-47-slate',
    items: ['ak-47-slate', 'm4a4-magnesium', 'm4a1-s-basilisk', 'awp-atheris', 'glock-18-high-beam', 'usp-s-purple-ddpat', 'p250-sand-dune', 'mp9-airlock', 'mac-10-whitefish'],
  }),
  buildCase({
    id: 2, name: 'Ледяной кейс', desc: 'Холодные и синие текстуры',
    category: ['cheap', 'budget'], cover: 'awp-fever-dream',
    items: ['awp-fever-dream', 'm4a1-s-blue-phosphor', 'usp-s-whiteout', 'ssg-08-abyss', 'glock-18-moonrise', 'mp9-airlock', 'mac-10-whitefish', 'dual-berettas-melondrama', 'five-seven-silver-quartz'],
  }),
  buildCase({
    id: 3, name: 'Военный кейс', desc: 'Камуфляж и армейская классика',
    badge: 'new', category: ['cheap', 'budget', 'rifle'], cover: 'awp-worm-god',
    items: ['ak-47-slate', 'm4a4-magnesium', 'awp-worm-god', 'glock-18-steel-disruption', 'usp-s-stainless', 'famas-sergeant', 'galil-ar-blue-titanium', 'sg-553-army-sheen', 'negev-army-sheen', 'm249-submerged'],
  }),
  buildCase({
    id: 4, name: 'Стандартный кейс', desc: 'Баланс популярных скинов',
    badge: 'hot', category: ['popular', 'rifle'], cover: 'ak-47-redline',
    items: ['ak-47-redline', 'm4a4-evil-daimyo', 'm4a1-s-nightmare', 'awp-neo-noir', 'desert-eagle-code-red', 'usp-s-caiman', 'glock-18-water-elemental', 'ssg-08-parallax', 'mp9-food-chain', 'mac-10-last-dive'],
  }),
  buildCase({
    id: 5, name: 'Кибер кейс', desc: 'Неон, Printstream и цифровые текстуры',
    badge: 'new', category: ['popular', 'cheap'], cover: 'm4a4-cyber-security',
    items: ['m4a4-cyber-security', 'ak-47-neon-rider', 'm4a1-s-printstream', 'glock-18-neo-noir', 'usp-s-cortex', 'mac-10-disco-tech', 'mp9-hydra', 'cz75-auto-xiangliu', 'aug-chameleon', 'p90-asiimov'],
  }),
  buildCase({
    id: 6, name: 'Кейс винтовок', desc: 'AK-47, M4, AWP и другие винтовки',
    badge: 'hot', category: ['rifle', 'popular'], cover: 'm4a4-the-emperor',
    items: ['ak-47-point-disarray', 'ak-47-asiimov', 'm4a4-desolate-space', 'm4a4-the-emperor', 'm4a1-s-golden-coil', 'm4a1-s-hyper-beast', 'awp-wildfire', 'awp-containment-breach', 'ssg-08-dragonfire', 'galil-ar-chatterbox'],
  }),
  buildCase({
    id: 7, name: 'Элитный кейс', desc: 'Редкие и красивые скины',
    badge: 'premium', category: ['premium'], cover: 'ak-47-the-empress',
    items: ['ak-47-bloodsport', 'ak-47-the-empress', 'm4a4-neo-noir', 'm4a1-s-player-two', 'awp-hyper-beast', 'desert-eagle-kumicho-dragon', 'usp-s-the-traitor', 'glock-18-bullet-queen', 'mp9-mount-fuji', 'mac-10-neon-rider'],
  }),
  buildCase({
    id: 8, name: 'Премиум кейс', desc: 'Топовые скины для коллекции',
    badge: 'premium', category: ['premium'], cover: 'm4a4-asiimov',
    items: ['ak-47-vulcan', 'm4a4-asiimov', 'm4a1-s-chantico-s-fire', 'awp-asiimov', 'desert-eagle-hypnotic', 'usp-s-neo-noir', 'glock-18-fade', 'ssg-08-blood-in-the-water', 'mp9-starlight-protector', 'mac-10-gold-brick'],
  }),
  buildCase({
    id: 9, name: 'Кейс ножей', desc: 'Все 20 моделей ножей CS2',
    badge: 'new', category: ['knife', 'premium'], cover: 'butterfly-knife-tiger-tooth',
    items: ['bayonet-lore', 'butterfly-knife-tiger-tooth', 'falchion-knife-slaughter', 'flip-knife-marble-fade', 'gut-knife-doppler', 'karambit-fade', 'm9-bayonet-crimson-web', 'shadow-daggers-gamma-doppler', 'bowie-knife-case-hardened', 'huntsman-knife-ultraviolet', 'survival-knife-case-hardened', 'paracord-knife-fade', 'navaja-knife-doppler', 'nomad-knife-slaughter', 'skeleton-knife-fade', 'stiletto-knife-doppler', 'ursus-knife-marble-fade', 'talon-knife-tiger-tooth', 'classic-knife-blue-steel', 'kukri-knife-fade'],
  }),
  buildCase({
    id: 10, name: 'Кейс перчаток', desc: '16 перчаток всех коллекций',
    badge: 'premium', category: ['glove', 'premium'], cover: 'sport-gloves-vice',
    items: ['sport-gloves-vice', 'sport-gloves-pandora-s-box', 'specialist-gloves-field-agent', 'specialist-gloves-fade', 'driver-gloves-king-snake', 'driver-gloves-crimson-weave', 'hand-wraps-cobalt-skulls', 'hand-wraps-overprint', 'moto-gloves-spearmint', 'moto-gloves-pow', 'bloodhound-gloves-charred', 'bloodhound-gloves-snakebite', 'broken-fang-gloves-jade', 'broken-fang-gloves-unhinged', 'hydra-gloves-emerald', 'hydra-gloves-case-hardened'],
  }),
  buildCase({
    id: 11, name: 'Золотой кейс', desc: 'Золотые и огненные скины',
    badge: 'premium', category: ['premium', 'knife'], cover: 'glock-18-fade',
    items: ['glock-18-fade', 'desert-eagle-blaze', 'ak-47-case-hardened', 'm4a1-s-hot-rod', 'mac-10-amber-fade', 'r8-revolver-fade', 'butterfly-knife-tiger-tooth', 'talon-knife-tiger-tooth', 'driver-gloves-king-snake', 'moto-gloves-pow'],
  }),
  buildCase({
    id: 12, name: 'Кейс дракона', desc: 'Драконы, огонь и легендарные дропы',
    badge: 'premium', category: ['premium', 'knife'], cover: 'awp-oni-taiji',
    items: ['m4a4-dragon-king', 'awp-oni-taiji', 'desert-eagle-kumicho-dragon', 'ssg-08-dragonfire', 'ak-47-fire-serpent', 'specialist-gloves-field-agent', 'karambit-fade', 'bowie-knife-case-hardened', 'm9-bayonet-crimson-web', 'sport-gloves-pandora-s-box'],
  }),
  buildCase({
    id: 13, name: 'Божественный кейс', desc: 'Максимум ножей, перчаток и ультра-скинов',
    badge: 'premium', category: ['premium', 'knife', 'glove'], cover: 'karambit-fade',
    items: ['karambit-fade', 'butterfly-knife-tiger-tooth', 'talon-knife-tiger-tooth', 'skeleton-knife-fade', 'awp-chromatic-aberration', 'm4a4-poseidon', 'sport-gloves-vice', 'specialist-gloves-field-agent', 'driver-gloves-king-snake', 'hand-wraps-cobalt-skulls', 'moto-gloves-spearmint', 'hydra-gloves-emerald', 'broken-fang-gloves-jade'],
  }),
];

const BATTLES = [
  { id: 1, title: 'Батл 2x', status: 'waiting', players: '1/2', cases: [CASES[0], CASES[1]], host: 'PlayerOne' },
  { id: 2, title: 'Батл 3x', status: 'waiting', players: '2/3', cases: [CASES[2], CASES[3], CASES[4]], host: 'SkyWalker' },
  { id: 3, title: 'Премиум батл', status: 'waiting', players: '1/2', cases: [CASES[6], CASES[7]], host: 'NightOwl' },
  { id: 4, title: 'Быстрый батл', status: 'waiting', players: '1/2', cases: [CASES[0], CASES[2]], host: 'FastGamer' },
  { id: 5, title: 'Ножевой батл', status: 'waiting', players: '1/2', cases: [CASES[8], CASES[9]], host: 'KnifeMaster' },
  { id: 6, title: 'Элитный батл', status: 'waiting', players: '1/2', cases: [CASES[12], CASES[10]], host: 'DragonSlayer' },
].map((battle) => ({
  ...battle,
  price: Math.max(50, Math.round(battle.cases.reduce((sum, caseData) => sum + caseData.price, 0) / 2)),
}));

// ==================== CONSTANTS ====================
const STORAGE_KEY = 'foksik.case.v1';
const LEGACY_STORAGE_KEY = 'so2cases.demo.v1';
const STATE_VERSION = 1;
const DEFAULT_BALANCE = 1250;
const MAX_DEPOSIT = 100000;
const MAX_BALANCE = 10000000;
const CASE_QUANTITIES = [1, 2, 5, 10];

const RARITY_LABELS = {
  consumer: 'ширпотреб',
  industrial: 'промышленный',
  milspec: 'армейский',
  restricted: 'запрещённый',
  classified: 'засекреченный',
  covert: 'тайный',
  contraband: 'контрабанда',
  extraordinary: 'исключительный',
};

const RARITY_COLORS = {
  consumer: '#b0c3d9',
  industrial: '#5e98d9',
  milspec: '#4b69ff',
  restricted: '#8847ff',
  classified: '#d32ce6',
  covert: '#eb4b4b',
  contraband: '#e4ae39',
  extraordinary: '#eb4b4b',
};

const LEGACY_RARITY_MAP = {
  common: 'consumer',
  uncommon: 'industrial',
  rare: 'milspec',
  epic: 'restricted',
  legendary: 'classified',
  ancient: 'covert',
  divine: 'extraordinary',
};

function normalizeRarity(rarity) {
  if (RARITY_LABELS[rarity]) return rarity;
  return LEGACY_RARITY_MAP[rarity] || 'consumer';
}

const SECTION_IDS = {
  cases: 'casesSection',
  skins: 'skinsSection',
  battle: 'battleSection',
  upgrade: 'upgradeSection',
  inventory: 'inventorySection',
};

// ==================== STATE ====================
let appState = loadState();
let currentCase = null;
let currentWins = [];
let lastCaseId = null;
let caseOpenQuantity = 1;
let lastCaseQuantity = 1;
let depositAmount = 0;
let isSpinning = false;
let spinTimer = null;
let activeFilter = 'all';
let activeSkinCategory = 'all';
let activeSkinWeapon = 'all';
let skinSearchQuery = '';
let selectedUpgrade = null;
let upgradeChancePct = 25;
let upgradeTargets = [];
let upgradeInProgress = false;
let upgradeSpinTimer = null;
let upgradeSpinGeneration = 0;
let upgradeArrowRotation = 0;
let pendingBattles = new Set();
let stateGeneration = 0;
let activeModal = null;
let modalReturnFocus = null;
let notificationTimer = null;
let confettiTimer = null;
let fireworksTimer = null;

// ==================== HELPERS ====================
const $ = (id) => document.getElementById(id);

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]));
}

function createItemId() {
  if (window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }
  return `item-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function isSafeImageUrl(url) {
  return typeof url === 'string' && (
    url.startsWith('https://') ||
    url.startsWith('http://') ||
    url.startsWith('assets/')
  );
}

function makeOwnedItem(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const name = typeof raw.name === 'string' ? raw.name.trim().slice(0, 120) : '';
  const price = Number(raw.price);
  if (!name || !Number.isFinite(price) || price < 0) return null;

  return {
    id: createItemId(),
    catalogId: typeof raw.catalogId === 'string'
      ? raw.catalogId.slice(0, 120)
      : (typeof raw.id === 'string' ? raw.id.slice(0, 120) : null),
    baseName: typeof raw.baseName === 'string' ? raw.baseName.slice(0, 120) : null,
    weapon: typeof raw.weapon === 'string' ? raw.weapon.slice(0, 60) : null,
    group: typeof raw.group === 'string' ? raw.group.slice(0, 20) : null,
    groupLabel: typeof raw.groupLabel === 'string' ? raw.groupLabel.slice(0, 40) : null,
    name,
    price: Math.round(price * 100) / 100,
    rarity: normalizeRarity(raw.rarity),
    img: isSafeImageUrl(raw.img) ? raw.img : 'assets/placeholder.svg',
    wear: typeof raw.wear === 'string' ? raw.wear.slice(0, 40) : null,
    marketHashName: typeof raw.marketHashName === 'string' ? raw.marketHashName.slice(0, 200) : null,
  };
}

function normalizeSavedItem(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const name = typeof raw.name === 'string' ? raw.name.trim().slice(0, 120) : '';
  const price = Number(raw.price);
  if (!name || !Number.isFinite(price) || price < 0) return null;

  return {
    id: typeof raw.id === 'string' && raw.id ? raw.id.slice(0, 120) : createItemId(),
    catalogId: typeof raw.catalogId === 'string' ? raw.catalogId.slice(0, 120) : null,
    baseName: typeof raw.baseName === 'string' ? raw.baseName.slice(0, 120) : null,
    weapon: typeof raw.weapon === 'string' ? raw.weapon.slice(0, 60) : null,
    group: typeof raw.group === 'string' ? raw.group.slice(0, 20) : null,
    groupLabel: typeof raw.groupLabel === 'string' ? raw.groupLabel.slice(0, 40) : null,
    name,
    price: Math.round(price * 100) / 100,
    rarity: normalizeRarity(raw.rarity),
    img: isSafeImageUrl(raw.img) ? raw.img : 'assets/placeholder.svg',
    wear: typeof raw.wear === 'string' ? raw.wear.slice(0, 40) : null,
    marketHashName: typeof raw.marketHashName === 'string' ? raw.marketHashName.slice(0, 200) : null,
  };
}

function defaultState() {
  return { version: STATE_VERSION, balance: DEFAULT_BALANCE, inventory: [] };
}

function loadState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
      || window.localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return defaultState();

    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== STATE_VERSION) return defaultState();

    const parsedBalance = Number(parsed.balance);
    const balance = Number.isFinite(parsedBalance)
      ? Math.min(Math.max(parsedBalance, 0), MAX_BALANCE)
      : DEFAULT_BALANCE;

    const seenIds = new Set();
    const inventory = Array.isArray(parsed.inventory)
      ? parsed.inventory.map(normalizeSavedItem).filter(Boolean).map((item) => {
        if (seenIds.has(item.id)) item.id = createItemId();
        seenIds.add(item.id);
        return item;
      })
      : [];

    return { version: STATE_VERSION, balance, inventory };
  } catch (error) {
    return defaultState();
  }
}

function persistState() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (error) {
    // В приватном режиме или при переполнении хранилища приложение продолжает работать в памяти.
  }
}

function formatMoney(value) {
  return Number(value).toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatInt(value) {
  return Math.round(Number(value)).toLocaleString('ru-RU', {
    maximumFractionDigits: 0,
  });
}

function getSectionScrollOffset() {
  if (window.matchMedia('(max-width: 900px)').matches) return 14;
  const nav = document.querySelector('.header-inner');
  return nav ? nav.offsetHeight : 0;
}

function updateHeaderCollapse() {
  const header = document.querySelector('.header');
  const inner = document.querySelector('.header-inner');
  if (!header || !inner) return;

  if (window.matchMedia('(max-width: 900px)').matches) {
    document.documentElement.style.setProperty('--header-collapse', '0px');
    return;
  }

  const collapse = Math.max(0, header.offsetHeight - inner.offsetHeight);
  document.documentElement.style.setProperty('--header-collapse', `${collapse}px`);
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function weightedPick(items) {
  const totalWeight = items.reduce((sum, item) => sum + Math.max(Number(item.weight) || 0, 0), 0);
  if (totalWeight <= 0) return items[0];

  let random = Math.random() * totalWeight;
  for (const item of items) {
    random -= Math.max(Number(item.weight) || 0, 0);
    if (random < 0) return item;
  }
  return items[items.length - 1];
}

const RARITY_TEXT_COLORS = {
  consumer: '#d7e4f0',
  industrial: '#9cc4ea',
  milspec: '#a7b4ff',
  restricted: '#c8a8ff',
  classified: '#ee9aef',
  covert: '#ffa0a0',
  contraband: '#f3cd82',
  extraordinary: '#ffa0a0',
};

function getRarityColor(rarity) {
  return RARITY_COLORS[rarity] || RARITY_COLORS.consumer;
}

function getRarityTextColor(rarity) {
  return RARITY_TEXT_COLORS[rarity] || RARITY_TEXT_COLORS.consumer;
}

function getActiveItems() {
  const seen = new Set();
  const items = [];
  CASES.forEach((caseData) => {
    caseData.items.forEach((item) => {
      const key = `${item.name}|${item.price}`;
      if (!seen.has(key)) {
        seen.add(key);
        items.push(item);
      }
    });
  });
  return items;
}

function getUpgradeTargets(source, chance) {
  const safeChance = Math.max(1, Math.min(95, Number(chance) || 25));
  const maxPrice = (source.price / (safeChance / 100)) * 0.98;

  return CATALOG
    .filter((item) => (
      item.id !== source.catalogId
      && item.price > source.price * 1.05
      && item.price <= maxPrice
    ))
    .sort((a, b) => b.price - a.price)
    .slice(0, 80);
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  persistState();
  bindEvents();
  renderCatalogMeta();
  renderCatalogFilters();
  renderCatalog();
  renderCases('all');
  renderBattles();
  renderInventory();
  updateBalanceUI();
  generateFeedItems();
  startLiveFeed();
  initializeDepositButtons();
  setUpgradeWheelChance(0);
  renderUpgradeChanceChips();
  renderUpgradeTargets();
  hideUpgradeResult();
  showSection('cases', { scroll: false });
  updateHeaderCollapse();
  window.addEventListener('resize', updateHeaderCollapse);
  window.addEventListener('load', updateHeaderCollapse);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(updateHeaderCollapse).catch(() => {});
  }
});

function bindEvents() {
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keydown', handleGlobalKeydown);
  document.addEventListener('error', handleImageError, true);

  $('skinSearch').addEventListener('input', (event) => {
    skinSearchQuery = event.target.value.trim().toLowerCase();
    renderCatalog();
  });
  $('skinWeaponFilter').addEventListener('change', (event) => {
    activeSkinWeapon = event.target.value;
    renderCatalog();
  });

  $('rouletteClose').addEventListener('click', requestCloseRoulette);
  $('spinBtn').addEventListener('click', spinRoulette);
  $('winClose').addEventListener('click', keepWin);
  $('winSell').addEventListener('click', () => resolveWin('sell'));
  $('winKeep').addEventListener('click', () => resolveWin('keep'));
  $('winAgain').addEventListener('click', () => resolveWin('again'));
  const winSellAgain = $('winSellAgain');
  if (winSellAgain) {
    winSellAgain.addEventListener('click', () => resolveWin('sellAgain'));
  }

  $('depositClose').addEventListener('click', closeDeposit);
  $('depositSubmit').addEventListener('click', doDeposit);
  $('depositCustom').addEventListener('input', () => {
    depositAmount = 0;
    document.querySelectorAll('[data-deposit]').forEach((button) => {
      button.classList.remove('selected');
      button.setAttribute('aria-pressed', 'false');
    });
  });
  $('depositCustom').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      doDeposit();
    }
  });

  $('previewClose').addEventListener('click', () => closeModal($('previewModal')));
  $('upgradeFrom').addEventListener('click', focusUpgradePicker);
  $('upgradeFrom').addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      focusUpgradePicker();
    }
  });
  $('upgradeBtn').addEventListener('click', doUpgrade);
  $('sellAllBtn').addEventListener('click', sellAll);

  document.querySelectorAll('[data-jump]').forEach((button) => {
    button.addEventListener('click', () => jumpToSection(button.dataset.jump));
  });
  const dismissUpgradeResult = document.querySelector('[data-dismiss-upgrade-result]');
  if (dismissUpgradeResult) {
    dismissUpgradeResult.addEventListener('click', closeUpgradeResult);
  }
  const upgradeResultAgain = $('upgradeResultAgain');
  if (upgradeResultAgain) {
    upgradeResultAgain.addEventListener('click', () => {
      hideUpgradeResult();
      focusUpgradePicker();
    });
  }

  $('resetCancel').addEventListener('click', () => closeModal($('resetModal')));
  $('resetClose').addEventListener('click', () => closeModal($('resetModal')));
  $('resetConfirm').addEventListener('click', resetProgress);

  document.querySelectorAll('.js-modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) requestModalClose(modal);
    });
  });

  document.querySelectorAll('[data-open-deposit]').forEach((button) => {
    button.addEventListener('click', (event) => openDeposit(event.currentTarget));
  });
  $('depositBtn').addEventListener('click', (event) => openDeposit(event.currentTarget));
  $('balanceBox').addEventListener('click', (event) => openDeposit(event.currentTarget));

  document.querySelectorAll('[data-reset-progress]').forEach((button) => {
    button.addEventListener('click', (event) => openResetDialog(event.currentTarget));
  });
}

function handleDocumentClick(event) {
  if (event.target.closest('[data-scroll-top]')) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
    return;
  }

  const sectionTrigger = event.target.closest('[data-section]');
  if (sectionTrigger) {
    event.preventDefault();
    const isLogo = sectionTrigger.classList.contains('logo');
    showSection(sectionTrigger.dataset.section, { scroll: !isLogo });
    if (isLogo) {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
    return;
  }

  const filterButton = event.target.closest('[data-filter]');
  if (filterButton) {
    activeFilter = filterButton.dataset.filter;
    document.querySelectorAll('.case-cat[data-filter]').forEach((button) => {
      button.classList.toggle('active', button === filterButton);
      button.setAttribute('aria-pressed', String(button === filterButton));
    });
    renderCases(activeFilter);
    return;
  }

  const skinCategoryButton = event.target.closest('[data-skin-category]');
  if (skinCategoryButton) {
    activeSkinCategory = skinCategoryButton.dataset.skinCategory;
    activeSkinWeapon = 'all';
    const weaponFilter = $('skinWeaponFilter');
    if (weaponFilter) weaponFilter.value = 'all';
    document.querySelectorAll('[data-skin-category]').forEach((button) => {
      const isActive = button === skinCategoryButton;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    renderCatalog();
    return;
  }

  const catalogCard = event.target.closest('[data-preview-skin]');
  if (catalogCard) {
    previewCatalogItem(catalogCard.dataset.previewSkin, catalogCard);
    return;
  }

  const caseCard = event.target.closest('[data-case-id]');
  if (caseCard) {
    openCase(Number(caseCard.dataset.caseId), caseCard);
    return;
  }

  const quantityButton = event.target.closest('[data-case-qty]');
  if (quantityButton) {
    setCaseQuantity(Number(quantityButton.dataset.caseQty));
    return;
  }

  const previewButton = event.target.closest('[data-preview-item]');
  if (previewButton) {
    previewItem(previewButton.dataset.previewItem, previewButton);
    return;
  }

  const sellButton = event.target.closest('[data-sell-item]');
  if (sellButton) {
    sellItem(sellButton.dataset.sellItem);
    return;
  }

  const chanceButton = event.target.closest('[data-upgrade-chance]');
  if (chanceButton) {
    setUpgradeChance(Number(chanceButton.dataset.upgradeChance));
    return;
  }

  const targetButton = event.target.closest('[data-target-id]');
  if (targetButton) {
    selectUpgradeTarget(targetButton.dataset.targetId);
    return;
  }

  const sourceButton = event.target.closest('[data-source-id]');
  if (sourceButton) {
    selectUpgradeSource(sourceButton.dataset.sourceId);
    return;
  }

  const battleButton = event.target.closest('[data-battle-id]');
  if (battleButton) {
    joinBattle(Number(battleButton.dataset.battleId));
    return;
  }

  const depositButton = event.target.closest('[data-deposit]');
  if (depositButton) {
    selectDeposit(Number(depositButton.dataset.deposit), depositButton);
    return;
  }

  if (event.target.closest('[data-open-cases]')) {
    showSection('cases');
  }
}

function handleGlobalKeydown(event) {
  if (!activeModal) {
    const result = $('upgradeResult');
    if (event.key === 'Escape' && result && !result.hidden) {
      event.preventDefault();
      closeUpgradeResult();
    }
    return;
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    requestModalClose(activeModal);
    return;
  }

  if (event.key !== 'Tab') return;

  const focusable = Array.from(activeModal.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter((element) => element.getClientRects().length > 0);

  if (!focusable.length) {
    event.preventDefault();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (!activeModal.contains(document.activeElement)) {
    event.preventDefault();
    first.focus();
    return;
  }

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function handleImageError(event) {
  const image = event.target;
  if (!(image instanceof HTMLImageElement)) return;
  if (image.dataset.fallbackApplied === 'true') return;

  image.dataset.fallbackApplied = 'true';
  image.src = 'assets/placeholder.svg';
  image.classList.add('img-fallback');
}

// ==================== MODALS ====================
const MODAL_CLOSE_HANDLERS = {
  rouletteModal: () => requestCloseRoulette(),
  winOverlay: () => keepWin(),
  depositOverlay: () => closeDeposit(),
  previewModal: () => closeModal($('previewModal')),
  resetModal: () => closeModal($('resetModal')),
};

function openModal(modal, initialFocus, returnFocus) {
  if (!modal) return;
  if (activeModal === modal) {
    if (initialFocus && !initialFocus.disabled) initialFocus.focus({ preventScroll: true });
    return;
  }

  if (activeModal) closeModal(activeModal, { restoreFocus: false });
  if (!modalReturnFocus) modalReturnFocus = returnFocus || document.activeElement;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  activeModal = modal;
  setPageInert(true);

  const focusTarget = initialFocus && !initialFocus.disabled
    ? initialFocus
    : modal.querySelector('[data-autofocus], button:not([disabled]), input:not([disabled]), a[href]');

  const focusInside = (target) => {
    if (!target || activeModal !== modal) return;
    if (modal.contains(document.activeElement)) return;
    if (typeof target.focus === 'function') target.focus({ preventScroll: true });
  };

  focusInside(focusTarget);
  window.requestAnimationFrame(() => {
    focusInside(focusTarget);
    window.setTimeout(() => focusInside(focusTarget), 60);
  });
}

function closeModal(modal, options = {}) {
  const { restoreFocus = true } = options;
  if (!modal) return;

  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  if (activeModal === modal) {
    activeModal = null;
    setPageInert(false);
    document.body.classList.remove('modal-open');

    const focusTarget = modalReturnFocus;
    if (restoreFocus) modalReturnFocus = null;

    if (restoreFocus && focusTarget && focusTarget.isConnected) {
      focusTarget.focus({ preventScroll: true });
    }
  }
}

function requestModalClose(modal) {
  const handler = MODAL_CLOSE_HANDLERS[modal.id];
  if (handler) handler();
}

function setPageInert(isInert) {
  document.querySelectorAll('body > .header, body > .main, body > .footer, body > .skip-link').forEach((element) => {
    if (isInert) element.setAttribute('inert', '');
    else element.removeAttribute('inert');
  });
}

// ==================== NAVIGATION ====================
function showSection(section, options = {}) {
  const { scroll = true } = options;
  const sectionElement = $(SECTION_IDS[section]);
  if (!sectionElement) return;

  document.querySelectorAll('.tab-section').forEach((element) => {
    element.classList.toggle('is-active', element === sectionElement);
  });

  document.querySelectorAll('.nav-link').forEach((button) => {
    const isActive = button.dataset.section === section;
    button.classList.toggle('active', isActive);
    if (isActive) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });

  if (section === 'skins') renderCatalog();
  if (section === 'inventory') renderInventory();
  if (scroll) {
    const top = sectionElement.getBoundingClientRect().top
      + window.scrollY
      - getSectionScrollOffset();
    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  }
}

function jumpToSection(section) {
  const sectionElement = $(SECTION_IDS[section]);
  if (!sectionElement) return;

  showSection(section, { scroll: false });
  const top = sectionElement.getBoundingClientRect().top
    + window.scrollY
    - getSectionScrollOffset();

  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  sectionElement.setAttribute('tabindex', '-1');
  window.requestAnimationFrame(() => sectionElement.focus({ preventScroll: true }));
}

// ==================== SKINS CATALOG ====================
const SKIN_GROUP_LABELS = {
  rifles: 'винтовка',
  pistols: 'пистолет',
  smg: 'пистолет-пулемёт',
  heavy: 'тяжёлое',
  knives: 'нож',
  gloves: 'перчатки',
};

function formatSnapshotDate(value) {
  const match = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})/);
  return match ? `${match[3]}.${match[2]}.${match[1]}` : String(value || '');
}

function renderCatalogMeta() {
  const count = CATALOG.length;
  const catalogCount = $('skinsCount');
  const updated = $('skinsUpdated');

  if (catalogCount) catalogCount.textContent = `${count} ${pluralizeItems(count)}`;
  if (updated) {
    const date = formatSnapshotDate(CATALOG_META.updatedAt);
    updated.textContent = `Цены Steam Market${date ? ` · ${date}` : ''} · RUB`;
  }
}

function renderCatalogFilters() {
  const select = $('skinWeaponFilter');
  if (!select) return;

  const weapons = new Map();
  CATALOG.forEach((item) => {
    if (!weapons.has(item.weapon)) {
      weapons.set(item.weapon, { count: 0, popular: Boolean(item.popular) });
    }
    const entry = weapons.get(item.weapon);
    entry.count += 1;
    entry.popular = entry.popular || Boolean(item.popular);
  });

  const options = [...weapons.entries()]
    .sort((a, b) => {
      if (a[1].popular !== b[1].popular) return a[1].popular ? -1 : 1;
      return a[0].localeCompare(b[0], 'ru');
    })
    .map(([weapon, entry]) => (
      `<option value="${escapeHtml(weapon)}">${escapeHtml(weapon)} · ${entry.count}</option>`
    ))
    .join('');

  select.innerHTML = `<option value="all">Все оружия · ${CATALOG.length}</option>${options}`;
}

function renderCatalog() {
  const grid = $('skinsGrid');
  const empty = $('skinsEmpty');
  const count = $('skinsCount');
  if (!grid || !empty) return;

  const filtered = CATALOG.filter((item) => {
    if (activeSkinCategory !== 'all' && item.group !== activeSkinCategory) return false;
    if (activeSkinWeapon !== 'all' && item.weapon !== activeSkinWeapon) return false;
    if (skinSearchQuery) {
      const haystack = `${item.name} ${item.wear} ${item.weapon}`.toLowerCase();
      if (!haystack.includes(skinSearchQuery)) return false;
    }
    return true;
  });

  if (count) {
    count.textContent = `${filtered.length} ${pluralizeItems(filtered.length)}`;
  }

  if (!filtered.length) {
    grid.innerHTML = '';
    grid.hidden = true;
    empty.hidden = false;
    return;
  }

  grid.hidden = false;
  empty.hidden = true;
  grid.innerHTML = filtered.map(skinCardTemplate).join('');
}

function skinCardTemplate(item) {
  const rarityLabel = RARITY_LABELS[item.rarity] || '';
  const groupLabel = item.groupLabel || SKIN_GROUP_LABELS[item.group] || '';
  const displayBase = item.baseName || item.name;
  const parts = displayBase.split(' | ');
  const pattern = parts.length > 1 ? parts.slice(1).join(' | ') : displayBase;

  return `
    <button class="skin-card" type="button" data-preview-skin="${escapeHtml(item.id)}"
      style="--rarity:${getRarityColor(item.rarity)};--rarity-text:${getRarityTextColor(item.rarity)}">
      <span class="skin-card-rarity" aria-hidden="true"></span>
      <span class="skin-card-img-wrap">
        <img class="skin-card-img" src="${escapeHtml(item.img)}" alt="" loading="lazy">
      </span>
      <span class="skin-card-body">
        <span class="skin-card-weapon">${escapeHtml(item.weapon)} · ${escapeHtml(groupLabel)}</span>
        <span class="skin-card-name">${escapeHtml(pattern)}</span>
        <span class="skin-card-wear">${escapeHtml(item.wear)}</span>
        <span class="skin-card-meta">
          <span class="skin-card-price">${formatMoney(item.price)} ₽</span>
          <span class="skin-card-rarity-label">${escapeHtml(rarityLabel)}</span>
        </span>
      </span>
    </button>
  `;
}

function previewCatalogItem(itemId, trigger) {
  const item = getCatalogSkin(itemId);
  if (!item) return;
  showItemPreview(item, trigger);
}

// ==================== CASES ====================
function renderCases(filter) {
  const grid = $('casesGrid');
  const filtered = filter === 'all'
    ? CASES
    : CASES.filter((caseData) => caseData.category.includes(filter));

  if (!filtered.length) {
    grid.innerHTML = '<p class="empty-note">В этой категории пока нет кейсов.</p>';
    return;
  }

  grid.innerHTML = filtered.map((caseData) => {
    return `
      <button class="case-card" type="button" data-case-id="${caseData.id}" style="--case-accent:${caseData.accent};--case-hue:${caseData.hue}deg">
        <span class="case-card-head">
          <span class="case-card-name">${escapeHtml(caseData.name)}</span>
          <span class="case-card-count">${caseData.items.length} ${pluralizeItems(caseData.items.length)}</span>
        </span>
        <span class="case-card-media">
          <span class="case-card-glow" aria-hidden="true"></span>
          <img class="case-card-skin" src="${escapeHtml(caseData.img)}" alt="">
          ${caseData.caseArt ? `<img class="case-card-case" src="${escapeHtml(caseData.caseArt)}" alt="">` : ''}
        </span>
        <span class="case-card-footer">
          <span class="case-price"><span class="coin" aria-hidden="true">₽</span>${formatInt(caseData.price)}</span>
          <span class="case-open-btn" aria-hidden="true">Открыть</span>
        </span>
      </button>
    `;
  }).join('');
}

function openCase(caseId, trigger) {
  if (isSpinning) return;
  const caseData = CASES.find((item) => item.id === caseId);
  if (!caseData) return;

  currentCase = caseData;
  lastCaseId = caseId;
  currentWins = [];
  caseOpenQuantity = 1;

  $('rouletteTitle').textContent = `Открытие: ${caseData.name}`;
  $('rouletteCaseName').textContent = caseData.name;
  $('rouletteCasePrice').textContent = formatInt(caseData.price);
  renderRouletteTrack(caseData);
  renderCaseQuantity();
  setCaseQuantityControlsDisabled(false);
  updateRouletteTotal();
  updateSpinButton();

  const track = $('rouletteTrack');
  track.style.transition = 'none';
  track.style.transform = 'translateX(0px)';

  openModal($('rouletteModal'), $('spinBtn'), trigger);
}

function renderCaseQuantity() {
  document.querySelectorAll('[data-case-qty]').forEach((button) => {
    const isActive = Number(button.dataset.caseQty) === caseOpenQuantity;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function setCaseQuantityControlsDisabled(disabled) {
  document.querySelectorAll('[data-case-qty]').forEach((button) => {
    button.disabled = disabled;
  });
}

function updateRouletteTotal() {
  if (!currentCase) return;
  const total = currentCase.price * caseOpenQuantity;
  const totalElement = $('rouletteTotal');
  if (totalElement) totalElement.textContent = `Итого: ${formatInt(total)} ₽`;
}

function setCaseQuantity(quantity) {
  if (isSpinning || !CASE_QUANTITIES.includes(quantity)) return;
  caseOpenQuantity = quantity;
  renderCaseQuantity();
  updateRouletteTotal();
  updateSpinButton();
}

function rouletteItemTemplate(item) {
  return `
    <div class="roulette-item">
      <img class="roulette-item-img" src="${escapeHtml(item.img)}" alt="">
      <div class="roulette-item-name">${escapeHtml(item.name)}</div>
      <div class="roulette-item-price">${formatMoney(item.price)} ₽</div>
      <div class="roulette-item-rarity" style="background:${getRarityColor(item.rarity)}"></div>
    </div>
  `;
}

function renderRouletteTrack(caseData, winIndex = -1, winItem = null) {
  const items = [];
  for (let index = 0; index < 60; index += 1) {
    items.push(index === winIndex && winItem ? winItem : weightedPick(caseData.items));
  }
  $('rouletteTrack').innerHTML = items.map(rouletteItemTemplate).join('');
}

function updateSpinButton() {
  if (!currentCase) return;
  const button = $('spinBtn');
  const totalPrice = currentCase.price * caseOpenQuantity;
  const canAfford = appState.balance >= totalPrice;

  if (isSpinning) {
    button.disabled = true;
    button.textContent = 'Прокрутка…';
    return;
  }

  button.disabled = !canAfford;

  if (!canAfford) {
    button.textContent = `Не хватает ${formatInt(totalPrice - appState.balance)} ₽`;
  } else if (caseOpenQuantity === 1) {
    button.textContent = '🎰 Открыть кейс';
  } else {
    button.textContent = `🎰 Открыть ${caseOpenQuantity} ${pluralizeCases(caseOpenQuantity)} · ${formatInt(totalPrice)} ₽`;
  }
}

function pluralizeCases(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return 'кейс';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'кейса';
  return 'кейсов';
}

function spinRoulette() {
  if (!currentCase || isSpinning) return;

  const caseData = currentCase;
  const quantity = caseOpenQuantity;
  const totalPrice = caseData.price * quantity;

  if (appState.balance < totalPrice) {
    showNotification('Недостаточно средств. Пополните баланс.', 'error');
    return;
  }

  const wonItems = [];
  for (let index = 0; index < quantity; index += 1) {
    const ownedItem = makeOwnedItem(weightedPick(caseData.items));
    if (ownedItem) wonItems.push(ownedItem);
  }
  if (!wonItems.length) return;

  appState.balance -= totalPrice;
  appState.inventory.push(...wonItems);
  currentWins = wonItems;
  lastCaseQuantity = quantity;
  persistState();
  updateBalanceUI();
  renderInventory();

  isSpinning = true;
  setCaseQuantityControlsDisabled(true);
  $('spinBtn').disabled = true;
  $('spinBtn').textContent = 'Прокрутка…';
  $('rouletteClose').setAttribute('aria-disabled', 'true');

  const showcaseItem = wonItems.reduce(
    (best, item) => (item.price > best.price ? item : best),
    wonItems[0],
  );
  const winIndex = 45;
  renderRouletteTrack(caseData, winIndex, showcaseItem);

  const track = $('rouletteTrack');
  const container = $('rouletteContainer');
  const targetItem = track.children[winIndex];
  track.style.transition = 'none';
  track.style.transform = 'translateX(0px)';

  if (!targetItem) {
    isSpinning = false;
    $('rouletteClose').removeAttribute('aria-disabled');
    closeModal($('rouletteModal'), { restoreFocus: false });
    showWinModal(wonItems);
    return;
  }

  const itemCenter = targetItem.offsetLeft + (targetItem.offsetWidth / 2);
  const jitter = (Math.random() - 0.5) * Math.min(28, targetItem.offsetWidth * 0.25);
  const offset = Math.max(0, itemCenter - (container.clientWidth / 2) + jitter);
  const duration = prefersReducedMotion() ? 160 : 4800;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      track.style.transition = prefersReducedMotion()
        ? 'transform 160ms linear'
        : 'transform 4800ms cubic-bezier(0.12, 0.72, 0.2, 1)';
      track.style.transform = `translateX(-${offset}px)`;
    });
  });

  spinTimer = window.setTimeout(() => {
    spinTimer = null;
    isSpinning = false;
    $('rouletteClose').removeAttribute('aria-disabled');
    closeModal($('rouletteModal'), { restoreFocus: false });
    showWinModal(wonItems);
  }, duration + 350);
}

function requestCloseRoulette() {
  if (isSpinning) {
    showNotification('Дождитесь результата прокрутки.', 'error');
    return;
  }
  closeModal($('rouletteModal'));
}

// ==================== WIN ====================
function winItemTemplate(item) {
  return `
    <li class="win-item" style="--rarity:${getRarityColor(item.rarity)}">
      <img class="win-item-thumb" src="${escapeHtml(item.img)}" alt="">
      <span class="win-item-copy">
        <span class="win-list-name">${escapeHtml(item.name)}</span>
        <span class="win-list-price">${formatMoney(item.price)} ₽</span>
      </span>
    </li>
  `;
}

function setWinActionLabels(count) {
  const single = count === 1;
  $('winSell').textContent = single ? '💰 Продать' : '💰 Продать всё';
  $('winKeep').textContent = single ? '🎒 В инвентарь' : '🎒 Оставить всё';
  $('winSellAgain').textContent = single ? '💸 Продать и крутить ещё' : '💸 Продать всё и ещё раз';
  $('winAgain').textContent = single ? '🔄 Оставить и ещё раз' : '🔄 Оставить всё и ещё раз';
  const divider = $('winAgainDivider');
  if (divider) {
    divider.textContent = single ? 'и сразу ещё' : `и сразу ещё ${count} ${pluralizeCases(count)}`;
  }
}

function showWinModal(items) {
  if (!Array.isArray(items) || !items.length) return;

  const single = items.length === 1;
  const modal = $('winModal');
  const winLabel = $('winLabel');
  const singleBlock = $('winSingle');
  const multiBlock = $('winMulti');

  if (single) {
    const item = items[0];
    $('winItemImg').src = item.img;
    $('winItemImg').alt = item.name;
    $('winItemName').textContent = item.name;
    $('winItemPrice').textContent = `${formatMoney(item.price)} ₽`;
    $('winClose').setAttribute('aria-label', 'Оставить в инвентаре и закрыть');
    winLabel.textContent = '🎉 Вы выиграли';
    $('winItems').innerHTML = '';
  } else {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    $('winMultiSummary').textContent = `${items.length} ${pluralizeItems(items.length)} · ${formatMoney(total)} ₽`;
    $('winItems').innerHTML = items.map(winItemTemplate).join('');
    $('winItems').scrollTop = 0;
    $('winClose').setAttribute('aria-label', 'Оставить всё в инвентаре и закрыть');
    winLabel.textContent = `🎉 Выиграно ${items.length} ${pluralizeItems(items.length)}`;
  }

  if (singleBlock) singleBlock.hidden = !single;
  if (multiBlock) multiBlock.hidden = single;
  if (modal) modal.classList.toggle('is-multi', !single);
  setWinActionLabels(items.length);

  openModal($('winOverlay'), $('winKeep'));
  window.requestAnimationFrame(() => {
    const list = $('winItems');
    if (list) list.scrollTop = 0;
    if (modal) modal.scrollTop = 0;
  });
  if (!prefersReducedMotion()) createConfetti();
}

function resolveWin(action) {
  if (!currentWins.length) {
    closeModal($('winOverlay'));
    return;
  }

  const wonItems = currentWins;
  const wonCount = wonItems.length;
  const shouldSell = action === 'sell' || action === 'sellAgain';
  const shouldOpenAgain = action === 'again' || action === 'sellAgain';
  let soldCount = 0;
  let soldTotal = 0;

  if (shouldSell) {
    wonItems.forEach((wonItem) => {
      const index = appState.inventory.findIndex((item) => item.id === wonItem.id);
      if (index < 0) return;
      appState.inventory.splice(index, 1);
      soldCount += 1;
      soldTotal += wonItem.price;
    });

    if (soldCount) {
      appState.balance = Math.min(appState.balance + soldTotal, MAX_BALANCE);
      persistState();
      updateBalanceUI();
      renderInventory();
      showNotification(
        wonCount === 1
          ? `Продано за ${formatMoney(soldTotal)} ₽.`
          : `Продано ${soldCount} ${pluralizeItems(soldCount)} за ${formatMoney(soldTotal)} ₽.`,
        'success',
      );
    } else {
      showNotification('Предметы уже отсутствуют в инвентаре.', 'error');
    }
  } else {
    showNotification(
      wonCount === 1
        ? `${wonItems[0].name} оставлен в инвентаре.`
        : `${wonCount} ${pluralizeItems(wonCount)} оставлены в инвентаре.`,
      'success',
    );
  }

  currentWins = [];
  closeModal($('winOverlay'));

  if (!shouldOpenAgain || !lastCaseId) return;

  const repeatQuantity = lastCaseQuantity;
  const caseData = CASES.find((item) => item.id === lastCaseId);
  const repeatTotal = caseData ? caseData.price * repeatQuantity : 0;

  if (caseData && appState.balance < repeatTotal) {
    const missing = repeatTotal - appState.balance;
    const quantityLabel = repeatQuantity === 1
      ? 'одного кейса'
      : `${repeatQuantity} ${pluralizeCases(repeatQuantity)}`;
    showNotification(
      `${soldCount ? 'Продано. ' : ''}Для ещё одного открытия ${quantityLabel} не хватает ${formatMoney(missing)} ₽.`,
      'error',
    );
    return;
  }

  window.setTimeout(() => {
    const trigger = document.querySelector(`[data-case-id="${lastCaseId}"]`)
      || document.querySelector('.nav-link[data-section="cases"]');
    openCase(lastCaseId, trigger);
    setCaseQuantity(repeatQuantity);
    if (action === 'sellAgain') spinRoulette();
  }, 250);
}

function keepWin() {
  resolveWin('keep');
}

// ==================== INVENTORY ====================
function renderInventory() {
  const grid = $('inventoryGrid');
  const count = $('invCount');
  count.textContent = `(${appState.inventory.length} ${pluralizeItems(appState.inventory.length)})`;

  if (!appState.inventory.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon" aria-hidden="true">🎒</div>
        <h3>Инвентарь пуст</h3>
        <p>Откройте кейс, чтобы получить первый скин.</p>
        <button class="primary-btn" type="button" data-open-cases>Перейти к кейсам</button>
      </div>
    `;
    renderUpgradePicker();
    return;
  }

  grid.innerHTML = appState.inventory.map((item) => `
    <article class="inv-card">
      <div class="inv-card-rarity" style="background:${getRarityColor(item.rarity)}"></div>
      <img class="inv-card-img" src="${escapeHtml(item.img)}" alt="${escapeHtml(item.name)}" loading="lazy">
      <div class="inv-card-name">${escapeHtml(item.name)}</div>
      <div class="inv-card-rarity-label" style="color:${getRarityTextColor(item.rarity)}">${escapeHtml(RARITY_LABELS[item.rarity] || 'обычный')}</div>
      <div class="inv-card-price">${formatMoney(item.price)} ₽</div>
      <div class="inv-card-actions">
        <button class="inv-btn inv-btn-preview" type="button" data-preview-item="${escapeHtml(item.id)}">Просмотр</button>
        <button class="inv-btn inv-btn-sell" type="button" data-sell-item="${escapeHtml(item.id)}" aria-label="Продать ${escapeHtml(item.name)} за ${formatMoney(item.price)} рублей">Продать</button>
      </div>
    </article>
  `).join('');
  renderUpgradePicker();
}

function pluralizeItems(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return 'предмет';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'предмета';
  return 'предметов';
}

function sellItem(itemId) {
  const index = appState.inventory.findIndex((item) => item.id === itemId);
  if (index < 0) return;

  const item = appState.inventory[index];
  appState.inventory.splice(index, 1);
  appState.balance = Math.min(appState.balance + item.price, MAX_BALANCE);
  if (selectedUpgrade && selectedUpgrade.sourceId === itemId) {
    resetUpgradeUI('Предмет продан. Выберите другой скин для апгрейда.');
  }
  persistState();
  updateBalanceUI();
  renderInventory();
  focusInventoryAfterChange(index);
  showNotification(`Продано за ${formatMoney(item.price)} ₽.`, 'success');
}

function focusInventoryAfterChange(preferredIndex = 0) {
  window.requestAnimationFrame(() => {
    const previewButtons = document.querySelectorAll('[data-preview-item]');
    const target = previewButtons[Math.min(preferredIndex, previewButtons.length - 1)]
      || document.querySelector('.empty-state [data-open-cases]')
      || document.getElementById('sellAllBtn');
    if (target) target.focus({ preventScroll: true });
  });
}

function sellAll() {
  if (!appState.inventory.length) {
    showNotification('Инвентарь уже пуст.', 'error');
    return;
  }

  const total = appState.inventory.reduce((sum, item) => sum + item.price, 0);
  const confirmed = window.confirm(`Продать все предметы за ${formatMoney(total)} ₽?`);
  if (!confirmed) return;

  appState.balance = Math.min(appState.balance + total, MAX_BALANCE);
  appState.inventory = [];
  if (selectedUpgrade) {
    resetUpgradeUI('Инвентарь продан. Выберите новый скин для апгрейда.');
  }
  persistState();
  updateBalanceUI();
  renderInventory();
  focusInventoryAfterChange(0);
  showNotification(`Всё продано за ${formatMoney(total)} ₽.`, 'success');
}

function previewItem(itemId, trigger) {
  const item = appState.inventory.find((entry) => entry.id === itemId);
  if (!item) return;
  showItemPreview(item, trigger);
}

function showItemPreview(item, trigger) {
  const groupLabel = item.groupLabel || SKIN_GROUP_LABELS[item.group] || '';
  const meta = [item.weapon, item.wear, groupLabel].filter(Boolean).join(' · ');
  const steamLink = $('previewSteamLink');

  $('previewImg').src = item.img;
  $('previewImg').alt = item.name;
  $('previewName').textContent = item.name;
  $('previewPrice').textContent = `${formatMoney(item.price)} ₽`;
  $('previewRarity').textContent = RARITY_LABELS[item.rarity] || 'обычный';
  $('previewRarity').style.color = getRarityTextColor(item.rarity);
  $('previewMeta').textContent = meta || 'Цена Steam Market';

  if (steamLink) {
    const url = steamListingUrl(item.marketHashName);
    if (url) {
      steamLink.href = url;
      steamLink.hidden = false;
    } else {
      steamLink.removeAttribute('href');
      steamLink.hidden = true;
    }
  }

  openModal($('previewModal'), $('previewClose'), trigger);
}

// ==================== UPGRADE ====================
function focusUpgradePicker() {
  if (upgradeInProgress) return;

  const picker = $('upgradePicker');
  if (!picker) return;

  const target = picker.querySelector('[data-source-id]:not([disabled])')
    || picker.querySelector('[data-open-cases]');
  if (!target) return;

  picker.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'nearest' });
  window.requestAnimationFrame(() => target.focus({ preventScroll: true }));
}

function renderUpgradePicker() {
  const grid = $('upgradePickerGrid');
  const empty = $('upgradePickerEmpty');
  const count = $('upgradePickerCount');
  if (!grid || !empty || !count) return;

  if (!upgradeInProgress && selectedUpgrade
    && !appState.inventory.some((item) => item.id === selectedUpgrade.sourceId)) {
    resetUpgradeUI('Предмет больше недоступен. Выберите другой скин.');
  }

  count.textContent = `${appState.inventory.length} ${pluralizeItems(appState.inventory.length)}`;

  if (!appState.inventory.length) {
    grid.innerHTML = '';
    grid.hidden = true;
    empty.hidden = false;
    return;
  }

  empty.hidden = true;
  grid.hidden = false;
  grid.innerHTML = appState.inventory.map((item) => {
    const targetCount = getUpgradeTargets(item, upgradeChancePct).length;
    const selected = Boolean(selectedUpgrade && selectedUpgrade.sourceId === item.id);

    return `
      <button class="upgrade-pick${selected ? ' is-selected' : ''}"
        type="button"
        data-source-id="${escapeHtml(item.id)}"
        aria-pressed="${selected}"
        style="--rarity:${getRarityColor(item.rarity)}">
        <span class="upgrade-pick-img"><img src="${escapeHtml(item.img)}" alt="" loading="lazy"></span>
        <span class="upgrade-pick-name">${escapeHtml(item.name)}</span>
        <span class="upgrade-pick-meta">
          <span class="upgrade-pick-price">${formatMoney(item.price)} ₽</span>
          <span class="upgrade-pick-chance">${targetCount ? `${targetCount} целей` : 'нет целей'}</span>
        </span>
      </button>
    `;
  }).join('');

  markUpgradePickerSelection();
}

function markUpgradePickerSelection() {
  const grid = $('upgradePickerGrid');
  if (!grid) return;

  grid.querySelectorAll('[data-source-id]').forEach((button) => {
    const selected = Boolean(selectedUpgrade && selectedUpgrade.sourceId === button.dataset.sourceId);
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

function pluralizeTargets(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return 'цель';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'цели';
  return 'целей';
}

function renderUpgradeChanceChips() {
  document.querySelectorAll('[data-upgrade-chance]').forEach((button) => {
    const isActive = Number(button.dataset.upgradeChance) === upgradeChancePct;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function renderUpgradeTargets() {
  const grid = $('upgradeTargetGrid');
  const empty = $('upgradeTargetEmpty');
  const count = $('upgradeTargetCount');
  if (!grid || !empty || !count) return;

  if (!selectedUpgrade) {
    upgradeTargets = [];
    grid.innerHTML = '';
    grid.hidden = true;
    empty.hidden = false;
    empty.innerHTML = `
      <div>
        <strong>Сначала выбери свой скин</strong>
        <span>Потом здесь появятся цели под выбранный шанс.</span>
      </div>
    `;
    count.textContent = '0 целей';
    return;
  }

  const source = selectedUpgrade.source;
  upgradeTargets = getUpgradeTargets(source, upgradeChancePct);
  count.textContent = `${upgradeTargets.length} ${pluralizeTargets(upgradeTargets.length)}`;

  if (!upgradeTargets.length) {
    grid.innerHTML = '';
    grid.hidden = true;
    empty.hidden = false;
    empty.innerHTML = `
      <div>
        <strong>Нет целей для ${upgradeChancePct}%</strong>
        <span>Уменьши шанс или выбери другой скин.</span>
      </div>
    `;
    return;
  }

  empty.hidden = true;
  grid.hidden = false;
  grid.innerHTML = upgradeTargets.map((item) => {
    const selected = Boolean(selectedUpgrade.target && selectedUpgrade.target.id === item.id);
    const multiplier = (item.price / source.price).toFixed(1);

    return `
      <button class="upgrade-pick${selected ? ' is-selected' : ''}"
        type="button"
        data-target-id="${escapeHtml(item.id)}"
        aria-pressed="${selected}"
        style="--rarity:${getRarityColor(item.rarity)}">
        <span class="upgrade-pick-img"><img src="${escapeHtml(item.img)}" alt="" loading="lazy"></span>
        <span class="upgrade-pick-name">${escapeHtml(item.name)}</span>
        <span class="upgrade-pick-meta">
          <span class="upgrade-pick-price">${formatMoney(item.price)} ₽</span>
          <span class="upgrade-pick-chance">×${multiplier}</span>
        </span>
      </button>
    `;
  }).join('');
}

function selectUpgradeSource(itemId) {
  if (upgradeInProgress) return;
  const source = appState.inventory.find((item) => item.id === itemId);
  if (!source) return;

  const targets = getUpgradeTargets(source, upgradeChancePct);
  selectedUpgrade = {
    sourceId: source.id,
    source: { ...source },
    target: targets.length ? { ...targets[0] } : null,
    chance: upgradeChancePct,
  };

  renderUpgradeSelection();
  markUpgradePickerSelection();

  if (!targets.length) {
    showNotification(`Для шанса ${upgradeChancePct}% нет целей. Выбери другой шанс.`, 'error');
  }
}

function selectUpgradeTarget(itemId) {
  if (!selectedUpgrade || upgradeInProgress) return;

  const target = upgradeTargets.find((item) => item.id === itemId)
    || getCatalogSkin(itemId);
  if (!target) return;

  const eligible = getUpgradeTargets(selectedUpgrade.source, upgradeChancePct);
  if (!eligible.some((item) => item.id === itemId)) {
    showNotification('Эта цель недоступна для выбранного шанса.', 'error');
    return;
  }

  selectedUpgrade.target = { ...target };
  selectedUpgrade.chance = upgradeChancePct;
  renderUpgradeSelection();
}

function setUpgradeChance(chance) {
  const allowed = [5, 10, 25, 50, 75, 90];
  if (!allowed.includes(chance)) return;

  upgradeChancePct = chance;
  renderUpgradeChanceChips();

  if (!selectedUpgrade) {
    renderUpgradePicker();
    renderUpgradeTargets();
    return;
  }

  const targets = getUpgradeTargets(selectedUpgrade.source, chance);
  const currentTargetId = selectedUpgrade.target ? selectedUpgrade.target.id : null;
  const keepCurrent = currentTargetId && targets.some((item) => item.id === currentTargetId);
  selectedUpgrade = {
    ...selectedUpgrade,
    chance,
    target: keepCurrent
      ? selectedUpgrade.target
      : (targets.length ? { ...targets[0] } : null),
  };

  renderUpgradeSelection();
  renderUpgradePicker();
}

function setUpgradeWheelChance(chance) {
  const wheel = $('upgradeWheel');
  if (!wheel) return;

  const angle = Math.max(2, Math.min(360, chance * 3.6));
  const winOrbit = $('wheelWinLabel');
  const missOrbit = $('wheelMissLabel');

  wheel.style.setProperty('--chance-angle', `${angle}deg`);
  if (winOrbit) {
    winOrbit.style.setProperty('--label-angle', `${(2 + angle) / 2}deg`);
    winOrbit.classList.toggle('is-hidden', angle - 2 < 24);
  }
  if (missOrbit) {
    missOrbit.style.setProperty('--label-angle', `${angle + (360 - angle) / 2}deg`);
    missOrbit.classList.toggle('is-hidden', 360 - angle < 24);
  }
}

function setUpgradeButtonLabel(text) {
  const button = $('upgradeBtn');
  if (!button) return;
  const label = button.querySelector('.spin-btn-text');
  if (label) label.textContent = text;
  else button.textContent = text;
}

function resetWheelArrow() {
  const arrow = $('upgradeArrow');
  if (!arrow) return;

  arrow.style.transition = 'none';
  arrow.style.transform = 'rotate(0deg)';
  upgradeArrowRotation = 0;
  window.requestAnimationFrame(() => {
    arrow.style.transition = '';
  });
}

function hideUpgradeResult() {
  const result = $('upgradeResult');
  if (!result) return;
  result.hidden = true;
  result.classList.remove('is-success', 'is-fail');
}

function closeUpgradeResult() {
  hideUpgradeResult();
  const sourceSlot = $('upgradeFrom');
  if (sourceSlot) sourceSlot.focus({ preventScroll: true });
}

function cancelUpgradeSpin() {
  if (upgradeSpinTimer) {
    window.clearTimeout(upgradeSpinTimer);
    upgradeSpinTimer = null;
  }
  upgradeSpinGeneration += 1;
  upgradeInProgress = false;

  const wrap = $('wheelWrap');
  if (wrap) wrap.classList.remove('is-spinning', 'is-success', 'is-fail');
  const button = $('upgradeBtn');
  if (button) button.classList.remove('is-spinning');
  resetWheelArrow();
}

function renderUpgradeSelection() {
  if (!selectedUpgrade) return;
  const { source, target, chance } = selectedUpgrade;

  $('upgradeFrom').classList.add('filled');
  $('upgradeFrom').innerHTML = `
    <div class="upgrade-slot-label">Твой скин</div>
    <img src="${escapeHtml(source.img)}" alt="">
    <div class="upgrade-slot-name">${escapeHtml(source.name)}</div>
    <div class="upgrade-slot-price">${formatMoney(source.price)} ₽</div>
    <div class="upgrade-slot-change">Нажмите, чтобы сменить</div>
  `;

  if (target) {
    $('upgradeTo').classList.add('filled');
    $('upgradeTo').innerHTML = `
      <div class="upgrade-slot-label">Желаемый скин</div>
      <img src="${escapeHtml(target.img)}" alt="">
      <div class="upgrade-slot-name">${escapeHtml(target.name)}</div>
      <div class="upgrade-slot-price">${formatMoney(target.price)} ₽</div>
    `;
    $('upgradeChanceLabel').textContent = 'Цель и шанс выбраны. Крути колесо: при неудаче предмет сгорает.';
  } else {
    $('upgradeTo').classList.remove('filled');
    $('upgradeTo').innerHTML = `
      <div class="upgrade-slot-label">Желаемый скин</div>
      <div class="upgrade-slot-placeholder" aria-hidden="true">—</div>
      <div class="upgrade-slot-hint">Для этого шанса целей нет. Выбери шанс ниже.</div>
    `;
    $('upgradeChanceLabel').textContent = `Для шанса ${chance}% нет целей. Уменьши шанс.`;
  }

  $('upgradeChance').classList.remove('is-empty');
  $('upgradeChance').textContent = `${chance}%`;
  setUpgradeWheelChance(chance);
  hideUpgradeResult();
  resetWheelArrow();

  const wrap = $('wheelWrap');
  if (wrap) wrap.classList.remove('is-spinning', 'is-success', 'is-fail');
  const button = $('upgradeBtn');
  button.classList.remove('is-spinning');
  button.disabled = !target;
  setUpgradeButtonLabel(target ? 'Крутить колесо' : 'Нет цели');
  renderUpgradeChanceChips();
  renderUpgradeTargets();
  markUpgradePickerSelection();
}

function resetUpgradeUI(message = 'Выберите предмет из инвентаря') {
  selectedUpgrade = null;
  cancelUpgradeSpin();
  hideUpgradeResult();

  $('upgradeFrom').classList.remove('filled');
  $('upgradeFrom').innerHTML = `
    <div class="upgrade-slot-label">Твой скин</div>
    <div class="upgrade-slot-placeholder" aria-hidden="true">+</div>
    <div class="upgrade-slot-hint">Нажми, чтобы выбрать предмет</div>
  `;

  $('upgradeTo').classList.remove('filled');
  $('upgradeTo').innerHTML = `
    <div class="upgrade-slot-label">Желаемый скин</div>
    <div class="upgrade-slot-placeholder" aria-hidden="true">?</div>
    <div class="upgrade-slot-hint">Выбери цель в списке ниже</div>
  `;

  $('upgradeChance').textContent = '—';
  $('upgradeChance').classList.add('is-empty');
  $('upgradeChanceLabel').textContent = message;
  setUpgradeWheelChance(0);
  const button = $('upgradeBtn');
  button.disabled = true;
  button.classList.remove('is-spinning');
  setUpgradeButtonLabel('Крутить колесо');
  renderUpgradeChanceChips();
  renderUpgradeTargets();
  markUpgradePickerSelection();
}

function renderUpgradeResult(success, source, target) {
  const result = $('upgradeResult');
  if (!result) return;

  result.hidden = false;
  result.classList.toggle('is-success', success);
  result.classList.toggle('is-fail', !success);

  $('upgradeResultEyebrow').textContent = success ? 'UPGRADE WON' : 'UPGRADE';
  $('upgradeResultTitle').textContent = success ? 'ВОТ ЭТО ДРОП' : 'МИМО';
  $('upgradeResultImg').src = success ? target.img : source.img;
  $('upgradeResultImg').alt = success ? target.name : source.name;
  $('upgradeResultItem').textContent = success ? target.name : source.name;
  $('upgradeResultPrice').textContent = success
    ? `${formatMoney(target.price)} ₽`
    : 'предмет сгорел';
  $('upgradeResultNote').textContent = success
    ? 'Уже в инвентаре'
    : 'Крути ещё · собери новый дроп';
}

function doUpgrade() {
  if (!selectedUpgrade || !selectedUpgrade.target || upgradeInProgress) return;

  const { source, target, chance } = selectedUpgrade;
  const index = appState.inventory.findIndex((item) => item.id === selectedUpgrade.sourceId);
  if (index < 0) {
    resetUpgradeUI('Предмет не найден. Выберите другой.');
    showNotification('Предмет не найден в инвентаре.', 'error');
    return;
  }

  upgradeInProgress = true;
  hideUpgradeResult();
  const button = $('upgradeBtn');
  const wrap = $('wheelWrap');
  button.disabled = true;
  button.classList.add('is-spinning');
  setUpgradeButtonLabel('Колесо крутится…');
  $('upgradeChanceLabel').textContent = 'Колесо решает. Шанс уже зафиксирован.';

  if (wrap) {
    wrap.classList.remove('is-success', 'is-fail');
    wrap.classList.add('is-spinning');
  }

  const success = Math.random() * 100 < chance;
  const chanceAngle = Math.max(2, Math.min(360, chance * 3.6));
  const successStart = 2;
  const successSpan = Math.max(chanceAngle - successStart, 0.2);
  const failSpan = Math.max(360 - chanceAngle, 0.2);
  let landingAngle;

  if (success) {
    const margin = Math.min(5, successSpan * 0.3);
    landingAngle = successStart + margin + Math.random() * Math.max(successSpan - margin * 2, 0.2);
  } else {
    const margin = Math.min(5, failSpan * 0.3);
    landingAngle = chanceAngle + margin + Math.random() * Math.max(failSpan - margin * 2, 0.2);
  }

  const extraTurns = 6 + Math.floor(Math.random() * 3);
  const currentMod = ((upgradeArrowRotation % 360) + 360) % 360;
  const delta = (landingAngle - currentMod + 360) % 360;
  const nextRotation = upgradeArrowRotation + extraTurns * 360 + delta;
  upgradeArrowRotation = nextRotation;
  setUpgradeWheelChance(chance);

  const arrow = $('upgradeArrow');
  if (arrow) {
    arrow.style.transition = '';
    void arrow.offsetWidth;
    window.requestAnimationFrame(() => {
      arrow.style.transform = `rotate(${nextRotation}deg)`;
    });
  }

  appState.inventory.splice(index, 1);
  persistState();
  renderInventory();

  const generation = stateGeneration;
  const spinId = ++upgradeSpinGeneration;
  const duration = prefersReducedMotion() ? 140 : 4700;

  upgradeSpinTimer = window.setTimeout(() => {
    if (spinId !== upgradeSpinGeneration || generation !== stateGeneration) return;
    upgradeSpinTimer = null;
    finishUpgrade({ success, source, target, chance });
  }, duration);
}

function finishUpgrade({ success, source, target }) {
  upgradeInProgress = false;
  selectedUpgrade = null;

  if (success) {
    const wonItem = makeOwnedItem(target);
    if (wonItem) appState.inventory.push(wonItem);
    persistState();
    renderInventory();
  }

  markUpgradePickerSelection();
  const button = $('upgradeBtn');
  const wrap = $('wheelWrap');
  button.classList.remove('is-spinning');
  button.disabled = true;
  setUpgradeButtonLabel('Выбери новый скин');
  if (wrap) {
    wrap.classList.remove('is-spinning');
    wrap.classList.add(success ? 'is-success' : 'is-fail');
  }

  $('upgradeFrom').classList.remove('filled');
  $('upgradeFrom').innerHTML = `
    <div class="upgrade-slot-label">Твой скин</div>
    <div class="upgrade-slot-placeholder" aria-hidden="true">+</div>
    <div class="upgrade-slot-hint">Нажми, чтобы выбрать предмет</div>
  `;

  $('upgradeTo').classList.remove('filled');
  $('upgradeTo').innerHTML = `
    <div class="upgrade-slot-label">Желаемый скин</div>
    <div class="upgrade-slot-placeholder" aria-hidden="true">?</div>
    <div class="upgrade-slot-hint">Выбери цель в списке ниже</div>
  `;

  $('upgradeChanceLabel').textContent = success
    ? `Успех: ${target.name} добавлен в инвентарь.`
    : `Неудача: ${source.name} потерян.`;
  $('upgradeChance').textContent = '—';
  $('upgradeChance').classList.add('is-empty');
  setUpgradeWheelChance(0);
  renderUpgradeChanceChips();
  renderUpgradeTargets();
  renderUpgradeResult(success, source, target);

  if (success) {
    showNotification(`Апгрейд успешен: ${target.name} за ${formatMoney(target.price)} ₽.`, 'success');
    createConfetti();
    createFireworks();
  } else {
    showNotification(`Апгрейд не удался: ${source.name} потерян.`, 'error');
  }

  window.requestAnimationFrame(() => {
    const again = $('upgradeResultAgain');
    if (again) again.focus({ preventScroll: true });
    else $('upgradeFrom').focus({ preventScroll: true });
  });
}

// ==================== DEPOSIT ====================
function openDeposit(trigger) {
  depositAmount = 0;
  $('depositCustom').value = '';
  initializeDepositButtons();
  openModal($('depositOverlay'), document.querySelector('[data-deposit]'), trigger);
}

function closeDeposit() {
  closeModal($('depositOverlay'));
}

function initializeDepositButtons() {
  document.querySelectorAll('[data-deposit]').forEach((button) => {
    button.classList.remove('selected');
    button.setAttribute('aria-pressed', 'false');
  });
}

function selectDeposit(amount, element) {
  if (!Number.isFinite(amount) || amount <= 0) return;
  depositAmount = amount;
  $('depositCustom').value = '';
  document.querySelectorAll('[data-deposit]').forEach((button) => {
    const isSelected = button === element;
    button.classList.toggle('selected', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });
}

function doDeposit() {
  const customValue = Number($('depositCustom').value);
  const amount = Number.isFinite(customValue) && customValue > 0 ? customValue : depositAmount;
  const wholeAmount = Math.floor(amount);

  if (!Number.isFinite(amount) || wholeAmount < 1) {
    showNotification('Введите сумму пополнения от 1 ₽.', 'error');
    return;
  }

  if (wholeAmount > MAX_DEPOSIT) {
    showNotification(`Максимум за одну операцию — ${formatInt(MAX_DEPOSIT)} ₽.`, 'error');
    return;
  }

  appState.balance = Math.min(appState.balance + wholeAmount, MAX_BALANCE);
  persistState();
  updateBalanceUI();
  closeDeposit();
  showNotification(`Баланс пополнен на ${formatInt(wholeAmount)} ₽.`, 'success');
}

// ==================== BATTLES ====================
function renderBattles() {
  const grid = $('battleGrid');
  grid.innerHTML = BATTLES.map((battle) => {
    const isPending = pendingBattles.has(battle.id);
    return `
      <article class="battle-card">
        <div class="battle-header">
          <span class="battle-status">Ожидание</span>
          <span class="battle-players">${battle.players}</span>
        </div>
        <div class="battle-title">${escapeHtml(battle.title)}</div>
        <div class="battle-cases">
          ${battle.cases.map((caseData) => `
            <div class="battle-case">
              <img src="${escapeHtml(caseData.img)}" alt="" loading="lazy">
              <span>${escapeHtml(caseData.name)}</span>
            </div>
          `).join('')}
        </div>
        <div class="battle-total">Вход: <strong>${formatMoney(battle.price)} ₽</strong></div>
        <div class="battle-host">Хост: ${escapeHtml(battle.host)}</div>
        <button class="battle-join-btn" type="button" data-battle-id="${battle.id}" ${isPending ? 'disabled' : ''}>
          ${isPending ? 'Батл идёт…' : `Участвовать — ${formatMoney(battle.price)} ₽`}
        </button>
      </article>
    `;
  }).join('');
}

function joinBattle(battleId) {
  const battle = BATTLES.find((item) => item.id === battleId);
  if (!battle || pendingBattles.has(battleId)) return;

  if (appState.balance < battle.price) {
    showNotification('Недостаточно средств для входа в батл.', 'error');
    return;
  }

  pendingBattles.add(battleId);
  const generation = stateGeneration;
  appState.balance -= battle.price;
  persistState();
  updateBalanceUI();

  const button = document.querySelector(`[data-battle-id="${battleId}"]`);
  if (button) {
    button.disabled = true;
    button.textContent = 'Батл идёт…';
  }

  showNotification('Батл начат.', 'success');

  window.setTimeout(() => {
    if (generation !== stateGeneration) {
      pendingBattles.delete(battleId);
      return;
    }

    const items = battle.cases.flatMap((caseData) => caseData.items);
    const wonItem = makeOwnedItem(items[Math.floor(Math.random() * items.length)]);

    pendingBattles.delete(battleId);
    if (wonItem) {
      appState.inventory.push(wonItem);
      persistState();
      renderInventory();
      showNotification(`Батл завершён: ${wonItem.name} добавлен в инвентарь.`, 'success');
      if (!prefersReducedMotion() && (wonItem.rarity === 'legendary' || wonItem.rarity === 'contraband')) {
        createConfetti();
      }
    }

    renderBattles();
    const refreshedButton = document.querySelector(`[data-battle-id="${battleId}"]`);
    if (refreshedButton) refreshedButton.focus({ preventScroll: true });
  }, 3000);
}

// ==================== LIVE FEED ====================
function getFeedPool() {
  const items = [];
  CASES.forEach((caseData) => {
    caseData.items.forEach((item) => items.push({ ...item, caseName: caseData.name }));
  });
  return items;
}

function generateFeedItems() {
  const feed = $('liveFeed');
  if (!feed) return;
  const pool = getFeedPool();
  for (let index = 0; index < 10; index += 1) {
    addFeedItem(pool[Math.floor(Math.random() * pool.length)]);
  }
}

function addFeedItem(item) {
  const feed = $('liveFeed');
  if (!feed || !item) return;

  const names = ['PlayerOne', 'NightHawk', 'DragonSlayer', 'CyberPunk', 'StarDust', 'IceKing', 'FireStorm', 'ShadowX', 'NeonBlade', 'Phantom7'];
  const name = names[Math.floor(Math.random() * names.length)];
  const element = document.createElement('div');
  element.className = 'feed-item';
  element.innerHTML = `
    <img class="feed-item-img" src="${escapeHtml(item.img)}" alt="" loading="lazy">
    <div class="feed-item-name">${escapeHtml(item.name)}</div>
    <div class="feed-item-price">${formatMoney(item.price)} ₽</div>
    <div class="feed-item-user">${escapeHtml(name)}</div>
  `;
  feed.insertBefore(element, feed.firstChild);

  while (feed.children.length > 12) {
    feed.removeChild(feed.lastChild);
  }
}

function startLiveFeed() {
  const pool = getFeedPool();
  window.setInterval(() => {
    addFeedItem(pool[Math.floor(Math.random() * pool.length)]);
  }, 4200);
}

// ==================== RESET ====================
function openResetDialog(trigger) {
  openModal($('resetModal'), $('resetCancel'), trigger);
}

function resetProgress() {
  if (spinTimer) {
    window.clearTimeout(spinTimer);
    spinTimer = null;
  }
  isSpinning = false;
  currentWins = [];
  currentCase = null;
  caseOpenQuantity = 1;
  lastCaseQuantity = 1;
  selectedUpgrade = null;
  stateGeneration += 1;
  pendingBattles.clear();
  clearCelebrations();

  appState = defaultState();
  persistState();
  updateBalanceUI();
  renderCases(activeFilter);
  renderBattles();
  renderInventory();
  resetUpgradeUI();
  closeModal($('resetModal'));
  showSection('cases');
  showNotification('Прогресс сброшен: 1 250 ₽ и пустой инвентарь.', 'success');
}

// ==================== UI UTILS ====================
function updateBalanceUI() {
  const formatted = formatMoney(appState.balance);
  $('balanceDisplay').textContent = formatted;
  $('balanceBox').setAttribute(
    'aria-label',
    `Баланс: ${formatted} ₽. Открыть пополнение`
  );
}

function showNotification(text, type = 'success') {
  const notification = $('notification');
  const icon = $('notifIcon');
  const textElement = $('notifText');

  if (notificationTimer) window.clearTimeout(notificationTimer);

  notification.className = `notification ${type} show`;
  icon.textContent = type === 'success' ? '✅' : '❌';
  textElement.textContent = text;

  notificationTimer = window.setTimeout(() => {
    notification.classList.remove('show');
  }, 4200);
}

function createConfetti() {
  if (prefersReducedMotion()) return;

  const container = $('confettiContainer');
  if (!container) return;
  if (confettiTimer) window.clearTimeout(confettiTimer);
  container.innerHTML = '';
  const colors = ['#c8f94f', '#e2ff83', '#ff8a4c', '#f7f8f2', '#8dff6a'];

  for (let index = 0; index < 64; index += 1) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.animationDuration = `${2 + Math.random() * 1.8}s`;
    piece.style.width = `${5 + Math.random() * 7}px`;
    piece.style.height = `${5 + Math.random() * 7}px`;
    container.appendChild(piece);
  }

  confettiTimer = window.setTimeout(() => {
    container.innerHTML = '';
    confettiTimer = null;
  }, 4800);
}

function createFireworks() {
  if (prefersReducedMotion()) return;

  const container = $('fireworks');
  if (!container) return;
  if (fireworksTimer) window.clearTimeout(fireworksTimer);
  container.innerHTML = '';

  const colors = ['#c8f94f', '#e2ff83', '#ff8a4c', '#f7f8f2', '#8dff6a'];
  const burstCount = 7;

  for (let burstIndex = 0; burstIndex < burstCount; burstIndex += 1) {
    const burst = document.createElement('div');
    burst.className = 'firework-burst';
    burst.style.left = `${12 + Math.random() * 76}%`;
    burst.style.top = `${14 + Math.random() * 46}%`;

    const particleCount = 20 + Math.floor(Math.random() * 10);
    const distance = 66 + Math.random() * 86;

    for (let particleIndex = 0; particleIndex < particleCount; particleIndex += 1) {
      const particle = document.createElement('span');
      particle.className = 'firework-particle';
      const angle = (Math.PI * 2 * particleIndex) / particleCount + Math.random() * 0.16;
      const radius = distance * (0.55 + Math.random() * 0.55);
      particle.style.setProperty('--dx', `${Math.cos(angle) * radius}px`);
      particle.style.setProperty('--dy', `${Math.sin(angle) * radius}px`);
      particle.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
      particle.style.setProperty('--delay', `${burstIndex * 0.1 + Math.random() * 0.22}s`);
      particle.style.setProperty('--size', `${4 + Math.random() * 4}px`);
      burst.appendChild(particle);
    }

    container.appendChild(burst);
  }

  fireworksTimer = window.setTimeout(() => {
    container.innerHTML = '';
    fireworksTimer = null;
  }, 3400);
}

function clearCelebrations() {
  if (confettiTimer) {
    window.clearTimeout(confettiTimer);
    confettiTimer = null;
  }
  if (fireworksTimer) {
    window.clearTimeout(fireworksTimer);
    fireworksTimer = null;
  }

  const confetti = $('confettiContainer');
  const fireworks = $('fireworks');
  if (confetti) confetti.innerHTML = '';
  if (fireworks) fireworks.innerHTML = '';
}
