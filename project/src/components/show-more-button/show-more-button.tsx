import {useAppDispatch} from '../../hooks/reduser';
import {changeCountFilmToShow} from '../../store/actions';

function ShowMoreButton() {
  const dispatch = useAppDispatch();
  const changeCountFilmToShowHandler = () => dispatch(changeCountFilmToShow());
  return(
    <div className="catalog__more" onClick={changeCountFilmToShowHandler}>
      <button className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export {ShowMoreButton};
