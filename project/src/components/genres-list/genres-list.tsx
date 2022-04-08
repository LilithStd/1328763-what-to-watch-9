import {FilmTypes} from '../../types/types';
import {GenreItem}  from '../genre-item/genre-item';
import {DEFAULT_GENRE, MAX_COUNT_GENRES_TO_SHOW} from '../../const';

type GenresListProps  = {
  films: FilmTypes[];
}

function GenresList({films}: GenresListProps) {
  const genreList =[DEFAULT_GENRE, ...new Set(films.map((genre) => genre.genre))];
  const genreListToShow = genreList.slice(0, MAX_COUNT_GENRES_TO_SHOW);
  return(
    <ul className="catalog__genres-list">
      {genreListToShow.map((genre) =>  <GenreItem key={genre} genre={genre}/>)}
    </ul>
  );
}

export {GenresList};

