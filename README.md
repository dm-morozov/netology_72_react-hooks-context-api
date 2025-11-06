# React Hooks & Context API

**Учебный проект Netology**

[![React + TypeScript](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)  
[![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)](https://vitejs.dev/)  
[![Netology](https://img.shields.io/badge/Netology-2025-green)](https://netology.ru)

---

## Статус проекта

[![Build & Deploy](https://github.com/dm-morozov/netology_72_react-hooks-context-api/actions/workflows/web.yaml/badge.svg)](https://github.com/dm-morozov/netology_72_react-hooks-context-api/actions/workflows/web.yaml)

[Посмотреть демо](https://dm-morozov.github.io/netology_72_react-hooks-context-api/)

---

## О проекте

Практическая реализация **5 задач** по теме **React Hooks и Context API** в рамках курса **Netology**.  
Проект демонстрирует применение хуков и глобального состояния в реальных сценариях.

---

## Структура проекта

```
src/
├── components/       # UI-компоненты
├── context/          # Context API (Theme, Language, User)
├── hooks/            # Кастомные хуки
│   └── useJsonFetch.tsx
├── App.tsx           # Главный компонент
└── main.tsx
```

---

# 5 Задач: Реализация и описание

---

## 1. Список пользователей + Детали (useEffect)

**Что делает:**  
При загрузке приложения — **один раз** загружается список пользователей.  
При клике на пользователя — **загружаются его детали** (аватар, город, компания, должность).

**Как реализовано:**

- `List.tsx` → `useEffect([], ...)` → `fetch('users.json')`
- `Details.tsx` → `useEffect([userId], ...)` → `fetch('{id}.json')`
- `selectedId` — состояние в `List`
- `key={userId}` — корректный ререндер
- `AbortController` — отмена запросов при смене пользователя
- `loading`, `error` — UX-индикаторы

**Цель:**  
Изучение **жизненного цикла `useEffect`**, **асинхронных запросов**, **оптимизации**.

---

## 2. Кастомный хук `useJsonFetch`

**Что делает:**

```ts
const [data, loading, error] = useJsonFetch(url, opts)
```

Возвращает **данные, флаг загрузки и ошибку** после `fetch`.

**Как реализовано:**

- `useEffect([url, opts])` → запуск при смене URL
- `fetch` + `response.json()`
- `!response.ok` → `throw Error`
- `try/catch/finally` → `loading` всегда сбрасывается
- `AbortController` → защита от гонок
- Дженерики `<T>` → типобезопасность

**Примеры:**

- `GET /data` → `{"status": "ok"}`
- `GET /error` → `HTTP 500`
- `GET /loading` → 5 сек. задержка

**Цель:**  
Практика **создания переиспользуемых хуков**, **обработки ошибок**, **UX**.

---

## 3. Context API: Тема (ThemeContext)

**Что делает:**  
Переключение между **светлой и тёмной темой** по всему приложению.

**Как реализовано:**

- `ThemeContext` → `createContext('light')`
- `useTheme()` — кастомный хук
- `toggle()` → `setTheme(prev => prev === 'light' ? 'dark' : 'light')`
- Динамические стили через `styleTheme(theme)`
- Используется в `Header`, `ThemeButton`

**Цель:**  
Изучение **глобального состояния без пропсов**.

---

## 4. Context API: Язык (LanguageContext)

**Что делает:**  
Переключение между **русским и английским** языком.

**Как реализовано:**

- `LanguageContext` → `createContext('ru')`
- `useLanguage()` — кастомный хук
- `toggleLanguage()` → `ru ↔ en`
- Объекты `texts.ru`, `texts.en` → локализация
- Применяется в `Header`, `ThemeButton`

**Цель:**  
Практика **локализации через Context**, **масштабируемости**.

---

## 5. Context API: Пользователь (UserContext)

**Что делает:**

- Автовход через 5 секунд
- Кнопка: `Войти как Дмитрий` / `Выйти`
- Приветствие: `Привет, Дмитрий!`

**Как реализовано:**

```ts
useEffect(() => {
  const timer = setTimeout(() => login('Дмитрий'), 5000)
  return () => clearTimeout(timer)
}, [])
```

- `UserContext` → `{ user, login, logout }`
- `useUser()` — кастомный хук
- Условный текст в `Header`, `ThemeButton`

**Цель:**  
Практика **управления авторизацией**, **таймеров в `useEffect`**.

---

## Бэкенд

**Deployed на Render:**  
[https://netology-72-react-hooks-context-api.onrender.com](https://netology-72-react-hooks-context-api.onrender.com)

```ts
GET /data     → { status: "ok" }
GET /error    → 500
GET /loading  → задержка 5 сек.
```

---

## Что изучено

| Тема              | Реализовано               |
| ----------------- | ------------------------- |
| `useState`        | Управление состоянием     |
| `useEffect`       | Загрузка, таймеры, отмена |
| `useContext`      | Глобальное состояние      |
| `AbortController` | Отмена запросов           |
| `fetch`           | HTTP-запросы              |
| TypeScript        | Полная типизация          |
| CSS Modules       | Локальные стили           |

---

## Запуск

```bash
git clone https://github.com/dm-morozov/netology_72_react-hooks-context-api.git
npm install
npm run dev
```

---

## 📧 Контакты

Если возникнут вопросы, пишите:

- ![LinkedIn](./svg/linkedin-icon.svg) [LinkedIn](https://www.linkedin.com/in/dm-morozov/)
- ![Telegram](./svg/telegram.svg) [Telegram](https://t.me/dem2014)
- ![GitHub](./svg/github-icon.svg) [GitHub](https://github.com/dm-morozov/)
