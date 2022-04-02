
type MovieProps = {
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number,
}

type FilmTypes = {
  id: number
  name: string
  posterImage: string
  previewImage: string
  backgroundImage: string
  backgroundColor: string
  videoLink: string
  previewVideoLink: string
  description: string
  rating: number
  scoresCount: number
  director: string
  starring: string[]
  runTime: number
  genre: string
  released: number
  isFavorite: boolean
}

type CommentProps = {
    comment: string
    date: string
    id: number
    rating: number
    user: {
      id: number
      name: string
    }
}

type Comment = {
  id: number;
  dataComment :{
    comment: string;
    rating: number;
  };
}

type StatusFilmData = {
  status: number;
  id: number;
  isPromo: boolean;
};

export type {MovieProps, FilmTypes, CommentProps, Comment, StatusFilmData};
