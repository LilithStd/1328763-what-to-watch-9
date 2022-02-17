import FilmCard from '../film-card/film-card';
import PageContent from '../page-content/page-content';
import {Movie} from '../../types/types';

type MainPageProps = Movie;


function MainPage(mainPageProps: MainPageProps) {
  return (
    <>
      <FilmCard {...mainPageProps}/>
      <PageContent />
    </>
  );
}

export default MainPage;
