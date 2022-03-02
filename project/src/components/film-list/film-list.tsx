import { useState } from 'react';
import {FilmCardSmall} from '../film-card-small/film-card-small';
import {FilmsTypes} from '../../types/types';

type FilmListProps = {
  films: FilmsTypes
}

function FilmList({films}: FilmListProps) {
  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

  return(
    <div className="catalog__films-list">
      {films.map((film) => <FilmCardSmall key = {film.id} film = {film} isActive={film.id === activeFilmId} onHover={setActiveFilmId}/>)}
    </div>
  );
}

export {FilmList};
