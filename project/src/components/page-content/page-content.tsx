import {Footer} from '../footer/footer';
import {Catalog} from '../catalog/catalog';
import {FilmTypes} from '../../types/types';

type PageContentProps = {
  films: FilmTypes[]
}

function PageContent({films}: PageContentProps) {

  return(
    <div className="page-content">
      <Catalog films = {films}/>
      <Footer />
    </div>
  );
}

export {PageContent};
