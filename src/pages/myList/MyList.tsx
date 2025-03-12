import { useLoaderData } from 'react-router-dom';
import CardList from '../../components/CardList.tsx';
import { FilmsData } from '../../api/types/types.ts';
import LogoLink from '../../components/LogoLink.tsx';

export default function MyList() {
  const { films_data }: FilmsData = useLoaderData() as FilmsData;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
      <LogoLink light={false}/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CardList films={films_data}/>
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
