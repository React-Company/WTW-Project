import { Params } from 'react-router-dom';
import {film, reviews} from '../../mocks/films';
import {FilmFetch} from '../../api/dataFetch/filmFetch.ts';
import {FindRelatedFilmsFetch} from '../../api/dataFetch/findRelatedFilmsFetch.ts';
import {FilmReviewsFetch} from '../../api/dataFetch/filmReviewsFetch.ts';

export interface FilmLoaderData {
  filmData: film;
  relatedFilms: film[];
  reviewsData: reviews[];
}

interface LoaderArgs {
  params: Params;
}

export async function filmLoader({ params }: LoaderArgs): Promise<FilmLoaderData> {
  const filmIndex = Number(params.id);
  const filmData = await FilmFetch(filmIndex);

  const relatedFilms = await FindRelatedFilmsFetch(filmIndex);

  const reviewsData = await FilmReviewsFetch(filmIndex);

  return {
    filmData,
    relatedFilms,
    reviewsData
  };
}
