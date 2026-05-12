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

// ==================== STATE ====================
let balance = 1250;
let inventory = [];
let currentCase = null;
let currentWin = null;
let depositAmount = 0;
let isSpinning = false;
let lastCaseId = null;

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  renderCases('all');
  renderBattles();
  startLiveFeed();
  generateFeedItems();
});

// ==================== RENDER ====================
function renderCases(filter) {
  const grid = document.getElementById('casesGrid');
  let filtered = CASES;
  if (filter !== 'all') {
    filtered = CASES.filter(c => c.category.includes(filter));
  }
  grid.innerHTML = filtered.map(c => `
    <div class="case-card" onclick="openCase(${c.id})">
      ${c.badge ? `<div class="case-card-badge badge-${c.badge}">${c.badge === 'hot' ? '🔥 Хит' : c.badge === 'new' ? '✨ Новинка' : '💎 Премиум'}</div>` : ''}
      <img class="case-card-img" src="${c.img}" alt="${c.name}">
      <div class="case-card-name">${c.name}</div>
      <div class="case-card-desc">${c.desc}</div>
      <div class="case-card-footer">
        <div class="case-price">
          <span class="coin">₽</span>
          ${c.price}
        </div>
        <button class="case-open-btn">Открыть</button>
      </div>
    </div>
  `).join('');
}

function renderBattles() {
  const grid = document.getElementById('battleGrid');
  grid.innerHTML = BATTLES.map(b => `
    <div class="battle-card">
      <div class="battle-header">
        <div class="battle-status status-waiting">Ожидание</div>
        <div class="battle-players"><span>${b.players}</span> игроков</div>
      </div>
      <div class="battle-content">
        <div style="font-size: 16px; font-weight: 700; margin-bottom: 12px;">${b.title}</div>
        <div class="battle-cases">
          ${b.cases.map(c => `
            <div class="battle-case">
              <img class="battle-case-img" src="${c.img}" alt="${c.name}">
              <div class="battle-case-name">${c.name}</div>
            </div>
          `).join('')}
        </div>
        <div class="battle-total">Стоимость: <strong>${b.price} ₽</strong></div>
        <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">Хост: ${b.host}</div>
        <button class="battle-join-btn" onclick="joinBattle(${b.id})">Присоединиться — ${b.price} ₽</button>
      </div>
    </div>
  `).join('');
}

