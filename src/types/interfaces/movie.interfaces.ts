export interface Movie {
  entries: EntryMovie[];
  total: number;
}

export interface EntryMovie {
  description: string;
  images: ImagesMovie;
  programType: string;
  releaseYear: number;
  title: string;
}

export interface ImagesMovie {
  'Poster Art': PosterArt;
}

export interface PosterArt {
  height: number;
  url: string;
  width: number;
}
