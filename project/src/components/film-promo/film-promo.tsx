import {MouseEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {Header} from '../header/header';
import {useAppSelector} from '../../hooks/reduser';
import {AddFavoriteButton} from '../add-favorite-button/add-favorite-button';
import {getFilmPromo} from '../../store/film-data/selectors';


function FilmCard() {
  const navigate = useNavigate();
  const filmPromo = useAppSelector(getFilmPromo);
  const {id, name, backgroundImage,posterImage, genre, released , isFavorite} = filmPromo;

  const clickPlayHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    navigate(`/player/${id}`);
  };

  return(
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>
            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button" onClick={clickPlayHandler}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <AddFavoriteButton id={id} isFavorite={isFavorite}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export {FilmCard};
