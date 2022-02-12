import FilmCard from '../film-card/film-card';
import PageContent from '../page-content/page-content';

type MainPageProps = {
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number,

}

function MainPage({filmCardTitle, filmCardGenre, filmCardYear}: MainPageProps) {
  return (
    <>
      <FilmCard
        filmCardTitle={filmCardTitle}
        filmCardGenre={filmCardGenre}
        filmCardYear={filmCardYear}
      />
      <PageContent />
    </>
  );
}

export default MainPage;
