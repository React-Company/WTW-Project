import { Link } from 'react-router-dom';
import { FilmData } from '../api/types/types.ts';
import { useState } from 'react';


export default function CardListItem ({filmData}: FilmData) {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  return (
    <Link to={`/films/${filmData.id}`} className="small-film-card catalog__films-card" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <div className="small-film-card__image">
        {
          hover ? <video src={filmData.previewVideoLink} autoPlay width="280" height="175" muted/> : <img src={filmData.previewImage} alt={filmData.name} width="280" height="175" />
        }

      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" >{filmData.name}</a>
      </h3>
    </Link>
  );
}
