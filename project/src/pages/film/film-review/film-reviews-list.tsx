import {CommentReview} from '../../../types/types';
import {FilmReview} from '../film-review/film-review';

type FilmReviewsProps = {
  reviews: CommentReview[]
}

function FilmReviewsList({reviews}: FilmReviewsProps ) {
  const oddReviews:CommentReview[] = [];
  const evenReviews:CommentReview[] = [];

  reviews.forEach((review, index) => (index - 1) % 2 !== 0 ? oddReviews.push(review) : evenReviews.push(review));

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {oddReviews.map((review) => <FilmReview key={review.id} review={review} />)}
      </div>
      <div className="film-card__reviews-col">
        {evenReviews.map((review) => <FilmReview key={review.id} review={review} />)}
      </div>
    </div>
  );
}

export {FilmReviewsList};
