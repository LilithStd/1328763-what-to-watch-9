import MainPage from '../main-page/main-page';

type AppProps = {
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number,
}

function App(appProps: AppProps){
  return (
    <MainPage {...appProps}/>
  );
}

export default App;
