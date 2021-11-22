export interface FavoriteMovie {
  video: boolean;
  vote_average: number;
  overview: string;
  release_date: string;
  title: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  vote_count: number;
  original_language: string;
  original_title: string;
  poster_path: string;
  popularity: number;
}

export interface FavoriteMovieResponse {
  page: number;
  results: FavoriteMovie[];
  total_pages: number;
  total_results: number;
}
