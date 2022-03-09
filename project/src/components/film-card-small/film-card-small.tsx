import { Link } from 'react-router-dom';
import {FilmTypes} from '../../types/types';
import {TIMER}  from '../../const';
import {VideoPlayer}  from '../video-player/video-player';


type FilmCardSmallProps = {
  film: FilmTypes
  isActive: boolean
  onHover: (id: number | null) => void
}

function FilmCardSmall({film, isActive, onHover}: FilmCardSmallProps)  {
  const {id, previewImage, name, previewVideoLink} = film;


  return(
    <article className="small-film-card catalog__films-card"  onMouseEnter={() => setTimeout(() => onHover(id), TIMER)} onMouseLeave={() => onHover(null)}>
      <div className="small-film-card__image">
        {
          isActive
            ? <VideoPlayer muted isActive={isActive} src={previewVideoLink} poster={previewImage}/>
            : <img src={previewImage} alt={name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export  {FilmCardSmall};
