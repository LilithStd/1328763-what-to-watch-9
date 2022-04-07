import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/reduser';
import {postFilmToFavorite} from '../../store/api-action';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {FavoriteStatus, AuthorizationStatus, AppRoute} from '../../const';

type AddFavoriteButtonProps = {
  id: number
  isFavorite: boolean
}

function AddFavoriteButton({id, isFavorite}: AddFavoriteButtonProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);

  const handleFavoriteClick = () => {
    const status = isFavorite ? FavoriteStatus.NO : FavoriteStatus.YES;
    dispatch(postFilmToFavorite({id, status}));
  };

  const handleFavoriteClickRedirect = () => {
    navigate(AppRoute.SignIn);
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={() => authStatus === AuthorizationStatus.Auth ? handleFavoriteClick(): handleFavoriteClickRedirect() }>
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={isFavorite && authStatus === AuthorizationStatus.Auth ? '#in-list' : '#add'} />
      </svg>
      <span>My list</span>
    </button>
  );
}

export {AddFavoriteButton};
