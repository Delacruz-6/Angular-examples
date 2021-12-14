import { GasolineraFav } from "./gasolinera.interface";

export class  ListaDeGasolinerasDto{
  id?:                              string;
  nombre?:                         string;
  descripcion?:                    string;
  GasolineraFav?:                  GasolineraFav[]
}
