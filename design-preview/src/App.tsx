import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router';
import { categories } from './catalog/categories';
import { entries } from './catalog/entries';
import type { DesignEntry } from './catalog/types';

function EmptyState() {
  return <section className="empty-state" aria-labelledby="empty-title">
    <h2 id="empty-title">Примеры ещё не добавлены</h2>
    <p>Сначала нужен разбор ТЗ проекта и выбранное направление дизайна. Затем здесь появятся только подходящие этому проекту примеры.</p>
    <p>Оформление этой оболочки — временная структура, а не утверждённый дизайн продукта.</p>
  </section>;
}

function EntryList({ items }: { items: readonly DesignEntry[] }) {
  if (entries.length === 0) return <EmptyState />;
  if (items.length === 0) return <p role="status">По запросу ничего не найдено. Измените запрос или очистите поиск.</p>;
  return <ul className="entry-list">{items.map(entry => <li key={entry.id}>
    <Link to={`/entries/${encodeURIComponent(entry.id)}`}>{entry.title}</Link>
    <p>{entry.summary}</p>
  </li>)}</ul>;
}

function Overview() {
  const [params] = useSearchParams();
  const query = params.get('q')?.trim() ?? '';
  const items = entries.filter(entry => `${entry.title} ${entry.summary}`.toLocaleLowerCase('ru').includes(query.toLocaleLowerCase('ru')));
  return <>
    <h1>{query ? 'Результаты поиска' : 'Обзор дизайн-превью'}</h1>
    <p>{query ? `Запрос: «${query}»` : 'Рабочее пространство для проверки визуальных решений и состояний интерфейса после выбора направления.'}</p>
    <p className="muted">Добавлено примеров: {items.length}</p>
    {query && <p><Link to="/">Очистить поиск</Link></p>}
    <EntryList items={items} />
  </>;
}

function CategoryIndex() {
  return <><h1>Категории</h1><p>Разделы для будущих примеров. Названия можно изменить под задачи проекта.</p>
    <ul className="category-list">{categories.map(category => <li key={category.slug}>
      <Link to={`/categories/${category.slug}`}>{category.title}</Link><p>{category.description}</p>
    </li>)}</ul>
  </>;
}

function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find(item => item.slug === slug);
  if (!category) return <MissingPage />;
  return <><h1>{category.title}</h1><p>{category.description}</p>
    <EntryList items={entries.filter(entry => entry.categorySlug === category.slug)} />
  </>;
}

function EntryPage() {
  const { id } = useParams();
  const entry = entries.find(item => item.id === id);
  if (!entry) return <><h1>Пример недоступен</h1><p>Такого примера пока нет в реестре.</p><EmptyState /><Link to="/">Вернуться к обзору</Link></>;
  const Preview = entry.Preview;
  return <>
    <Link to={`/categories/${entry.categorySlug}`}>К категории</Link>
    <h1>{entry.title}</h1><p>{entry.summary}</p>
    <section className="preview-region" aria-label={`Превью: ${entry.title}`}><Preview /></section>
    <h2>Состояния</h2><ul>{entry.states.map(state => <li key={state}>{state}</li>)}</ul>
    <h2>Источник</h2><dl>
      <dt>Тип</dt><dd>{entry.source.kind === 'original' ? 'Оригинальная работа' : 'Адаптация'}</dd>
      <dt>Источник</dt><dd><a href={entry.source.url}>{entry.source.name}</a></dd>
      <dt>Лицензия</dt><dd>{entry.source.license}</dd>
      {entry.source.revision && <><dt>Версия</dt><dd>{entry.source.revision}</dd></>}
      <dt>Изменения</dt><dd>{entry.source.adaptationNote}</dd>
    </dl>
  </>;
}

function MissingPage() {
  return <><h1>Страница не найдена</h1><p>Проверьте адрес или выберите раздел навигации.</p><Link to="/">Вернуться к обзору</Link></>;
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get('q') ?? '');
  const main = useRef<HTMLElement>(null);
  useEffect(() => {
    setQuery(new URLSearchParams(location.search).get('q') ?? '');
    main.current?.focus();
  }, [location.pathname, location.search]);
  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(query.trim() ? `/?q=${encodeURIComponent(query.trim())}` : '/');
  }
  return <>
    <a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); main.current?.focus(); }}>К содержимому</a>
    <header className="site-header">
      <Link className="site-title" to="/">Дизайн-превью</Link>
      <nav aria-label="Основная навигация"><NavLink to="/" end>Обзор</NavLink><NavLink to="/categories">Категории</NavLink></nav>
      <form role="search" onSubmit={search}>
        <label htmlFor="catalog-search">Поиск примеров</label>
        <div className="search-controls"><input id="catalog-search" type="search" value={query} onChange={event => setQuery(event.target.value)} /><button type="submit">Найти</button></div>
      </form>
    </header>
    <div className="workspace">
      <aside><nav aria-label="Категории примеров"><h2>Категории</h2><ul>{categories.map(category => <li key={category.slug}><NavLink to={`/categories/${category.slug}`}>{category.title}</NavLink></li>)}</ul></nav></aside>
      <main id="main-content" ref={main} tabIndex={-1}>
        <Routes><Route path="/" element={<Overview />} /><Route path="/categories" element={<CategoryIndex />} /><Route path="/categories/:slug" element={<CategoryPage />} /><Route path="/entries/:id" element={<EntryPage />} /><Route path="*" element={<MissingPage />} /></Routes>
      </main>
    </div>
    <footer>Отдельный инструмент просмотра. Стек и оформление продукта выбираются после разбора ТЗ.</footer>
  </>;
}