// ==================== LIVE FEED ====================
function generateFeedItems() {
  const feed = document.getElementById('liveFeed');
  const names = ['Alex_Pro', 'NightHawk', 'DragonSlayer', 'CyberPunk', 'StarDust', 'IceKing', 'FireStorm', 'ShadowX', 'NeonBlade', 'Phantom7'];
  const items = [];
  CASES.forEach(c => {
    c.items.forEach(item => {
      items.push({ ...item, caseName: c.name });
    });
  });

  for (let i = 0; i < 10; i++) {
    const item = items[Math.floor(Math.random() * items.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    addFeedItem(item, name);
  }
}

function addFeedItem(item, name) {
  const feed = document.getElementById('liveFeed');
  const el = document.createElement('div');
  el.className = 'feed-item';
  el.innerHTML = `
    <img class="feed-item-img" src="${item.img}" alt="${item.name}">
    <div class="feed-item-name">${item.name}</div>
    <div class="feed-item-price">${item.price} ₽</div>
    <div class="feed-item-user">${name}</div>
  `;
  feed.insertBefore(el, feed.firstChild);
  if (feed.children.length > 12) {
    feed.removeChild(feed.lastChild);
  }
}

function startLiveFeed() {
  const names = ['Alex_Pro', 'NightHawk', 'DragonSlayer', 'CyberPunk', 'StarDust', 'IceKing', 'FireStorm', 'ShadowX', 'NeonBlade', 'Phantom7'];
  const items = [];
  CASES.forEach(c => {
    c.items.forEach(item => {
      items.push({ ...item, caseName: c.name });
    });
  });

  setInterval(() => {
    const item = items[Math.floor(Math.random() * items.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    addFeedItem(item, name);
  }, 3000);
}

// ==================== CASE OPENING ====================
function openCase(caseId) {
  const caseData = CASES.find(c => c.id === caseId);
  if (!caseData) return;

  currentCase = caseData;
  lastCaseId = caseId;

  document.getElementById('rouletteTitle').textContent = `Открытие: ${caseData.name}`;
  document.getElementById('rouletteCaseName').textContent = caseData.name;
  document.getElementById('rouletteCasePrice').textContent = caseData.price;

  // Build roulette items
  const track = document.getElementById('rouletteTrack');
  const rouletteItems = [];
  const totalWeight = caseData.items.reduce((s, i) => s + i.weight, 0);

  // Generate 60 items for the roulette
  for (let i = 0; i < 60; i++) {
    const rand = Math.random() * totalWeight;
    let cumulative = 0;
    let selectedItem = caseData.items[0];
    for (const item of caseData.items) {
      cumulative += item.weight;
      if (rand <= cumulative) {
        selectedItem = item;
        break;
      }
    }
    rouletteItems.push(selectedItem);
  }

  track.innerHTML = rouletteItems.map(item => {
    const rarityColor = getRarityColor(item.rarity);
    return `
      <div class="roulette-item">
        <img class="roulette-item-img" src="${item.img}" alt="${item.name}">
        <div class="roulette-item-name">${item.name}</div>
        <div class="roulette-item-price">${item.price} ₽</div>
        <div class="roulette-item-rarity" style="background: ${rarityColor};"></div>
      </div>
    `;
  }).join('');

  document.getElementById('rouletteModal').classList.add('active');
  document.getElementById('spinBtn').disabled = false;
  track.style.transform = 'translateX(0px)';
}

function spinRoulette() {
  if (isSpinning) return;
  if (balance < currentCase.price) {
    showNotification('Недостаточно средств!', 'error');
    return;
  }

  isSpinning = true;
  balance -= currentCase.price;
  updateBalance();
  document.getElementById('spinBtn').disabled = true;

  // Determine winning item
  const totalWeight = currentCase.items.reduce((s, i) => s + i.weight, 0);
  const rand = Math.random() * totalWeight;
  let cumulative = 0;
  let winItem = currentCase.items[0];
  for (const item of currentCase.items) {
    cumulative += item.weight;
    if (rand <= cumulative) {
      winItem = item;
      break;
    }
  }

  // Place winning item at position 45
  const track = document.getElementById('rouletteTrack');
  const itemWidth = 150;
  const winIndex = 45;

  // Rebuild roulette with winning item at winIndex
  const rouletteItems = [];
  for (let i = 0; i < 60; i++) {
    if (i === winIndex) {
      rouletteItems.push(winItem);
    } else {
      const r = Math.random() * totalWeight;
      let cum = 0;
      let sel = currentCase.items[0];
      for (const item of currentCase.items) {
        cum += item.weight;
        if (r <= cum) { sel = item; break; }
      }
      rouletteItems.push(sel);
    }
  }

  track.innerHTML = rouletteItems.map(item => {
    const rarityColor = getRarityColor(item.rarity);
    return `
      <div class="roulette-item">
        <img class="roulette-item-img" src="${item.img}" alt="${item.name}">
        <div class="roulette-item-name">${item.name}</div>
        <div class="roulette-item-price">${item.price} ₽</div>
        <div class="roulette-item-rarity" style="background: ${rarityColor};"></div>
      </div>
    `;
  }).join('');

  // Calculate offset
  const containerWidth = document.getElementById('rouletteContainer').offsetWidth;
  const offset = (winIndex * itemWidth) - (containerWidth / 2) + (itemWidth / 2);
  const randomOffset = (Math.random() - 0.5) * (itemWidth * 0.6);

  // Animate
  track.style.transition = 'none';
  track.style.transform = 'translateX(0px)';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      track.style.transition = 'transform 5s cubic-bezier(0.15, 0.85, 0.25, 1)';
      track.style.transform = `translateX(-${offset + randomOffset}px)`;
    });
  });

  // Show result after animation
  setTimeout(() => {
    isSpinning = false;
    currentWin = winItem;
    showWinModal(winItem);
  }, 5500);
}

function closeRoulette() {
  if (isSpinning) return;
  document.getElementById('rouletteModal').classList.remove('active');
}

// ==================== WIN MODAL ====================
function showWinModal(item) {
  document.getElementById('winItemImg').src = item.img;
  document.getElementById('winItemName').textContent = item.name;
  document.getElementById('winItemPrice').textContent = `${item.price} ₽`;
  document.getElementById('winOverlay').classList.add('active');

  if (item.rarity === 'legendary' || item.rarity === 'contraband') {
    createConfetti();
  }
}

function sellWin() {
  if (!currentWin) return;
  balance += currentWin.price;
  updateBalance();
  showNotification(`Продано за ${currentWin.price} ₽`, 'success');
  closeWinModal();
}

function keepWin() {
  if (!currentWin) return;
  inventory.push({ ...currentWin, id: Date.now() });
  updateInventory();
  showNotification('Добавлено в инвентарь', 'success');
  closeWinModal();
}

function tryAgain() {
  closeWinModal();
  if (lastCaseId) {
    setTimeout(() => openCase(lastCaseId), 300);
  }
}

function closeWinModal() {
  document.getElementById('winOverlay').classList.remove('active');
  currentWin = null;
}

