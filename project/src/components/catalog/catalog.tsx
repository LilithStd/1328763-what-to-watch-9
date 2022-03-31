import {GenresList} from '../genres-list/genres-list';
import {ShowMoreButton} from '../show-more-button/show-more-button';
import {FilmList} from '../film-list/film-list';
import {useAppSelector} from '../../hooks/reduser';
import {getCountFilmToshow, getFilms, getGenre} from '../../store/selectors';
import {getFilteredFilms} from '../../utils';


function Catalog() {
  const films = useAppSelector(getFilms);
  const currentFilmCount = useAppSelector(getCountFilmToshow);
  const currentGenre = useAppSelector(getGenre);

  const filmsToShow = getFilteredFilms(films, currentGenre).slice(0, currentFilmCount);

  return(
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList films  = {films}/>
      <FilmList films = {filmsToShow}/>
      {filmsToShow.length >= currentFilmCount && <ShowMoreButton/>}
    </section>
  );
}

export {Catalog};
