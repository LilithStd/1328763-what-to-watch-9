import {useParams, Link} from 'react-router-dom';
import {Logo} from  '../../components/logo/logo';
import {UserBlock} from '../../components/user-block/user-block';
import {NotFound} from '../not-found/not-found';
import {AddReviewForm} from '../add-review/add-review-form/add-review-form';
import {getCurrentFilm} from '../../store/film-data/selectors';
import {useAppSelector} from '../../hooks/reduser';

function AddReview()  {
  const params = useParams();

  const currentId = String(params.id);

  const currentFilm = useAppSelector(getCurrentFilm);

  if (!currentFilm) {
    return <NotFound/>;
  }

  const {name, posterImage, backgroundImage} = currentFilm;

  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${currentId}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a href="/#" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width={218} height={327} />
        </div>
      </div>
      <AddReviewForm id = {currentId}/>
    </section>

  );
}

export {AddReview};
