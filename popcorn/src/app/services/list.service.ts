import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { List, ListResponse } from '../interfaces/list.interface';
import { Movie } from '../interfaces/movies-list.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }


  getList(): Observable<ListResponse>{
    return this.http.get<ListResponse>(`${environment.apiBaseUrl}/account/${environment.account_id}/lists?api_key=${environment.apiKey}&session_id=${environment.session_id}`);
  }

  addPeliculaToLista(idLista : number, idPelicula : number){
    return this.http.post<List>(`${environment.apiBaseUrl}/list/${idLista}/add_item?api_key=${environment.apiKey}&session_id=${environment.session_id}`, {mediaId: idPelicula});
  }

}
