import { film } from '../../mocks/films';

export interface MainLoaderData
{
  favoriteFilm: film;
  filmsArray: film[];
}

export async function mainLoader(): Promise<MainLoaderData> {
  const favoriteFilmRes = await fetch('https://12.react.htmlacademy.pro/wtw/promo');
  const favoriteFilm: film = await favoriteFilmRes.json() as film;

  const filmsDataRes = await fetch('https://12.react.htmlacademy.pro/wtw/films');
  const filmsArray: film[] = await filmsDataRes.json() as film[];

  // eslint-disable-next-line no-console
  console.log({ favoriteFilm, filmsArray });

  return {
    favoriteFilm,
    filmsArray
  };
}
