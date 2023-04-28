export interface Filme {
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  genres: Genres[];
  spoken_languages: Languages[],
  release_date: string
}
interface Genres{
  id: number;
  name: string;
}

interface Languages{
  english_name: string;
  iso_639_1: string;
  name: string;
}