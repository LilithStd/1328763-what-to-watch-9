import {FilmTypes, FilmsTypes} from '../../types/types';
import {FilmCard} from '../../components/film-card/film-card';
import {PageContent} from '../../components/page-content/page-content';


type MainPageProps =  {
  films: FilmsTypes
  filmPromo: FilmTypes
}


function Main({filmPromo, films}: MainPageProps) {
  return (
    <>
      <FilmCard filmPromo = {filmPromo}/>
      <PageContent films = {films}/>
    </>
  );
}

export {Main};
