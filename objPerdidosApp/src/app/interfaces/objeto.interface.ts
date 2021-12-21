export class ObjetoEncontradoDto {
  nombre!: string;
  descripcion!: string;
  latitud!: string;
  longitud!: string;
  localizacion !: string;
  uid!: string;
  categoria !: string;
}

export class ObjetoPerdidoDto {
  nombre!: string;
  descripcion!: string;
  latitud!: string;
  longitud!: string;
  localizacion !: string;
  uid!: string;
  categoria !: string;
}


export interface ObjetoEncontrado {
  nombre: string
  descripcion: string;
  latitud: string;
  longitud: string;
  localizacion : string;
  uid: string;
  categoria : string;
}

export interface ObjetoPerdido {
  nombre: string;
  descripcion: string;
  latitud: string;
  longitud: string;
  localizacion : string;
  uid: string;
  categoria : string;
}
