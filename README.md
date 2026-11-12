# Foksik Case

Проект состоит из двух частей:

- **Фронтенд** — статический сайт (`index.html`, `css/`, `js/`)
- **Бэкенд** — Node.js + Express API с MongoDB (`foksik_case_backend/`)

## Требования

- [Node.js](https://nodejs.org/) версии 18 или выше
- [MongoDB](https://www.mongodb.com/) (локальный сервер или MongoDB Atlas)
- Любой современный браузер

## Структура проекта

```
.
├── index.html              # Главная страница фронтенда
├── css/
│   └── styles.css          # Стили
├── js/
│   └── main.js             # Скрипты фронтенда
└── foksik_case_backend/    # Бэкенд (Express + Mongoose)
    ├── package.json
    └── src/
        ├── index.js        # Точка входа сервера
        ├── config/db.js    # Подключение к MongoDB
        ├── controllers/    # Контроллеры
        ├── models/         # Модели Mongoose
        └── routes/         # Маршруты API
```

## Запуск фронтенда локально

Вариант 1 — просто открыть файл:

1. Откройте `index.html` в браузере (двойной клик по файлу).

Вариант 2 — через локальный сервер (рекомендуется):

```bash
# из корня проекта
npx serve .
# или
python3 -m http.server 8000
```

После этого откройте в браузере `http://localhost:8000` (или адрес, который выведет `serve`).

## Запуск бэкенда локально

1. Перейдите в папку бэкенда:

   ```bash
   cd foksik_case_backend
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Создайте файл `.env` в папке `foksik_case_backend` со следующим содержимым:

   ```env
   PORT=3000
   NODE_ENV=development
   MONGODB_URI=mongodb://127.0.0.1:27017/foksik_case
   ```

   > Если вы используете MongoDB Atlas, подставьте туда строку подключения из вашего кластера.

4. Убедитесь, что MongoDB запущена локально:

   ```bash
   mongod
   ```

5. Запустите сервер:

   ```bash
   # режим разработки (с автоперезагрузкой через nodemon)
   npm run dev

   # обычный запуск
   npm start
   ```

6. Проверьте, что сервер работает:

   ```bash
   curl http://localhost:3000
   ```

   Ожижаемый ответ: `{"message":"Welcome to Foksik Case Backend API"}`

## API

- `GET /` — приветственное сообщение
- `/api/users` — маршруты, связанные с пользователями (см. `src/routes/userRoutes.js`)

## Полезные команды

| Команда | Описание |
|---|---|
| `npm install` | Установка зависимостей бэкенда |
| `npm run dev` | Запуск бэкенда в режиме разработки |
| `npm start` | Запуск бэкенда |

## Возможные проблемы

- **Сервер не запускается / ошибка подключения к MongoDB** — проверьте, что MongoDB запущена и `MONGODB_URI` в `.env` указана верно.
- **CORS-ошибки на фронтенде** — на бэкенде уже включён `cors()`; убедитесь, что фронтенд обращается к правильному адресу (`http://localhost:3000`).
- **Порт 3000 занят** — измените `PORT` в `.env`.
