import {MouseEvent} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/reduser';
import {getFilms} from '../../store/selectors';
import {NotFound} from '../../pages/not-found/not-found';


function Player() {
  const params = useParams();
  const navigate = useNavigate();

  const currentId = Number(params.id);
  const storeFilms = useAppSelector(getFilms);
  const currentFilm = storeFilms.find((element) => element.id === currentId);

  if (!currentFilm) {
    return <NotFound/>;
  }

  const {videoLink, name} = currentFilm;

  const clickExitHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    navigate(-1);
  };

  return(
    <div className="player">
      <video src={videoLink} className="player__video" poster="img/player-poster.jpg" />
      <button type="button" className="player__exit" onClick={clickExitHandler}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100} />
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>

  );
}

export {Player};
