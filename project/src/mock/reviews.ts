import { CommentReview } from '../types/types';

export const commentMock: CommentReview[] = [
  {
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    date: 'Wed Feb 23 2022 00:26:48 GMT+0200',
    id: 1,
    rating: 8.9,
    user: {
      id: 35,
      name: 'Kate Muir',
    },
  },
  {
    comment: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    date: 'Wed Nov 18 2015 02:26:48 GMT+0200',
    id: 2,
    rating: 8.0,
    user: {
      id: 36,
      name: 'Bill Goodykoontz',
    },
  },
  {
    comment: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
    date: 'Wed Feb 25 2015 15:36:48 GMT+0200',
    id: 3,
    rating: 8.0,
    user: {
      id: 37,
      name: 'Amanda Greever',
    },
  },
  {
    comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    date: 'Wed Dec 20 2016 00:26:48 GMT+0200',
    id: 4,
    rating: 7.2,
    user: {
      id: 38,
      name: 'Matthew Lickona',
    },
  },
];
