
type MovieProps = {
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number,
}

type FilmProps = {
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

type Comment = {
    comment: string
    date: string
    id: number
    rating: number
    user: {
    id: number
    name: string
    }
}

export type {MovieProps, FilmProps, Comment};
