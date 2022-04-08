import {FilmTypes} from '../src/types/types';
import {DEFAULT_GENRE, AuthorizationStatus, MAX_LENGTH_REVIEW, MIN_LENGTH_REVIEW} from '../src/const';

export const getFilmFormatDuration = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time % 60);
  if (hours < 1) {
    return `${minutes}m`;
  }
  return `${hours}h ${minutes}m`;
};

export const getRemainingTime = (runTimeItem: number, currentTimeItem: number) => new Date(((runTimeItem * 60) - currentTimeItem) * 1000).toISOString().substring(11, 19).toString();

export const getRemainingPercent = (runTimeItem: number, currentTimeItem: number) => ((currentTimeItem * 100) / (runTimeItem * 60)).toFixed(3);

export function getTextRating(ratings: number) {
  if (0 <= ratings && ratings < 3) {
    return 'Bad';
  }
  if (3 <= ratings && ratings < 5) {
    return 'Normal';
  }
  if (5 <= ratings && ratings < 8) {
    return 'Good';
  }
  if (8 <= ratings && ratings < 10) {
    return 'Very good';
  }
  if (ratings === 10) {
    return 'Awesome';
  }
}

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const getFilteredFilms = (movies: FilmTypes[], genre: string)  => genre === DEFAULT_GENRE
  ? movies = movies.slice()
  : movies.slice().filter((movie) => movie.genre === genre);

export  const checkValidForm = (formData:{rating: number, reviewText: string}) => {
  if (formData.rating === 0 || (formData.reviewText.length <= MIN_LENGTH_REVIEW || formData.reviewText.length >= MAX_LENGTH_REVIEW)) {
    return true;
  }
  return false;
};

export const addErrorMessage = (element: HTMLInputElement, message: string) => {
  if (message) {
    element.setCustomValidity(message);
    element.style.border = '5px solid red';
    setTimeout((() => element.style.border = ''), 3000);
  } else {
    element.setCustomValidity('');
    element.style.border = '';
  }

  element.reportValidity();
};

export const passwordTemplate = /(?=.*\d)(?=.*[a-z])/i;

export const loginTemplate = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;

export const convertDate = (commentDate: Date): string => {
  const year = commentDate.getFullYear();
  const month = commentDate.toLocaleString('en', { month: 'long' });
  const day = commentDate.getDate();
  return `${month} ${day}, ${year}`;
};
