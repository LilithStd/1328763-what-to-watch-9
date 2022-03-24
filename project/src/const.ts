export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = 'player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const rating: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export const TIMER = 1000;

export const MORE_LIKE_FILM_COUNT = 4;

export const TabsName = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

export const DEFAULT_GENRE = 'All genres';
export const INITIAL_QUANTITY_FILMS = 8;
