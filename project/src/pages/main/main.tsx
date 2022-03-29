import {FilmTypes} from '../../types/types';
import {FilmCard} from '../../components/film-card/film-card';
import {PageContent} from '../../components/page-content/page-content';


type MainPageProps =  {
  filmPromo: FilmTypes
}


function Main({filmPromo}: MainPageProps) {
  return (
    <>
      <FilmCard filmPromo = {filmPromo}/>
      <PageContent/>
    </>
  );
}

export {Main};
