import { useAppDispatch } from '../../hooks/reduser';
import { changeGenre} from '../../store/actions';

type GenreItemProps = {
  genre: string;
}

function GenreItem({genre}: GenreItemProps)  {
  const dispatch = useAppDispatch();
  const changeGenreHandler = () => dispatch(changeGenre(genre));
  return(
    <li onClick={changeGenreHandler} className="catalog__genres-item  ">
      <a href="/#" className="catalog__genres-link">{genre}</a>
    </li>
  );
}

export {GenreItem};
