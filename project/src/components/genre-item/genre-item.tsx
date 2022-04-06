import { useAppDispatch, useAppSelector } from '../../hooks/reduser';
import { changeGenre} from '../../store/film-data/film-data';
import { getGenre } from '../../store/film-data/selectors';

type GenreItemProps = {
  genre: string;
}

function GenreItem({genre}: GenreItemProps)  {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getGenre);

  const changeGenreHandler = () => dispatch(changeGenre(genre));
  return(
    <li onClick={changeGenreHandler} className={`catalog__genres-item  ${currentGenre === genre ? 'catalog__genres-item--active' : ''}`}>
      <a href="/#" className="catalog__genres-link">{genre}</a>
    </li>
  );
}

export {GenreItem};
