import {MovieProps} from '../../types/types';
import {FilmCard} from '../../components/film-card/film-card';
import {PageContent} from '../../components/page-content/page-content';


type MainPageProps = MovieProps;


function Main(mainPageProps: MainPageProps) {
  return (
    <>
      <FilmCard {...mainPageProps}/>
      <PageContent />
    </>
  );
}

export {Main};
