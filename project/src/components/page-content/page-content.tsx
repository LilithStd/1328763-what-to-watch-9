import {Footer} from '../footer/footer';
import {Catalog} from '../catalog/catalog';
import {FilmsTypes} from '../../types/types';

type PageContentProps = {
  films: FilmsTypes
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
