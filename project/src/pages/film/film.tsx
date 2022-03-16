import {MouseEvent} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import {Footer} from '../../components/footer/footer';
import {Header}  from '../../components/header/header';
import {NotFound} from '../../pages/not-found/not-found';
import {FilmList} from '../../components/film-list/film-list';
import {FilmTypes, CommentProps}  from '../../types/types';
import {MORE_LIKE_FILM_COUNT} from '../../const';
import {FilmTabs} from '../../pages/film/film-tabs/film-tabs';

type FilmProps = {
  films: FilmTypes[];
  reviews: CommentProps[];
}

function Film({films, reviews}: FilmProps) {
  const params = useParams();
  const navigate = useNavigate();

  const currentId = Number(params.id);

  const currentFilm = films.find((element) => element.id === currentId);

  if (!currentFilm) {
    return <NotFound/>;
  }

  const {id, name, posterImage,backgroundImage, genre, released} = currentFilm;

  const filteredFilms = films
    .filter((item) => (item.genre === currentFilm.genre && item.name !== currentFilm.name))
    .slice(0, MORE_LIKE_FILM_COUNT);

  const clickPlayHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    navigate(`/player/${currentFilm.id}`);
  };

  return(
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={clickPlayHandler}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width={218} height={327} />
            </div>
            <div className="film-card__desc">
              <FilmTabs film = {currentFilm} reviews = {reviews}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films = {filteredFilms}/>
        </section>
        <Footer />
      </div>
    </>
  );
}

export {Film};
