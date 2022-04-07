import { ChangeEvent, Fragment, useState, FormEvent, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {rating, APIRoute, ReviewSendStatus} from '../../../const';
import {useAppDispatch,useAppSelector} from '../../../hooks/reduser';
import {getReviewSendStatus} from '../../../store/film-data/selectors';
import {addReviewAction} from '../../../store/api-action';
import {checkValidForm} from '../../../utils';
import {sendReviewStatus} from '../../../store/film-data/film-data';
import {setError} from '../../../store/error-data/error-data';

type AddReviewProps = {
  id: string
}

function AddReviewForm({id}: AddReviewProps)  {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const sendStatus = useAppSelector(getReviewSendStatus);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    rating: 0,
    reviewText: '',
  });
  const isDisabledForm = checkValidForm(formData);

  useEffect(() => {
    if(sendStatus === ReviewSendStatus.SENDING && !isDisable) {
      setIsDisable(true);
    }
    if(sendStatus === ReviewSendStatus.SUCCESS) {
      navigate(`${APIRoute.Films}/${id}`);
      dispatch(sendReviewStatus(ReviewSendStatus.INITIAL));
    }
    if(sendStatus === ReviewSendStatus.ERROR) {
      dispatch(setError('Ошибка отправки отзыва, попробуйте позже'));
      setIsDisable(false);
    }

  }, [dispatch, id, isDisable, navigate, sendStatus]);

  const addReviewSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!isDisabledForm) {
      const dataCommentFilm = {
        id: id,
        dataComment: {
          comment: formData.reviewText,
          rating: formData.rating,
        },
      };

      dispatch(addReviewAction(dataCommentFilm));

    }
  };

  return(
    <div className="add-review">
      <form action="#" className={`add-review__form ${isDisable ? ' add-review__form-disabled' : ''}`} onSubmit={addReviewSubmitHandler}>
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
            <button className="add-review__btn" type="submit" disabled={isDisabledForm || isDisable}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export {AddReviewForm};
