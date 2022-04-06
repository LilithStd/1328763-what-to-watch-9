export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = 'player/:id',
  NotFound = '/404'
}

export enum FilmRoute {
  Films = '/films',
  PromoFilm = '/promo',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Login = '/Login',
  Logout = '/Logout',
  Films = '/films',
  Promo = '/promos',
  Favorite = '/favorite',
  Comments = '/comments/:id',
  NotFound = '/notfound',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
  error = 'ERROR',
}

export const TabsName = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

export const FavoriteStatus = {
  YES: 1,
  NO: 0,
};

export const ReviewSendStatus = {
  INITIAL:'initial',
  SENDING:'sending',
  ERROR:'error',
};

export const rating: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export const MIN_LENGTH_REVIEW = 50;

export const MAX_LENGTH_REVIEW = 400;

export const MAX_COUNT_GENRES_TO_SHOW = 10;

export const TIMER = 1000;

export const MORE_LIKE_FILM_COUNT = 4;

export const TIMEOUT_SHOW_ERROR = 2000;

export const DEFAULT_GENRE = 'All genres';

export const INITIAL_QUANTITY_FILMS = 8;
