// ==================== DATA ====================
const CASES = [
  // === БЮДЖЕТНЫЕ КЕЙСЫ (до 100₽) ===
  {
    id: 1, name: 'Стартовый кейс', desc: 'Базовые скины для новичков', price: 25,
    img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19cca2676-cef2-4912-9b77-bbc95b1d78ad.png',
    badge: 'hot', category: ['popular', 'cheap', 'budget'],
    items: [
      { name: 'P350 | Песчаный', price: 8, rarity: 'common', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png', weight: 40 },
      { name: 'G22 | Лес', price: 12, rarity: 'common', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png', weight: 30 },
      { name: 'UMP | Буря', price: 25, rarity: 'uncommon', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png', weight: 20 },
      { name: 'AKR | Пламя', price: 65, rarity: 'rare', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 8 },
      { name: 'M4 | Дракон', price: 120, rarity: 'epic', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/15f812e50-d116-421e-bf3c-2fb4b64f6c49.png', weight: 2 },
    ]
  },
  {
    id: 2, name: 'Ледяной кейс', desc: 'Морозные текстуры', price: 50,
    img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png',
    badge: null, category: ['cheap', 'budget'],
    items: [
      { name: 'P350 | Мороз', price: 15, rarity: 'common', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png', weight: 35 },
      { name: 'UMP | Айс', price: 35, rarity: 'uncommon', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png', weight: 28 },
      { name: 'AKR | Лавина', price: 85, rarity: 'rare', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png', weight: 18 },
      { name: 'M4 | Blizzard', price: 200, rarity: 'epic', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png', weight: 10 },
      { name: 'AWM | Фрост', price: 650, rarity: 'legendary', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png', weight: 4 },
    ]
  },
  {
    id: 3, name: 'Военный кейс', desc: 'Оружие со службы', price: 75,
    img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png',
    badge: 'new', category: ['cheap', 'budget', 'rifle'],
    items: [
      { name: 'M4A1 | Камуфляж', price: 25, rarity: 'common', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 35 },
      { name: 'AKR | Тактика', price: 55, rarity: 'uncommon', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 28 },
      { name: 'FAMAS | Шторм', price: 95, rarity: 'rare', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 18 },
      { name: 'SCAR | Пустыня', price: 180, rarity: 'epic', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 10 },
      { name: 'AWM | Спецназ', price: 550, rarity: 'legendary', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 4 },
    ]
  },
  
  // === СРЕДНИЕ КЕЙСЫ (100-300₽) ===
  {
    id: 4, name: 'Стандартный кейс', desc: 'Баланс цены и качества', price: 100,
    img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19cca2676-cef2-4912-9b77-bbc95b1d78ad.png',
    badge: 'hot', category: ['popular', 'rifle'],
    items: [
      { name: 'P350 | Неоновый', price: 35, rarity: 'common', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png', weight: 30 },
      { name: 'UMP | Кибер', price: 70, rarity: 'uncommon', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png', weight: 25 },
      { name: 'AKR | Феникс', price: 150, rarity: 'rare', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 20 },
      { name: 'M4A1 | Дракон', price: 320, rarity: 'epic', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/15f812e50-d116-421e-bf3c-2fb4b64f6c49.png', weight: 12 },
      { name: 'AWM | Лёд', price: 850, rarity: 'legendary', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png', weight: 5 },
      { name: 'Керамбит | Огонь', price: 2200, rarity: 'contraband', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 1 },
    ]
  },
  {
    id: 5, name: 'Кибер кейс', desc: 'Футуристические скины', price: 150,
    img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png',
    badge: 'new', category: ['popular', 'cheap'],
    items: [
      { name: 'P350 | Хром', price: 45, rarity: 'common', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png', weight: 30 },
      { name: 'G22 | Киберпанк', price: 90, rarity: 'uncommon', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png', weight: 25 },
      { name: 'AKR | Кибер', price: 180, rarity: 'rare', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png', weight: 18 },
      { name: 'M4 | Матрица', price: 380, rarity: 'epic', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png', weight: 12 },
      { name: 'AWM | Хакер', price: 1200, rarity: 'legendary', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png', weight: 6 },
      { name: 'Бабочка | Неоновая', price: 3500, rarity: 'contraband', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 2 },
    ]
  },
  {
    id: 6, name: 'Кейс винтовок', desc: 'AKR, M4 и другие', price: 180,
    img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png',
    badge: 'hot', category: ['rifle', 'popular'],
    items: [
      { name: 'AKR | Стандарт', price: 55, rarity: 'common', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 30 },
      { name: 'M4 | Шторм', price: 95, rarity: 'uncommon', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png', weight: 25 },
      { name: 'AKR | Феникс', price: 220, rarity: 'rare', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 18 },
      { name: 'M4A1 | Золото', price: 480, rarity: 'epic', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/15f812e50-d116-421e-bf3c-2fb4b64f6c49.png', weight: 10 },
      { name: 'AWM | Легенда', price: 1400, rarity: 'legendary', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png', weight: 5 },
      { name: 'AKR | Император', price: 4200, rarity: 'contraband', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 2 },
    ]
  },
  {
    id: 7, name: 'Элитный кейс', desc: 'Для опытных игроков', price: 250,
    img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/132c18a59-ccca-4163-a30e-2fc66a7de282.png',
    badge: 'premium', category: ['premium'],
    items: [
      { name: 'USP | Титан', price: 85, rarity: 'uncommon', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png', weight: 28 },
      { name: 'M4A1 | Самурай', price: 180, rarity: 'rare', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/15f812e50-d116-421e-bf3c-2fb4b64f6c49.png', weight: 22 },
      { name: 'AKR | Дракон', price: 420, rarity: 'epic', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 15 },
      { name: 'AWM | Феникс', price: 950, rarity: 'legendary', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png', weight: 8 },
      { name: 'Керамбит | Божество', price: 5500, rarity: 'contraband', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 3 },
    ]
  },
  
  // === ПРЕМИУМ КЕЙСЫ (300-1000₽) ===
  {
    id: 8, name: 'Премиум кейс', desc: 'Редкие и дорогие скины', price: 350,
    img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/132c18a59-ccca-4163-a30e-2fc66a7de282.png',
    badge: 'premium', category: ['premium'],
    items: [
      { name: 'G22 | Алмаз', price: 120, rarity: 'uncommon', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png', weight: 25 },
      { name: 'AKR | Феникс', price: 280, rarity: 'rare', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 22 },
      { name: 'M4A1 | Империал', price: 580, rarity: 'epic', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/15f812e50-d116-421e-bf3c-2fb4b64f6c49.png', weight: 15 },
      { name: 'AWM | Бессмертие', price: 1650, rarity: 'legendary', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png', weight: 10 },
      { name: 'М9 Байонет | Радуга', price: 6800, rarity: 'contraband', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 4 },
    ]
  },
  {
    id: 9, name: 'Кейс ножей', desc: 'Только холодное оружие!', price: 500,
    img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png',
    badge: 'new', category: ['knife', 'premium'],
    items: [
      { name: 'Штык-нож | Сталь', price: 350, rarity: 'rare', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 30 },
      { name: 'Керамбит | Пламя', price: 950, rarity: 'epic', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 25 },
      { name: 'М9 Байонет | Зуб', price: 2200, rarity: 'legendary', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 15 },
      { name: 'Бабочка | Галактика', price: 7500, rarity: 'contraband', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 8 },
      { name: 'Керамбит | Бог', price: 15000, rarity: 'ancient', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 2 },
    ]
  },
  {
    id: 10, name: 'Золотой кейс', desc: 'Эксклюзивные предметы', price: 750,
    img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/15f812e50-d116-421e-bf3c-2fb4b64f6c49.png',
    badge: 'premium', category: ['premium', 'knife'],
    items: [
      { name: 'Desert Eagle | Золото', price: 280, rarity: 'rare', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png', weight: 28 },
      { name: 'AKR | Королевский', price: 680, rarity: 'epic', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 22 },
      { name: 'AWM | Мидас', price: 2400, rarity: 'legendary', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png', weight: 12 },
      { name: 'Бабочка | Золотая', price: 12000, rarity: 'contraband', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 6 },
      { name: 'Керамбит | Феникс', price: 25000, rarity: 'ancient', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 2 },
    ]
  },
  
  // === ЭКСКЛЮЗИВНЫЕ КЕЙСЫ (1000₽+) ===
  {
    id: 11, name: 'Кейс дракона', desc: 'Легендарная мощь', price: 1200,
    img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/15f812e50-d116-421e-bf3c-2fb4b64f6c49.png',
    badge: 'premium', category: ['premium'],
    items: [
      { name: 'M4A1 | Дракон', price: 580, rarity: 'epic', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/15f812e50-d116-421e-bf3c-2fb4b64f6c49.png', weight: 30 },
      { name: 'AKR | Древний', price: 1450, rarity: 'legendary', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 20 },
      { name: 'AWM | Драконий глаз', price: 4800, rarity: 'contraband', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1ee5faa33-a301-4c2a-af91-769ae95424c1.png', weight: 12 },
      { name: 'Керамбит | Дракон', price: 18000, rarity: 'ancient', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 5 },
      { name: 'Перчатки | Дракон', price: 45000, rarity: 'divine', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 1 },
    ]
  },
  {
    id: 12, name: 'Божественный кейс', desc: 'Предметы богов', price: 2500,
    img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png',
    badge: 'premium', category: ['premium'],
    items: [
      { name: 'USP | Олимп', price: 950, rarity: 'legendary', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/192900a58-8a75-4cd6-be22-4dd09e4f0898.png', weight: 25 },
      { name: 'AKR | Зевс', price: 3200, rarity: 'contraband', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/1da6fbb40-6545-489a-b756-bf0919936c34.png', weight: 18 },
      { name: 'М9 | Посейдон', price: 12500, rarity: 'ancient', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 10 },
      { name: 'Бабочка | Аид', price: 35000, rarity: 'divine', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 4 },
      { name: 'Перчатки | Титан', price: 85000, rarity: 'divine', img: 'https://image.qwenlm.ai/public_source/5eafffbd-60f4-4b43-8024-416d7b670e24/19e46f2f9-0dfd-44cd-8f86-c5772171eb7f.png', weight: 2 },
    ]
  },
];

const BATTLES = [
  { id: 1, title: 'Батл 2x', status: 'waiting', players: '1/2', price: 100, cases: [CASES[0], CASES[1]], host: 'PlayerOne' },
  { id: 2, title: 'Батл 3x', status: 'waiting', players: '2/3', price: 225, cases: [CASES[2], CASES[3], CASES[4]], host: 'SkyWalker' },
  { id: 3, title: 'Премиум батл', status: 'waiting', players: '1/2', price: 600, cases: [CASES[7], CASES[8]], host: 'NightOwl' },
  { id: 4, title: 'Быстрый батл', status: 'waiting', players: '1/2', price: 75, cases: [CASES[0], CASES[2]], host: 'FastGamer' },
  { id: 5, title: 'Ножевой батл', status: 'waiting', players: '1/2', price: 1000, cases: [CASES[8], CASES[9]], host: 'KnifeMaster' },
  { id: 6, title: 'Элитный батл', status: 'waiting', players: '1/2', price: 2500, cases: [CASES[10], CASES[11]], host: 'DragonSlayer' },
];

// ==================== CONSTANTS ====================
const STORAGE_KEY = 'so2cases.demo.v1';
const STATE_VERSION = 1;
const DEFAULT_BALANCE = 1250;
const MAX_DEPOSIT = 100000;
const MAX_BALANCE = 10000000;

const RARITY_LABELS = {
  common: 'обычный',
  uncommon: 'необычный',
  rare: 'редкий',
  epic: 'эпический',
  legendary: 'легендарный',
  contraband: 'запрещённый',
  ancient: 'древний',
  divine: 'божественный',
};

const RARITY_COLORS = {
  common: '#b0c3d9',
  uncommon: '#5e98d9',
  rare: '#4b69ff',
  epic: '#8847ff',
  legendary: '#d32ce6',
  contraband: '#eb4b4b',
  ancient: '#ff6b35',
  divine: '#ffd700',
};

const SECTION_IDS = {
  cases: 'casesSection',
  battle: 'battleSection',
  upgrade: 'upgradeSection',
  inventory: 'inventorySection',
};

// ==================== STATE ====================
let appState = loadState();
let currentCase = null;
let currentWin = null;
let lastCaseId = null;
let depositAmount = 0;
let isSpinning = false;
let spinTimer = null;
let activeFilter = 'all';
let selectedUpgrade = null;
let upgradeInProgress = false;
let pendingBattles = new Set();
let demoGeneration = 0;
let activeModal = null;
let modalReturnFocus = null;
let notificationTimer = null;

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
    name,
    price: Math.round(price * 100) / 100,
    rarity: RARITY_LABELS[raw.rarity] ? raw.rarity : 'common',
    img: isSafeImageUrl(raw.img) ? raw.img : 'assets/placeholder.svg',
  };
}

function normalizeSavedItem(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const name = typeof raw.name === 'string' ? raw.name.trim().slice(0, 120) : '';
  const price = Number(raw.price);
  if (!name || !Number.isFinite(price) || price < 0) return null;

  return {
    id: typeof raw.id === 'string' && raw.id ? raw.id.slice(0, 120) : createItemId(),
    name,
    price: Math.round(price * 100) / 100,
    rarity: RARITY_LABELS[raw.rarity] ? raw.rarity : 'common',
    img: isSafeImageUrl(raw.img) ? raw.img : 'assets/placeholder.svg',
  };
}

function defaultState() {
  return { version: STATE_VERSION, balance: DEFAULT_BALANCE, inventory: [] };
}

function loadState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
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
    // В приватном режиме или при переполнении хранилища демо продолжает работать в памяти.
  }
}

function formatMoney(value) {
  return Number(value).toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
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

function getRarityColor(rarity) {
  return RARITY_COLORS[rarity] || RARITY_COLORS.common;
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

function getUpgradeTarget(source) {
  const candidates = getActiveItems()
    .filter((item) => item.price > source.price * 1.15)
    .sort((a, b) => a.price - b.price);

  if (!candidates.length) return null;

  const desiredPrice = source.price * 1.8;
  return candidates.reduce((best, item) => (
    Math.abs(item.price - desiredPrice) < Math.abs(best.price - desiredPrice) ? item : best
  ), candidates[0]);
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  persistState();
  bindEvents();
  renderCases('all');
  renderBattles();
  renderInventory();
  updateBalanceUI();
  generateFeedItems();
  startLiveFeed();
  initializeDepositButtons();
  showSection('cases', { scroll: false });
});

function bindEvents() {
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keydown', handleGlobalKeydown);
  document.addEventListener('error', handleImageError, true);

  $('rouletteClose').addEventListener('click', requestCloseRoulette);
  $('spinBtn').addEventListener('click', spinRoulette);
  $('winClose').addEventListener('click', keepWin);
  $('winSell').addEventListener('click', () => resolveWin('sell'));
  $('winKeep').addEventListener('click', () => resolveWin('keep'));
  $('winAgain').addEventListener('click', () => resolveWin('again'));

  $('depositClose').addEventListener('click', closeDeposit);
  $('depositSubmit').addEventListener('click', doDeposit);
  $('depositCustom').addEventListener('input', () => {
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

  $('sourcePickerClose').addEventListener('click', () => closeModal($('sourcePickerModal')));
  $('previewClose').addEventListener('click', () => closeModal($('previewModal')));
  $('upgradeFrom').addEventListener('click', openUpgradeSourcePicker);
  $('upgradeFrom').addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openUpgradeSourcePicker();
    }
  });
  $('upgradeBtn').addEventListener('click', doUpgrade);
  $('sellAllBtn').addEventListener('click', sellAll);

  $('resetCancel').addEventListener('click', () => closeModal($('resetModal')));
  $('resetClose').addEventListener('click', () => closeModal($('resetModal')));
  $('resetConfirm').addEventListener('click', resetDemo);

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

  document.querySelectorAll('[data-reset-demo]').forEach((button) => {
    button.addEventListener('click', (event) => openResetDialog(event.currentTarget));
  });
}

function handleDocumentClick(event) {
  const sectionTrigger = event.target.closest('[data-section]');
  if (sectionTrigger) {
    event.preventDefault();
    showSection(sectionTrigger.dataset.section);
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

  const caseCard = event.target.closest('[data-case-id]');
  if (caseCard) {
    openCase(Number(caseCard.dataset.caseId), caseCard);
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
    closeModal($('sourcePickerModal'));
    showSection('cases');
  }
}

function handleGlobalKeydown(event) {
  if (!activeModal) return;

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
  sourcePickerModal: () => closeModal($('sourcePickerModal')),
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
      window.requestAnimationFrame(() => focusTarget.focus({ preventScroll: true }));
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

  if (section === 'inventory') renderInventory();
  if (scroll) {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }
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
    const badge = caseData.badge === 'hot'
      ? '<span class="case-card-badge badge-hot">🔥 Хит</span>'
      : caseData.badge === 'new'
        ? '<span class="case-card-badge badge-new">✨ Новинка</span>'
        : caseData.badge === 'premium'
          ? '<span class="case-card-badge badge-premium">💎 Премиум</span>'
          : '';

    return `
      <button class="case-card" type="button" data-case-id="${caseData.id}">
        ${badge}
        <img class="case-card-img" src="${escapeHtml(caseData.img)}" alt="" loading="lazy">
        <span class="case-card-name">${escapeHtml(caseData.name)}</span>
        <span class="case-card-desc">${escapeHtml(caseData.desc)}</span>
        <span class="case-card-footer">
          <span class="case-price"><span class="coin" aria-hidden="true">₽</span>${caseData.price}</span>
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
  currentWin = null;

  $('rouletteTitle').textContent = `Открытие: ${caseData.name}`;
  $('rouletteCaseName').textContent = caseData.name;
  $('rouletteCasePrice').textContent = caseData.price;
  renderRouletteTrack(caseData);

  const track = $('rouletteTrack');
  track.style.transition = 'none';
  track.style.transform = 'translateX(0px)';

  openModal($('rouletteModal'), $('spinBtn'), trigger);
  updateSpinButton();
}

function rouletteItemTemplate(item) {
  return `
    <div class="roulette-item">
      <img class="roulette-item-img" src="${escapeHtml(item.img)}" alt="" loading="lazy">
      <div class="roulette-item-name">${escapeHtml(item.name)}</div>
      <div class="roulette-item-price">${item.price} ₽</div>
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
  const canAfford = appState.balance >= currentCase.price;
  button.disabled = !canAfford || isSpinning;
  button.textContent = canAfford ? '🎰 Открыть кейс' : 'Недостаточно демо-средств';
}

function spinRoulette() {
  if (!currentCase || isSpinning) return;

  if (appState.balance < currentCase.price) {
    showNotification('Недостаточно демо-средств. Откройте демо-пополнение.', 'error');
    return;
  }

  const caseData = currentCase;
  const winItem = weightedPick(caseData.items);
  const ownedItem = makeOwnedItem(winItem);
  if (!ownedItem) return;

  appState.balance -= caseData.price;
  appState.inventory.push(ownedItem);
  currentWin = ownedItem;
  persistState();
  updateBalanceUI();
  renderInventory();

  isSpinning = true;
  $('spinBtn').disabled = true;
  $('spinBtn').textContent = 'Прокрутка…';
  $('rouletteClose').setAttribute('aria-disabled', 'true');

  const winIndex = 45;
  renderRouletteTrack(caseData, winIndex, winItem);

  const track = $('rouletteTrack');
  const container = $('rouletteContainer');
  const targetItem = track.children[winIndex];
  track.style.transition = 'none';
  track.style.transform = 'translateX(0px)';

  if (!targetItem) {
    isSpinning = false;
    $('rouletteClose').removeAttribute('aria-disabled');
    closeModal($('rouletteModal'), { restoreFocus: false });
    showWinModal(ownedItem);
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
    showWinModal(ownedItem);
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
function showWinModal(item) {
  $('winItemImg').src = item.img;
  $('winItemImg').alt = item.name;
  $('winItemName').textContent = item.name;
  $('winItemPrice').textContent = `${item.price} ₽`;
  openModal($('winOverlay'), $('winKeep'));
  if (!prefersReducedMotion()) createConfetti();
}

function resolveWin(action) {
  if (!currentWin) {
    closeModal($('winOverlay'));
    return;
  }

  const wonItem = currentWin;
  const index = appState.inventory.findIndex((item) => item.id === wonItem.id);

  if (action === 'sell') {
    if (index >= 0) {
      appState.inventory.splice(index, 1);
      appState.balance = Math.min(appState.balance + wonItem.price, MAX_BALANCE);
      persistState();
      updateBalanceUI();
      renderInventory();
      showNotification(`Продано за ${formatMoney(wonItem.price)} ₽.`, 'success');
    } else {
      showNotification('Предмет уже отсутствует в инвентаре.', 'error');
    }
  } else if (action === 'again') {
    showNotification(`${wonItem.name} оставлен в инвентаре.`, 'success');
  } else {
    showNotification(`${wonItem.name} оставлен в инвентаре.`, 'success');
  }

  currentWin = null;
  const shouldOpenAgain = action === 'again';
  closeModal($('winOverlay'));

  if (shouldOpenAgain && lastCaseId) {
    window.setTimeout(() => {
      const trigger = document.querySelector(`[data-case-id="${lastCaseId}"]`)
        || document.querySelector('.nav-link[data-section="cases"]');
      openCase(lastCaseId, trigger);
    }, 250);
  }
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
        <p>Откройте кейс, чтобы получить первый демо-скин.</p>
        <button class="primary-btn" type="button" data-open-cases>Перейти к кейсам</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = appState.inventory.map((item) => `
    <article class="inv-card">
      <div class="inv-card-rarity" style="background:${getRarityColor(item.rarity)}"></div>
      <img class="inv-card-img" src="${escapeHtml(item.img)}" alt="${escapeHtml(item.name)}" loading="lazy">
      <div class="inv-card-name">${escapeHtml(item.name)}</div>
      <div class="inv-card-rarity-label" style="color:${getRarityColor(item.rarity)}">${escapeHtml(RARITY_LABELS[item.rarity] || 'обычный')}</div>
      <div class="inv-card-price">${formatMoney(item.price)} ₽</div>
      <div class="inv-card-actions">
        <button class="inv-btn inv-btn-preview" type="button" data-preview-item="${escapeHtml(item.id)}">Просмотр</button>
        <button class="inv-btn inv-btn-sell" type="button" data-sell-item="${escapeHtml(item.id)}" aria-label="Продать ${escapeHtml(item.name)} за ${formatMoney(item.price)} рублей">Продать</button>
      </div>
    </article>
  `).join('');
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
  persistState();
  updateBalanceUI();
  renderInventory();
  focusInventoryAfterChange(0);
  showNotification(`Всё продано за ${formatMoney(total)} ₽.`, 'success');
}

function previewItem(itemId, trigger) {
  const item = appState.inventory.find((entry) => entry.id === itemId);
  if (!item) return;

  $('previewImg').src = item.img;
  $('previewImg').alt = item.name;
  $('previewName').textContent = item.name;
  $('previewPrice').textContent = `${formatMoney(item.price)} ₽`;
  $('previewRarity').textContent = RARITY_LABELS[item.rarity] || 'обычный';
  $('previewRarity').style.color = getRarityColor(item.rarity);
  openModal($('previewModal'), $('previewClose'), trigger);
}

// ==================== UPGRADE ====================
function openUpgradeSourcePicker() {
  if (upgradeInProgress) return;
  renderSourcePicker();
  const firstSource = document.querySelector('[data-source-id]');
  openModal($('sourcePickerModal'), firstSource || $('sourcePickerClose'), $('upgradeFrom'));
}

function renderSourcePicker() {
  const grid = $('sourcePickerGrid');
  if (!appState.inventory.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon" aria-hidden="true">🎒</div>
        <h3>В инвентаре нет предметов</h3>
        <p>Для апгрейда сначала откройте кейс.</p>
        <button class="primary-btn" type="button" data-open-cases>Перейти к кейсам</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = appState.inventory.map((item) => `
    <button class="source-option" type="button" data-source-id="${escapeHtml(item.id)}">
      <img class="source-option-img" src="${escapeHtml(item.img)}" alt="">
      <span class="source-option-info">
        <span class="source-option-name">${escapeHtml(item.name)}</span>
        <span class="source-option-rarity" style="color:${getRarityColor(item.rarity)}">${escapeHtml(RARITY_LABELS[item.rarity] || 'обычный')}</span>
      </span>
      <span class="source-option-price">${formatMoney(item.price)} ₽</span>
    </button>
  `).join('');
}

function selectUpgradeSource(itemId) {
  if (upgradeInProgress) return;
  const source = appState.inventory.find((item) => item.id === itemId);
  if (!source) return;

  const target = getUpgradeTarget(source);
  if (!target) {
    showNotification('Для этого предмета нет более дорогой цели в демо.', 'error');
    return;
  }

  const chance = Math.max(1, Math.min(85, Math.round((source.price / target.price) * 100)));
  selectedUpgrade = {
    sourceId: source.id,
    source: { ...source },
    target: { ...target },
    chance,
  };

  renderUpgradeSelection();
  closeModal($('sourcePickerModal'));
}

function renderUpgradeSelection() {
  if (!selectedUpgrade) return;
  const { source, target, chance } = selectedUpgrade;

  $('upgradeFrom').classList.add('filled');
  $('upgradeFrom').setAttribute('aria-label', `Выбран ${source.name}. Нажмите, чтобы сменить предмет`);
  $('upgradeFrom').innerHTML = `
    <div class="upgrade-slot-label">Ваш скин</div>
    <img src="${escapeHtml(source.img)}" alt="">
    <div class="upgrade-slot-name">${escapeHtml(source.name)}</div>
    <div class="upgrade-slot-price">${formatMoney(source.price)} ₽</div>
    <div class="upgrade-slot-change">Нажмите, чтобы сменить</div>
  `;

  $('upgradeTo').classList.add('filled');
  $('upgradeTo').innerHTML = `
    <div class="upgrade-slot-label">Желаемый скин</div>
    <img src="${escapeHtml(target.img)}" alt="">
    <div class="upgrade-slot-name">${escapeHtml(target.name)}</div>
    <div class="upgrade-slot-price">${formatMoney(target.price)} ₽</div>
  `;

  $('upgradeChance').classList.remove('is-empty');
  $('upgradeChance').textContent = `${chance}%`;
  $('upgradeChanceLabel').textContent = 'Шанс успеха зафиксирован. При неудаче предмет теряется.';
  const button = $('upgradeBtn');
  button.disabled = false;
  button.textContent = 'Попробовать апгрейд';
}

function resetUpgradeUI(message = 'Выберите предмет из инвентаря') {
  selectedUpgrade = null;

  $('upgradeFrom').classList.remove('filled');
  $('upgradeFrom').setAttribute('aria-label', 'Выбрать предмет для апгрейда');
  $('upgradeFrom').innerHTML = `
    <div class="upgrade-slot-label">Ваш скин</div>
    <div class="upgrade-slot-placeholder" aria-hidden="true">+</div>
    <div class="upgrade-slot-hint">Нажмите, чтобы выбрать предмет</div>
  `;

  $('upgradeTo').classList.remove('filled');
  $('upgradeTo').innerHTML = `
    <div class="upgrade-slot-label">Желаемый скин</div>
    <div class="upgrade-slot-placeholder" aria-hidden="true">?</div>
    <div class="upgrade-slot-hint">Цель появится после выбора</div>
  `;

  $('upgradeChance').textContent = '—';
  $('upgradeChance').classList.add('is-empty');
  $('upgradeChanceLabel').textContent = message;
  const button = $('upgradeBtn');
  button.disabled = true;
  button.textContent = 'Попробовать апгрейд';
}

function doUpgrade() {
  if (!selectedUpgrade || upgradeInProgress) return;

  const { source, target, chance } = selectedUpgrade;
  const index = appState.inventory.findIndex((item) => item.id === selectedUpgrade.sourceId);
  if (index < 0) {
    resetUpgradeUI('Предмет не найден. Выберите другой.');
    showNotification('Предмет не найден в инвентаре.', 'error');
    return;
  }

  upgradeInProgress = true;
  const button = $('upgradeBtn');
  button.disabled = true;
  button.textContent = 'Проверяем…';

  const success = Math.random() * 100 < chance;
  appState.inventory.splice(index, 1);

  if (success) {
    const wonItem = makeOwnedItem(target);
    if (wonItem) appState.inventory.push(wonItem);
  }

  persistState();
  updateBalanceUI();
  renderInventory();
  upgradeInProgress = false;

  selectedUpgrade = null;
  $('upgradeFrom').classList.remove('filled');
  $('upgradeFrom').setAttribute('aria-label', 'Выбрать предмет для апгрейда');
  $('upgradeFrom').innerHTML = `
    <div class="upgrade-slot-label">Ваш скин</div>
    <div class="upgrade-slot-placeholder" aria-hidden="true">+</div>
    <div class="upgrade-slot-hint">Нажмите, чтобы выбрать предмет</div>
  `;
  $('upgradeChance').textContent = '—';
  $('upgradeChance').classList.add('is-empty');
  $('upgradeChanceLabel').textContent = success
    ? `Успех: ${target.name} добавлен в инвентарь.`
    : `Неудача: ${source.name} потерян.`;
  button.disabled = true;
  button.textContent = 'Попробовать апгрейд';

  if (success) {
    showNotification(`Апгрейд успешен: ${target.name} за ${formatMoney(target.price)} ₽.`, 'success');
    createConfetti();
  } else {
    showNotification(`Апгрейд не удался: ${source.name} потерян.`, 'error');
  }

  window.requestAnimationFrame(() => $('upgradeFrom').focus({ preventScroll: true }));
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

  if (!Number.isFinite(amount) || amount <= 0) {
    showNotification('Введите сумму демо-пополнения.', 'error');
    return;
  }

  if (amount > MAX_DEPOSIT) {
    showNotification(`Максимум за одну операцию — ${formatMoney(MAX_DEPOSIT)} ₽.`, 'error');
    return;
  }

  appState.balance = Math.min(appState.balance + Math.floor(amount), MAX_BALANCE);
  persistState();
  updateBalanceUI();
  closeDeposit();
  showNotification(`Демо-баланс пополнен на ${formatMoney(Math.floor(amount))} ₽.`, 'success');
}

// ==================== BATTLES ====================
function renderBattles() {
  const grid = $('battleGrid');
  grid.innerHTML = BATTLES.map((battle) => {
    const isPending = pendingBattles.has(battle.id);
    return `
      <article class="battle-card">
        <div class="battle-header">
          <span class="battle-status">Демо · ожидание</span>
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
        <div class="battle-host">Хост: ${escapeHtml(battle.host)} · синтетический</div>
        <button class="battle-join-btn" type="button" data-battle-id="${battle.id}" ${isPending ? 'disabled' : ''}>
          ${isPending ? 'Демо-батл идёт…' : `Участвовать в демо — ${formatMoney(battle.price)} ₽`}
        </button>
      </article>
    `;
  }).join('');
}

function joinBattle(battleId) {
  const battle = BATTLES.find((item) => item.id === battleId);
  if (!battle || pendingBattles.has(battleId)) return;

  if (appState.balance < battle.price) {
    showNotification('Недостаточно демо-средств для входа в батл.', 'error');
    return;
  }

  pendingBattles.add(battleId);
  const generation = demoGeneration;
  appState.balance -= battle.price;
  persistState();
  updateBalanceUI();

  const button = document.querySelector(`[data-battle-id="${battleId}"]`);
  if (button) {
    button.disabled = true;
    button.textContent = 'Демо-батл идёт…';
  }

  showNotification('Демо-батл начат: соперники и результат синтетические.', 'success');

  window.setTimeout(() => {
    if (generation !== demoGeneration) {
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
      showNotification(`Демо-батл завершён: ${wonItem.name} добавлен в инвентарь.`, 'success');
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
    <div class="feed-item-price">${item.price} ₽</div>
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

function resetDemo() {
  if (spinTimer) {
    window.clearTimeout(spinTimer);
    spinTimer = null;
  }
  isSpinning = false;
  currentWin = null;
  currentCase = null;
  selectedUpgrade = null;
  demoGeneration += 1;
  pendingBattles.clear();

  appState = defaultState();
  persistState();
  updateBalanceUI();
  renderCases(activeFilter);
  renderBattles();
  renderInventory();
  resetUpgradeUI();
  closeModal($('resetModal'));
  showSection('cases');
  showNotification('Демо сброшено: 1 250 ₽ и пустой инвентарь.', 'success');
}

// ==================== UI UTILS ====================
function updateBalanceUI() {
  const formatted = formatMoney(appState.balance);
  $('balanceDisplay').textContent = formatted;
  $('balanceBox').setAttribute(
    'aria-label',
    `Демо-баланс: ${formatted} ₽, демо. Открыть демо-пополнение`
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
  const colors = ['#34d399', '#10b981', '#f3f5f7', '#b3bcc9', '#fbbf24'];

  for (let index = 0; index < 48; index += 1) {
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

  window.setTimeout(() => {
    container.innerHTML = '';
  }, 4800);
}
