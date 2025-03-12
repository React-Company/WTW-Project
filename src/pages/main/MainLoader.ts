import { FilmsData } from "../../api/types/types";
import { film, films } from "../../mocks/films";

//async function searchPromoFilm() {
//  const res = await fetch("https://12.react.htmlacademy.pro/wtw/promo");
//  const data: film = await res.json();
//  
//  return data;
//}

export function mainLoader(): Promise<FilmsData> {
  const films_data = films;

  return  Promise.resolve({ films_data });
}