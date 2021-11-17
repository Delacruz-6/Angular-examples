export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    first_air_date: string;
    name: string;
    origin_country: string[];
    original_name: string;
}

export interface People {
    adult: boolean;
    gender: number;
    id: number;
    known_for: Movie[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
}

export interface PeoplePopularResponse {
    page: number;
    results: People[];
    total_pages: number;
    total_results: number;
}

export interface PersonResponse {
    adult: boolean;
    also_known_as: any[];
    biography: string;
    birthday: string;
    deathday?: any;
    gender: number;
    homepage?: any;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string;
}
