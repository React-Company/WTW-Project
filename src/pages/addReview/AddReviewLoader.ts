import {FilmFetch} from '../../api/dataFetch/filmFetch.ts';
import {film} from '../../mocks/films.ts';
import {Params} from 'react-router-dom';


export interface AddReviewLoaderData {
  filmData: film;
}

interface LoaderArgs {
  params: Params;
}

export async function AddReviewLoader({ params }: LoaderArgs): Promise<AddReviewLoaderData> {
  const filmIndex = Number(params.id);
  const filmData = await FilmFetch(filmIndex);

  return {
    filmData
  };
}
