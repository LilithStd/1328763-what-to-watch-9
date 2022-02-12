import MainPage from '../main-page/main-page';

type AppProps = {
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number,
}

function App({filmCardTitle,filmCardGenre,filmCardYear}: AppProps){
  return (
    <MainPage
      filmCardTitle = {filmCardTitle}
      filmCardGenre = {filmCardGenre}
      filmCardYear = {filmCardYear}
    />
  );
}

export default App;
