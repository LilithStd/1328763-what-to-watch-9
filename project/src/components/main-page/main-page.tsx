import FilmCard from '../film-card/film-card';
import PageContent from '../page-content/page-content';
import {Film} from '../../types/types';

type MainPageProps = Film;


function MainPage(mainPageProps: MainPageProps) {
  return (
    <>
      <FilmCard {...mainPageProps}/>
      <PageContent />
    </>
  );
}

export default MainPage;
