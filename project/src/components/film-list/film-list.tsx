import { useState } from 'react';
import {FilmCardSmall} from '../film-card-small/film-card-small';
import {FilmTypes} from '../../types/types';

type FilmListProps = {
  films: FilmTypes[]
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
