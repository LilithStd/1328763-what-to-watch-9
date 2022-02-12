// import FilmCardSmall from '../film-card-small/film-card-small';
import Footer from '../footer/footer';
import GenresList from '../genres-list/genres-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import FilmList from '../film-list/film-list';


function PageContent() {

  return(
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList />
        <FilmList />
        <ShowMoreButton/>
      </section>

      <Footer />
    </div>
  );
}

export default PageContent;
