'use client';

import { UiCard, UiFilter } from '@/components';
import { LayoutCards } from '@/layout';
import { onFilterMovie } from '@/lib';
import { movieState } from '@/lib/recoil/recoil';
import { type EntryMovie } from '@/types';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface Prop {
  movies: EntryMovie[];
}

function UiPage({ movies }: Prop): JSX.Element {
  const [movie, setMovie] = useRecoilState(movieState);
  useEffect(() => {
    setMovie(movies);
  }, []);

  return (
    <>
      <UiFilter
        onFilter={(year) => {
          const setFilterMovie = onFilterMovie(movies, year);
          setMovie(setFilterMovie);
        }}
      />
      <LayoutCards>
        {movie.map((item, index) => (
          <UiCard
            image={item.images['Poster Art'].url}
            title={item.title}
            key={item.title}
            index={index}
            description={item.description}
            year={item.releaseYear}
            urlImg
          />
        ))}
      </LayoutCards>
    </>
  );
}

export default UiPage;
