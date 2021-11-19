export interface List {
  description: string;
  favorite_count: number;
  id: number;
  item_count: number;
  iso_639_1: string;
  list_type: string;
  name: string;
  poster_path?: any;
}

export interface ListResponse {
  page: number;
  results: List[];
  total_pages: number;
  total_results: number;
}

export interface ListaPeliculasResponse {
  created_by: string;
  description: string;
  favorite_count: number;
  id: string;
  items: Pelicula[];
  item_count: number;
  iso_639_1: string;
  name: string;
  poster_path?: any;
}

export interface Pelicula {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface DtoList{
  mediaId: number
}


export interface NuevaLista {
  name: string;
  description: string;
  language: string;
}
