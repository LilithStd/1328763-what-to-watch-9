import {Link} from 'react-router-dom';
import {AppRoute,AuthorizationStatus} from '../../const';
import {useAppDispatch,useAppSelector} from '../../hooks/reduser';
import {logoutAction} from '../../store/api-action';
import {getAuthorizationStatus} from '../../store/selectors';
import browserHistory from '../../browser-history';

function UserBlock()  {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);

  return(
    <ul className="user-block">
      {
        authStatus === AuthorizationStatus.Auth &&
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <Link to={AppRoute.MyList}><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>
            </div>
          </li>
          <li className="user-block__item">
            <a
              className="user-block__link"
              href="/#"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
            >
              Sign out
            </a>
          </li>
        </>
      }
      {
        (authStatus === AuthorizationStatus.NoAuth || authStatus === AuthorizationStatus.Unknown) &&
        <li className="user-block__item">
          <a
            className="user-block__link"
            href="/#"
            onClick={(evt) => {
              evt.preventDefault();
              browserHistory.push(AppRoute.SignIn);
            }}
          >
            Sign in
          </a>
        </li>
      }
    </ul>
  );
}

export {UserBlock};
