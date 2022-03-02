import {Footer} from '../../components/footer/footer';
// import {Header} from '../../components/header/header';
import {FilmList} from '../../components/film-list/film-list';
import {Logo} from '../../components/logo/logo';
import { FilmsTypes } from '../../types/types';
import {UserBlock} from '../../components/user-block/user-block';

type MyListProps = {
  films: FilmsTypes
}

function MyList({films}: MyListProps) {
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films = {films}/>
      </section>
      <Footer/>
    </div>

  );
}

export {MyList};
