import {FilmTypes}  from '../../../types/types';
import {getTextRating} from '../../../utils';

type FilmOverviewProps = {
  film: FilmTypes
}

function FilmOverview({film} : FilmOverviewProps) {
  const {rating, scoresCount, director, starring, description} = film;

  const actorsStarring = starring.join(', ');
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getTextRating(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {actorsStarring} and other</strong></p>
      </div>
    </>
  );
}

export {FilmOverview};
