import CardListItem from './CardListItem';
import {film} from '../mocks/films.ts';

type CardListProps = {
  films: film[];
}

export default function CardList({films}: CardListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.slice(0,8).map((data) => (
        <CardListItem filmData={data} key={data.id} />
      ))}
    </div>
  );
}
