import { useLoaderData } from 'react-router-dom';
import CardList from '../../components/CardList.tsx';
import LogoLink from '../../components/LogoLink.tsx';
import UserStatus from '../../components/UserStatus.tsx';
import {MyListLoaderResults} from './MyListLoader.ts';

export default function MyList() {
  const { favoritsFilms } = useLoaderData() as MyListLoaderResults;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoLink light={false}/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoritsFilms.length}</span></h1>
        <UserStatus />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CardList films={favoritsFilms}/>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
