import {CommentReview} from '../../../types/types';
type FilmReviewProps = {
  reviews: CommentReview[];
}

function FilmReview({reviews} :FilmReviewProps) {
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((element) => (
          <div className="review" key = {element.id}>
            <blockquote className="review__quote">
              <p className="review__text">{element.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{element.user.name}</cite>
                <time className="review__date" dateTime={element.date}>{element.date}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{element.rating}</div>
          </div>
        ))}
      </div>
    </div>

  );
}

export {FilmReview};
