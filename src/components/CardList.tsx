import CardListItem from './CardListItem';
import {film} from '../mocks/films.ts';

type CardListProps = {
  films: film[];
}

export default function CardList({films}: CardListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((data) => (
        <CardListItem film_data={data} key={data.id} />
      ))}
    </div>
  );
}
