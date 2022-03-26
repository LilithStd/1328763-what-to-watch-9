import {GenresList} from '../genres-list/genres-list';
import {ShowMoreButton} from '../show-more-button/show-more-button';
import {FilmList} from '../film-list/film-list';
import {FilmTypes} from '../../types/types';
import {useAppSelector} from '../../hooks/reduser';
import {getFilteredFilm, getCountFilmToshow} from '../../store/selectors';

type CatalogProps = {
  films: FilmTypes[]
}

function Catalog({films}: CatalogProps) {
  const filmsTest = useAppSelector(getFilteredFilm);
  const currentFilmCount = useAppSelector(getCountFilmToshow);

  const filmsToShow = filmsTest.slice(0, currentFilmCount);
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
