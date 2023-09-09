import { onFilterType } from '@/lib';
import { type Movie, type EntryMovie, ProgramTypesEnum } from '@/types';
import { notFound } from 'next/navigation';
import { UiPage } from './components';

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
  return <UiPage movies={movies} />;
}

export default Page;
