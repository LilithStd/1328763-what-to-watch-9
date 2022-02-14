import FilmCardSmall from '../film-card-small/film-card-small';

function FilmList() {
  return(
    <div className="catalog__films-list">
      {new Array(20).fill(null).map((film) => <FilmCardSmall key = {film} />)}
    </div>
  );
}

export default FilmList;
