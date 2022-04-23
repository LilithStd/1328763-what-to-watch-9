
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

type CommentReview = {
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
  id: string;
  dataComment: {
    comment: string;
    rating: number;
  }
}


type PostFilmToFavorite = {
  id: number,
  status: number,
  isPromo?: boolean
}

export type {FilmTypes, PostFilmToFavorite, CommentReview, Comment};
