import {GenresList} from '../genres-list/genres-list';
import {ShowMoreButton} from '../show-more-button/show-more-button';
import {FilmList} from '../film-list/film-list';
import {FilmTypes} from '../../types/types';
import {useAppSelector} from '../../hooks/reduser';
import {getCountFilmToshow, getFilms, getGenre} from '../../store/selectors';
import {DEFAULT_GENRE} from '../../const';


function Catalog() {
  const films = useAppSelector(getFilms);
  const currentFilmCount = useAppSelector(getCountFilmToshow);
  const currentGenre = useAppSelector(getGenre);
  // const filmsIntial = useAppSelector(getFilms);

  const getFilteredFilms =(movies: FilmTypes[], genre: string)  => genre === DEFAULT_GENRE
    ? movies = movies.slice()
    : movies.slice().filter((movie) => movie.genre === genre);
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
