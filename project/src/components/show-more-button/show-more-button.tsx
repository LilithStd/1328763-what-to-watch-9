import {useAppDispatch} from '../../hooks/reduser';
import {changeCountFilmToShow} from '../../store/actions';

function ShowMoreButton() {
  const dispatch = useAppDispatch();
  return(
    <div className="catalog__more" onClick={() => dispatch(changeCountFilmToShow())}>
      <button className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export {ShowMoreButton};
