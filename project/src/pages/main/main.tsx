import FilmCard from '../../components/film-card/film-card';
import PageContent from '../../components/page-content/page-content';
import {Movie} from '../../types/types';

type MainPageProps = Movie;


function Main(mainPageProps: MainPageProps) {
  return (
    <>
      <FilmCard {...mainPageProps}/>
      <PageContent />
    </>
  );
}

export default Main;
