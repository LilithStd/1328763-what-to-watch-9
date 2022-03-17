export const getFilmFormatDuration = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time % 60);
  if (hours < 1) {
    return `${minutes}m`;
  }
  return `${hours}h ${minutes}m`;
};

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
