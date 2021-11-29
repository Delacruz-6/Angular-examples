import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GasolineraResponse } from '../interfaces/gasolinera.interface';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http : HttpClient) { }

getGasolineras(): Observable<any>{
  return this.http.get<any>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/`)
}

parseAnyToGasolineraListResponse(jsonString: string) {
  let jsonStringReplaced = jsonString.toString().replace(/Precio Gasoleo A/gi, 'precioGasoleA');
  jsonStringReplaced = jsonStringReplaced.toString().replace(/ListaEESSPrecio/gi, 'listaEESSPrecio');
  let jsonFinal: GasolineraResponse = JSON.parse(jsonStringReplaced);
  return jsonFinal.listaEESSPrecio;
}

}
