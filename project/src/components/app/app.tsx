import MainPage from '../main-page/main-page';
import {Film} from '../../types/types';

type AppProps = Film;

function App(appProps: AppProps){
  return (
    <MainPage {...appProps}/>
  );
}

export default App;
