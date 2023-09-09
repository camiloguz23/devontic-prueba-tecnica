import { type EntryMovie } from '@/types';

export const onFilterType = (movies: EntryMovie[], filter: string): EntryMovie[] => {
  const filteredMovies = movies
    .filter((item) => item.programType === filter && item.releaseYear >= 2010)
    .sort((itemA, itemB) => itemA.title.localeCompare(itemB.title));

  return filteredMovies.slice(0, 20);
};
