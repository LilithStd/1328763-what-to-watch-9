import { ChangeEvent, Fragment, useState } from 'react';
import {rating} from '../../../const';

function AddReviewForm()  {

  const [formData, setFormData] = useState({
    rating: 0,
    reviewText: '',
  });


  return(
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {rating.map((element)  => (
              <Fragment key={element}>
                <input className="rating__input" id={`star-${element}`} type="radio" name="rating" defaultValue={element}
                  onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                    const value = Number(target.value);
                    setFormData({...formData, rating: value});
                  }}
                />
                <label className="rating__label" htmlFor={`star-${element}`}>Rating {element}</label>
              </Fragment>
            ),
            )}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" defaultValue={''}
            onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
              const textReview = target.value;
              setFormData({...formData, reviewText: textReview});
            }}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export {AddReviewForm};
