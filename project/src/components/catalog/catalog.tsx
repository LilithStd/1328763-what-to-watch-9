import {GenresList} from '../genres-list/genres-list';
import {ShowMoreButton} from '../show-more-button/show-more-button';
import {FilmList} from '../film-list/film-list';
import {FilmTypes} from '../../types/types';

type CatalogProps = {
  films: FilmTypes[]
}

function Catalog({films}: CatalogProps) {
  return(
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <FilmList films = {films}/>
      <ShowMoreButton/>
    </section>
  );
}

export {Catalog};
