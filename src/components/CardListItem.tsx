import { Link } from 'react-router-dom';
import { FilmData } from '../api/types/types.ts';
import { useState } from 'react';


export default function CardListItem ({film_data}: FilmData) {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true)
  }

  const handleLeave = () => {
    setHover(false)
  }

  return (
    <Link to={`/films/${film_data.id}`} className="small-film-card catalog__films-card" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <div className="small-film-card__image">
        {
          hover ? <video src={film_data.previewVideoLink} autoPlay width="280" height="175" /> : <img src={film_data.previewImage} alt={film_data.name} width="280" height="175" />
        }
        
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{film_data.name}</a>
      </h3>
    </Link>
  );
}