// ==================== INVENTORY ====================
function updateInventory() {
  const grid = document.getElementById('inventoryGrid');
  const count = document.getElementById('invCount');
  count.textContent = `(${inventory.length} предметов)`;

  if (inventory.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <div style="font-size: 64px; margin-bottom: 16px;">🎒</div>
        <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">Инвентарь пуст</div>
        <div style="font-size: 14px;">Откройте кейсы чтобы получить скины!</div>
      </div>
    `;
    return;
  }

  grid.innerHTML = inventory.map((item, idx) => {
    const rarityColor = getRarityColor(item.rarity);
    return `
      <div class="inv-card">
        <div class="inv-card-rarity" style="background: ${rarityColor};"></div>
        <img class="inv-card-img" src="${item.img}" alt="${item.name}">
        <div class="inv-card-name">${item.name}</div>
        <div class="inv-card-price">${item.price} ₽</div>
        <div class="inv-card-actions">
          <button class="inv-btn inv-btn-sell" onclick="sellItem(${idx})">Продать</button>
          <button class="inv-btn inv-btn-preview" onclick="previewItem(${idx})">👁</button>
        </div>
      </div>
    `;
  }).join('');
}

function sellItem(idx) {
  const item = inventory[idx];
  if (!item) return;
  balance += item.price;
  inventory.splice(idx, 1);
  updateBalance();
  updateInventory();
  showNotification(`Продано за ${item.price} ₽`, 'success');
}

function sellAll() {
  if (inventory.length === 0) return;
  const total = inventory.reduce((s, i) => s + i.price, 0);
  balance += total;
  inventory = [];
  updateBalance();
  updateInventory();
  showNotification(`Всё продано за ${total} ₽`, 'success');
}

function previewItem(idx) {
  const item = inventory[idx];
  if (!item) return;
  currentWin = item;
  document.getElementById('winItemImg').src = item.img;
  document.getElementById('winItemName').textContent = item.name;
  document.getElementById('winItemPrice').textContent = `${item.price} ₽`;
  document.getElementById('winOverlay').classList.add('active');
}

// ==================== DEPOSIT ====================
function openDeposit() {
  document.getElementById('depositOverlay').classList.add('active');
  depositAmount = 0;
  document.getElementById('depositCustom').value = '';
  document.querySelectorAll('.deposit-amount').forEach(b => b.classList.remove('selected'));
}

function closeDeposit() {
  document.getElementById('depositOverlay').classList.remove('active');
}

function selectDeposit(amount, el) {
  depositAmount = amount;
  document.querySelectorAll('.deposit-amount').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('depositCustom').value = '';
}

function customDeposit() {
  depositAmount = parseInt(document.getElementById('depositCustom').value) || 0;
  document.querySelectorAll('.deposit-amount').forEach(b => b.classList.remove('selected'));
}

function doDeposit() {
  if (depositAmount <= 0) {
    showNotification('Введите сумму!', 'error');
    return;
  }
  balance += depositAmount;
  updateBalance();
  closeDeposit();
  showNotification(`Баланс пополнен на ${depositAmount} ₽`, 'success');
}

// ==================== BATTLE ====================
function joinBattle(battleId) {
  const battle = BATTLES.find(b => b.id === battleId);
  if (!battle) return;

  if (balance < battle.price) {
    showNotification('Недостаточно средств!', 'error');
    return;
  }

  balance -= battle.price;
  updateBalance();
  showNotification(`Вы присоединились к батлу "${battle.title}"!`, 'success');

  // Simulate battle
  setTimeout(() => {
    const allItems = [];
    battle.cases.forEach(c => {
      c.items.forEach(item => allItems.push(item));
    });
    const winItem = allItems[Math.floor(Math.random() * allItems.length)];
    balance += winItem.price;
    updateBalance();
    showNotification(`Батл завершён! Вы выиграли ${winItem.name} (${winItem.price} ₽)`, 'success');
    if (winItem.rarity === 'legendary' || winItem.rarity === 'contraband') {
      createConfetti();
    }
  }, 3000);
}

// ==================== UPGRADE ====================
function selectUpgradeItem() {
  if (inventory.length === 0) {
    showNotification('Инвентарь пуст! Откройте кейсы.', 'error');
    return;
  }
  // Auto select first item for demo
  const item = inventory[0];
  const slot = document.getElementById('upgradeFrom');
  slot.classList.add('filled');
  slot.innerHTML = `
    <div class="upgrade-slot-label">Ваш скин</div>
    <img style="width: 120px; height: 80px; object-fit: contain;" src="${item.img}" alt="${item.name}">
    <div style="font-size: 14px; font-weight: 700; margin-top: 8px;">${item.name}</div>
    <div style="font-size: 16px; font-weight: 800; color: var(--accent);">${item.price} ₽</div>
  `;

  // Set target (next rarity)
  const rarities = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'contraband'];
  const currentIdx = rarities.indexOf(item.rarity);
  const targetIdx = Math.min(currentIdx + 1, rarities.length - 1);
  const targetRarity = rarities[targetIdx];

  // Find items of target rarity
  let targetItems = [];
  CASES.forEach(c => {
    c.items.forEach(it => {
      if (it.rarity === targetRarity) targetItems.push(it);
    });
  });

  const targetItem = targetItems[Math.floor(Math.random() * targetItems.length)] || targetItems[0];
  if (targetItem) {
    const targetSlot = document.getElementById('upgradeTo');
    targetSlot.classList.add('filled');
    targetSlot.innerHTML = `
      <div class="upgrade-slot-label">Желаемый скин</div>
      <img style="width: 120px; height: 80px; object-fit: contain;" src="${targetItem.img}" alt="${targetItem.name}">
      <div style="font-size: 14px; font-weight: 700; margin-top: 8px;">${targetItem.name}</div>
      <div style="font-size: 16px; font-weight: 800; color: var(--accent);">${targetItem.price} ₽</div>
    `;

    const chance = Math.min(Math.round((item.price / targetItem.price) * 100), 85);
    document.getElementById('upgradeChance').textContent = `${chance}%`;
  }
}

function doUpgrade() {
  const chance = parseInt(document.getElementById('upgradeChance').textContent);
  if (isNaN(chance)) {
    showNotification('Сначала выберите скины!', 'error');
    return;
  }

  if (inventory.length === 0) {
    showNotification('Инвентарь пуст!', 'error');
    return;
  }

  const item = inventory[0];
  inventory.splice(0, 1);
  updateInventory();

  if (Math.random() * 100 < chance) {
    // Success
    const rarities = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'contraband'];
    const currentIdx = rarities.indexOf(item.rarity);
    const targetIdx = Math.min(currentIdx + 1, rarities.length - 1);
    const targetRarity = rarities[targetIdx];
    let targetItems = [];
    CASES.forEach(c => {
      c.items.forEach(it => { if (it.rarity === targetRarity) targetItems.push(it); });
    });
    const winItem = targetItems[Math.floor(Math.random() * targetItems.length)];
    if (winItem) {
      inventory.push({ ...winItem, id: Date.now() });
      updateInventory();
      showNotification(`Апгрейд успешен! ${winItem.name}`, 'success');
      createConfetti();
    }
  } else {
    showNotification('Апгрейд не удался. Скин потерян.', 'error');
  }
}

// ==================== SECTIONS ====================
function showSection(section) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  event.target.classList.add('active');

  document.getElementById('casesSection').style.display = section === 'cases' ? 'block' : 'none';
  document.getElementById('battleSection').className = section === 'battle' ? 'section battle-section active' : 'section battle-section';
  document.getElementById('upgradeSection').className = section === 'upgrade' ? 'section upgrade-section active' : 'section upgrade-section';
  document.getElementById('inventorySection').className = section === 'inventory' ? 'section inventory-section active' : 'section inventory-section';

  if (section === 'inventory') updateInventory();
}

function filterCases(filter, btn) {
  document.querySelectorAll('.case-cat').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCases(filter);
}

// ==================== UTILS ====================
function updateBalance() {
  document.getElementById('balanceDisplay').textContent = balance.toLocaleString('ru-RU', { minimumFractionDigits: 2 });
}

function getRarityColor(rarity) {
  const colors = {
    common: '#b0c3d9',
    uncommon: '#5e98d9',
    rare: '#4b69ff',
    epic: '#8847ff',
    legendary: '#d32ce6',
    contraband: '#eb4b4b',
    ancient: '#ff6b35',
    divine: '#ffd700'
  };
  return colors[rarity] || '#b0c3d9';
}

function showNotification(text, type = 'success') {
  const notif = document.getElementById('notification');
  const icon = document.getElementById('notifIcon');
  const textEl = document.getElementById('notifText');

  notif.className = `notification ${type}`;
  icon.textContent = type === 'success' ? '✅' : '❌';
  textEl.textContent = text;

  notif.classList.add('show');
  setTimeout(() => notif.classList.remove('show'), 3000);
}

function createConfetti() {
  const container = document.getElementById('confettiContainer');
  const colors = ['#f59e0b', '#ef4444', '#22c55e', '#3b82f6', '#8b5cf6', '#d32ce6', '#fbbf24'];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 2 + 's';
    piece.style.animationDuration = (2 + Math.random() * 2) + 's';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.width = (6 + Math.random() * 8) + 'px';
    piece.style.height = (6 + Math.random() * 8) + 'px';
    container.appendChild(piece);
  }

  setTimeout(() => { container.innerHTML = ''; }, 5000);
}
