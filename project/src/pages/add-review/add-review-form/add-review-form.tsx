import { ChangeEvent, Fragment, useState, FormEvent } from 'react';
import {useNavigate} from 'react-router-dom';
import {rating} from '../../../const';
import {useAppDispatch} from '../../../hooks/reduser';
import {commentsAction} from '../../../store/api-action';
import {checkValidForm} from '../../../utils';


type AddReviewProps = {
  id: number
}

function AddReviewForm({id}: AddReviewProps)  {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    rating: 0,
    reviewText: '',
  });

  const addReviewSubmitHandler = (evt: FormEvent<HTMLFormElement> ) => {
    evt.preventDefault();

    const dataCommentFilm = {
      id: id,
      dataComment: {
        comment: formData.reviewText,
        rating: formData.rating,
      },
    };

    dispatch(commentsAction(dataCommentFilm));
    navigate(`/films/${id}`);
  };

  return(
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={addReviewSubmitHandler}>
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
            <button className="add-review__btn" type="submit" disabled = {checkValidForm(formData)}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export {AddReviewForm};
