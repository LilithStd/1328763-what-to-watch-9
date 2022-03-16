import {FilmTypes}  from '../../../types/types';

type FilmOverviewProps = {
  film: FilmTypes
}

function FilmOverview({film} : FilmOverviewProps) {
  const {rating, scoresCount, director, starring, description} = film;

  function getTextRating(ratings: number) {
    if (0 <= ratings && ratings < 3) {
      return 'Bad';
    }
    if (3 <= ratings && ratings < 5) {
      return 'Normal';
    }
    if (5 <= ratings && ratings < 8) {
      return 'Good';
    }
    if (8 <= ratings && ratings < 10) {
      return 'Very good';
    }
    if (ratings === 10) {
      return 'Awesome';
    }
  }
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
