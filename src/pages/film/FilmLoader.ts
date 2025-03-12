import { Params } from "react-router-dom";
import { films } from "../../mocks/films";
import { FilmData } from "../../api/types/types";

interface LoaderArgs {
  params: Params;
}

export async function filmLoader({params}: LoaderArgs): Promise<FilmData> {
  const film_data = films[Number(params.id) - 1];
  return  Promise.resolve({ film_data });
}