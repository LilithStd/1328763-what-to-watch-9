import {FilmTypes} from '../../types/types';
import {GenreItem}  from '../genre-item/genre-item';
import {DEFAULT_GENRE} from '../../const';

type GenresListProps  = {
  films: FilmTypes[];
}

function GenresList({films}: GenresListProps) {
  const genreList =[DEFAULT_GENRE, ...new Set(films.map((genre) => genre.genre))];
  return(
    <ul className="catalog__genres-list">
      {genreList.map((genre, index) =>  <GenreItem key={`${index + 1}`} genre={genre} />)}
    </ul>
  );
}

export {GenresList};

