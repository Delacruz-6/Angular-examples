import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GasolineraResponse, ListaEESSPrecio, Provincia } from '../interfaces/gasolinera.interface';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http : HttpClient) { }

  getProvincias(): Observable<Provincia[]>{
    return this.http.get<Provincia[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/Provincias/`)
  }
getGasolineras(): Observable<any>{
  return this.http.get<any>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/`)
}

parseAnyToGasolineraListResponse(jsonString: string) {
  let jsonStringReplaced = jsonString.replace(/Precio Gasoleo A/gi, 'precioGasoleoA');
  jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasoleo B/gi, 'precioGasoleoB');
  jsonStringReplaced = jsonStringReplaced.replace(/Horario/gi, 'horario');
  jsonStringReplaced = jsonStringReplaced.replace(/Localidad/gi, 'localidad');
  jsonStringReplaced = jsonStringReplaced.replace(/Provincia/gi, 'provincia');
  jsonStringReplaced = jsonStringReplaced.replace(/ListaEESSPrecio/gi, 'listaEESSPrecio');
  jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasolina 95 E5/gi, 'precioGasolina95E5');
  jsonStringReplaced = jsonStringReplaced.replace(/Precio Biodiesel/gi, 'precioBiodiesel');
  jsonStringReplaced = jsonStringReplaced.replace(/Dirección/gi, 'direccion');
  jsonStringReplaced = jsonStringReplaced.replace(/Latitud/gi, 'latitud');
  jsonStringReplaced = jsonStringReplaced.replace(/IDEESS/gi, 'ideess');
  jsonStringReplaced = jsonStringReplaced.replace(/IDprovincia/gi, 'idProvincia');

  let jsonFinal: GasolineraResponse = JSON.parse(jsonStringReplaced);
  return jsonFinal.listaEESSPrecio;
}
getGoogleMaps(direccion:String) {
  return window.location.href=(`https://www.google.es/maps/search/${direccion}/`);
}

}
