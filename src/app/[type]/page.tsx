import { UiCard } from '@/components';
import { LayoutCards } from '@/layout';
import { onFilterType } from '@/lib';
import { type Movie, type EntryMovie, ProgramTypesEnum } from '@/types';
import { notFound } from 'next/navigation';

interface Prop {
  params: { type: string };
}

const getDataMovies = async(type: string): Promise<EntryMovie[]> => {
  const response = await fetch(`${process.env.BASE_URL}/api/data`, { method: 'GET' });
  const data: Movie = (await response.json()) as Movie;
  const movieFilter = onFilterType(data.entries, type);
  return movieFilter;
};

async function Page({ params }: Prop): Promise<JSX.Element> {
  if (params.type !== ProgramTypesEnum.movie && params.type !== ProgramTypesEnum.serie) {
    notFound();
  }
  const movies: EntryMovie[] = await getDataMovies(params.type.toLowerCase());
  return (
    <LayoutCards>
      {movies.map((item, index) => (
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
  );
}

export default Page;
