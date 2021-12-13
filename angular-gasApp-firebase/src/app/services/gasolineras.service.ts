import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GasolineraFav, GasolineraResponse, ListaEESSPrecio, Municipio, Provincia } from '../models/gasolinera.interface';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class GasolinerasService {

  constructor(private http : HttpClient,private firestore: AngularFirestore) { }

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
    jsonStringReplaced = jsonStringReplaced.replace(/IDMunicipio/gi, 'idMunicipio');


    let jsonFinal: GasolineraResponse = JSON.parse(jsonStringReplaced);
    return jsonFinal.listaEESSPrecio;
  }

  getGoogleMaps(direccion:String) {
    return window.open(`https://www.google.es/maps/search/${direccion}/`);
  }

  getMunicipios(idMunicipio: string): Observable<Municipio[]>{
    return this.http.get<Municipio[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${idMunicipio}`);
  }

  ///////////////
  //FIREBASE
  //////////////
  addFavorite(gasolinera: ListaEESSPrecio) {
    let userId = localStorage.getItem('uid');
    return this.firestore.collection(`usuarios/${userId}/favorites`).doc(gasolinera.ideess).set({
      id: gasolinera.ideess,
      direccion: gasolinera.direccion,
      localidad: gasolinera.localidad,
      uid: localStorage.getItem('uid')
    });
  }

  getFavorites(): Observable<GasolineraFav[]> {
    let userId = localStorage.getItem('uid');
    return this.firestore.collection<GasolineraFav>(`usuarios/${userId}/favorites`).valueChanges();
  }

  deleteFavorite(docId: string) {
    let userId = localStorage.getItem('uid');
    return this.firestore.collection(`usuarios/${userId}/favorites`).doc(docId).delete();
  }


}
