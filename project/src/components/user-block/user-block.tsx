import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';

function UserBlock()  {
  const navigate = useNavigate();
  return(
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img onClick={() => navigate(AppRoute.MyList)} src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a href="/#" className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}

export {UserBlock};
