import { atom, selector } from 'recoil';

export const countState = atom({
  key: 'movie',
  default: []
});

export const incrementCount = selector({
  key: 'incrementCount',
  get: ({ get }) => get(countState),
  set: ({ set }) => {
    set(countState, (currCount) => currCount);
  }
});

export const decrementCount = selector({
  key: 'decrementCount',
  get: ({ get }) => get(countState),
  set: ({ set }) => {
    set(countState, (currCount) => currCount);
  }
});
