import { useLoaderData } from 'react-router-dom';
import CardList from '../../components/CardList.tsx';
import { FilmsData } from '../../api/types/types.ts';
import LogoLink from '../../components/LogoLink.tsx';
import UserStatus from '../../components/UserStatus.tsx';
import {MainLoaderData} from '../main/MainLoader.ts';

export default function MyList() {
  const { filmsData }: FilmsData = useLoaderData() as FilmsData;
  const { authInfo }: MainLoaderData = useLoaderData() as MainLoaderData;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoLink light={false}/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserStatus avatar={authInfo.userAuthData.avatarUrl} />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CardList films={filmsData}/>
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
