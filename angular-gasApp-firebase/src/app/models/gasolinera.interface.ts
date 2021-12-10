export interface GasolineraResponse {
  Fecha: string
  listaEESSPrecio: ListaEESSPrecio[]
  Nota: string
  ResultadoConsulta: string
}

export interface ListaEESSPrecio {
  cP:                             string;
  direccion:                      string;
  horario:                        string;
  localidad:                      string;
  municipio:                      string;
  precioGasoleoB:                 string;
  precioBioetanol:                string;
  precioGasoleoA:                 string;
  precioGasolina95E10:            string;
  precioGasolina95E5:             string;
  precioGasolina98E5:             string;
  provincia:                      string;
  idMunicipio:                    string;
  idProvincia:                    string;
  idccaa:                         string;
  ideess:                         string;
}

export interface Provincia {
  IDPovincia:                     string;
  IDCCAA:                         string;
  Provincia:                      string;
  CCAA:                           string;
}

export interface Municipio {
  IDMunicipio:                    string;
  IDProvincia:                    string;
  IDCCAA:                         string;
  Municipio:                      string;
  Provincia:                      string;
  CCAA:                           string;
}
