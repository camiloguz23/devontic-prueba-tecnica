import { type EntryMovie } from '@/types';
import { atom, selector } from 'recoil';

export const movieState = atom<EntryMovie[]>({
  key: 'movie',
  default: []
});

export const filterMovie = selector({
  key: 'setMovie',
  get: ({ get }) => get(movieState),
  set: ({ set }, newMovie) => {
    const newMovies = newMovie as EntryMovie[];
    set(movieState, (movie) => [...movie, ...newMovies]);
  }
});
