export interface GasolineraResponse {
  Fecha: string
  listaEESSPrecio: ListaEESSPrecio[]
  Nota: string
  ResultadoConsulta: string
}

export interface ListaEESSPrecio {
  cP:                             string;
  dirección:                      string;
  horario:                        string;
  localidad:                      string;
  margen:                         string;
  municipio:                      string;
  precioBiodiesel:                string;
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
}
