import LogoLink from '../../components/LogoLink';
import UserStatus from '../../components/UserStatus.tsx';
import {Link, useLoaderData, useNavigate} from 'react-router-dom';
import {AddReviewLoaderData} from './AddReviewLoader.ts';
import React, {useState} from 'react';
import {AddReviewFetch} from '../../api/dataFetch/addReviewFetch.ts';

export default function AddReview() {
  const { filmData } = useLoaderData() as AddReviewLoaderData;
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleCommentChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (comment.length < 50) {
      setError('Длина комментария должна быть не менее 50 символов');
    } else if (comment.length > 400) {
      setError('Длина комментария должна быть нее более 400 символов');
    } else {
      setDisabled(true);
      await AddReviewFetch({filmId: filmData.id, comment, rating})
        .then(() => {
          navigate(`/films/${filmData.id}`);
        })
        .catch(() => {
          setError('Произошла ошибка при отправке комментария');
        })
        .finally(() => {
          setDisabled(false);
        });
    }
  };

  const getTransparentOverlayColor = (hexColor: string) => {
    const hex = hexColor.replace('#', '');

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const normR = r / 255;
    const normG = g / 255;
    const normB = b / 255;

    const luminance = 0.2126 * normR + 0.7152 * normG + 0.0722 * normB;

    return luminance > 0.7
      ? 'rgba(0, 0, 0, 0.1)'
      : 'rgba(255, 255, 255, 0.1)';
  };

  const newColor = getTransparentOverlayColor(filmData.backgroundColor);

  const backColor = {
    backgroundColor: filmData.backgroundColor,
  };
  return (
    <section className="film-card film-card--full" style={backColor}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmData.backgroundImage} alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <LogoLink light={false}/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmData.id}`} className="breadcrumbs__link">{filmData.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserStatus/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={filmData.posterImage} alt="The Grand Budapest Hotel poster" width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form aria-disabled={disabled} className="add-review__form" onSubmit={handleSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((starValue) => (
                <React.Fragment key={`star-${starValue}`}>
                  <input
                    className="rating__input"
                    id={`star-${starValue}`}
                    type="radio"
                    name="rating"
                    value={starValue}
                    onChange={() => setRating(starValue)}
                  />
                  <label className="rating__label" htmlFor={`star-${starValue}`}>
                    Rating {starValue}
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text" style={{backgroundColor: newColor}}>
            <textarea className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text"
              onChange={handleCommentChange}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
      <div style={{color: 'red', textAlign: 'center', width: '100%', marginTop: '30px'}}>
        {error}
      </div>
    </section>
  );
}
