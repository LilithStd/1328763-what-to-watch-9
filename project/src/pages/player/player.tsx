import {MouseEvent, useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/reduser';
import {getFilms} from '../../store/film-data/selectors';
import {LoadingScreen} from '../../components/loading-screen/loading-screen';
import {NotFound} from '../../pages/not-found/not-found';
import {getCurrentFilmDataLoaded} from '../../store/film-data/selectors';
import {getRemainingTime, getRemainingPercent} from '../../utils';

function Player() {
  const params = useParams();
  const navigate = useNavigate();
  const currentId = Number(params.id);
  const storeFilms = useAppSelector(getFilms);
  const currentFilm = storeFilms.find((element) => element.id === currentId);
  const isDataLoadedFilm = useAppSelector(getCurrentFilmDataLoaded);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isActive, setIsActive] = useState(true);
  const [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    if (isActive) {
      if (videoRef.current) {
        videoRef.current.play();
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  if (!currentFilm) {
    return <NotFound/>;
  }

  const {videoLink,name, previewImage} = currentFilm;

  const clickExitHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    navigate(-1);
  };

  const handlePlayFilm = () => {
    setIsActive(!isActive);
  };

  const handleFullScreen = () => {
    videoRef.current?.requestFullscreen();
  };

  if (!isDataLoadedFilm) {
    return (
      <LoadingScreen />
    );
  }

  return(
    <div className="player">
      <video
        className="player__video"
        ref={videoRef}
        src={videoLink}
        poster={previewImage}
        onTimeUpdate={(evt) => setCurrentTime(Math.round(evt.currentTarget.currentTime))}
      />
      <button type="button" className="player__exit" onClick={clickExitHandler}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress"
              value={getRemainingPercent(currentFilm.runTime, currentTime)}
              max={100}
            />
            <div className="player__toggler"
              style ={{left: `${getRemainingPercent(currentFilm.runTime, currentTime)}%`}}
            >Toggler
            </div>
          </div>
          <div className="player__time-value">-{getRemainingTime(currentFilm.runTime, currentTime)}</div>
        </div>
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={() => {handlePlayFilm();}}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              {isActive ? <use xlinkHref="#pause"></use> : <use xlinkHref="#play-s"></use>}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => {handleFullScreen();}}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export {Player};
