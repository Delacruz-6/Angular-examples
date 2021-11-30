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
  margen:                         string;
  municipio:                      string;
  precioGasoleoB:                 string;
  precioBioetanol:                string;
  precioGasNaturalComprimido:     string;
  precioGasoleoA:                 string;
  precioGasolina95E10:            string;
  precioGasolina95E5:             string;
  precioGasolina98E5:             string;
  precioHidrogeno:                string;
  provincia:                      string;
  idMunicipio:                    string;
  idProvincia:                    string;
  idccaa:                         string;
  ideess:                         string;
  longitud:                       string;
  latitud:                        string;
}

export interface Provincia {
  IDPovincia:                     string;
  IDCCAA:                         string;
  Provincia:                      string;
  CCAA:                           string;
}
