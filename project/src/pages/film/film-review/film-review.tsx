import {CommentReview} from '../../../types/types';
import {convertDate} from '../../../utils';

type FilmReviewProps = {
  review: CommentReview;
}

function FilmReview({review} :FilmReviewProps) {
  const {comment,user, date, rating} = review;
  const {name} = user;
  const reviewDate = new Date(date);

  return(
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={date}>{convertDate(reviewDate)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

export {FilmReview};
