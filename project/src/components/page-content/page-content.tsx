import {Footer} from '../footer/footer';
import {Catalog} from '../catalog/catalog';


function PageContent() {

  return(
    <div className="page-content">
      <Catalog/>
      <Footer />
    </div>
  );
}

export {PageContent};
