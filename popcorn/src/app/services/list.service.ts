import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DtoLista, DtoListaResponse, List, ListaPeliculasResponse, ListResponse } from '../interfaces/list.interface';

const DEFAULT_HEADER = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }


  getList(): Observable<ListResponse>{
    return this.http.get<ListResponse>(`${environment.apiBaseUrl}/account/${environment.account_id}/lists?api_key=${environment.apiKey}&session_id=${environment.session_id}`);
  }

  addPeliculaToLista(idLista : string, idPelicula : number){
    return this.http.post<List>(`${environment.apiBaseUrl}/list/${idLista}/add_item?api_key=${environment.apiKey}&session_id=${environment.session_id}`, {media_id: idPelicula});
  }

  getListDetail(id : string): Observable <ListaPeliculasResponse>{
    return this.http.get<ListaPeliculasResponse>(`${environment.apiBaseUrl}/list/${id}?api_key=${environment.apiKey}`);
  }

  createList(lista:DtoLista): Observable<DtoListaResponse>{
    return this.http.post<DtoListaResponse>(`${environment.apiBaseUrl}/list?api_key=${environment.apiKey}&session_id=${environment.session_id}`, lista, DEFAULT_HEADER);

  }
  // Devuelve interface pero se le pasa DTO

}
