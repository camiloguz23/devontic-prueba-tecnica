import { type EntryMovie } from '@/types';

export const onFilterMovie = (movie: EntryMovie[], year: string): EntryMovie[] => {
  const filtered = movie.filter((item) => `${item.releaseYear}`.includes(year));
  return filtered;
};
