import FilmCard from '../film-card/film-card';
import PageContent from '../page-content/page-content';

type MainPageProps = {
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number,

}

function MainPage(mainPageProps: MainPageProps) {
  return (
    <>
      <FilmCard {...mainPageProps}/>
      <PageContent />
    </>
  );
}

export default MainPage;
