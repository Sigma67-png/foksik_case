import type { DesignCategory } from './types';

export const categories: readonly DesignCategory[] = [
  { slug: 'foundations', title: 'Основы', description: 'Типографика, цвет и базовые правила выбранного направления.' },
  { slug: 'navigation', title: 'Навигация', description: 'Переходы между разделами и ориентация в продукте.' },
  { slug: 'input', title: 'Ввод данных', description: 'Формы, действия и обратная связь при вводе.' },
  { slug: 'content', title: 'Контент и данные', description: 'Представление информации и результатов работы.' },
  { slug: 'feedback', title: 'Состояния', description: 'Загрузка, ошибки, пустые результаты и восстановление.' },
  { slug: 'flows', title: 'Сценарии', description: 'Связанные экраны пользовательского пути.' },
];
