export interface Gravatar {
  hash: string;
}

export interface Tmdb {
  avatar_path?: any;
}

export interface Avatar {
  gravatar: Gravatar;
  tmdb: Tmdb;
}

export interface UserResponse {
  avatar: Avatar;
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}

export class FavoriteDto {
  media_type!: string;
  media_id!: number;
  favorite!: boolean;
}

export interface FavoriteResponse {
  success: boolean;
  status_code: number;
  status_message: string;
}
