import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/reduser';
import {postFilmToFavorite} from '../../store/api-action';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getFilms} from '../../store/film-data/selectors';
import {FavoriteStatus, AuthorizationStatus, AppRoute} from '../../const';

type AddFavoriteButtonProps = {
  id: number
  isFavorite: boolean
  isPromo?: boolean
}


function AddFavoriteButton({id, isFavorite, isPromo}: AddFavoriteButtonProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);

  const storeFilms = useAppSelector(getFilms);
  const currentFilm = storeFilms.find((element) => element.id === id);
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  // eslint-disable-next-line no-console
  // if(!currentFilm) {
  //   return ;
  // }

  const handleFavoriteClick = () => {
    const status = isFavorite ? FavoriteStatus.NO : FavoriteStatus.YES;
    if(isPromo && currentFilm &&id === currentFilm.id) {
      dispatch(postFilmToFavorite({id, status, isPromo}));
      dispatch(postFilmToFavorite({id, status}));
    }

    dispatch(postFilmToFavorite({id, status}));
  };

  const handleFavoriteClickRedirect = () => {
    navigate(AppRoute.SignIn);
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={() => authStatus === AuthorizationStatus.Auth ? handleFavoriteClick(): handleFavoriteClickRedirect() }>
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={isFavorite ? '#in-list' : '#add'} />
      </svg>
      <span>My list</span>
    </button>
  );
}

export {AddFavoriteButton};
