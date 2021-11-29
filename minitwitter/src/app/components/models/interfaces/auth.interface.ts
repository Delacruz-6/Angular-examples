export interface AuthLoginResponse {
  token: string;
  username: string;
  email: string;
  photoUrl: string;
  created: Date;
  active: boolean;
}


export interface AuthSignUpResponse {
  token: string;
  username: string;
  email: string;
  role: string;
  photoUrl: string;
  created: Date;
  active: boolean;
}


export interface Like {
  id: number;
  username: string;
  descripcion: string;
  website: string;
  photoUrl: string;
  created: Date;
}

export interface User {
  id: number;
  username: string;
  descripcion: string;
  website: string;
  photoUrl: string;
  created: Date;
}

export interface tweet {
  id: number;
  mensaje: string;
  likes: Like[];
  user: User;
}
