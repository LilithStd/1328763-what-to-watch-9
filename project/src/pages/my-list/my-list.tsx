import {Footer} from '../../components/footer/footer';
import {FilmList} from '../../components/film-list/film-list';
import {Logo} from '../../components/logo/logo';
import {UserBlock} from '../../components/user-block/user-block';
import {useAppSelector} from '../../hooks/reduser';
import {getFavoriteFilms} from '../../store/selectors';

function MyList() {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films = {favoriteFilms}/>
      </section>
      <Footer/>
    </div>

  );
}

export {MyList};
