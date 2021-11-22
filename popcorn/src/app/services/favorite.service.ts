import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FavoriteResponse } from '../interfaces/account.interfaces';
import { FavoriteMovieResponse } from '../interfaces/favorite.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http : HttpClient) { }

  getFavorites(): Observable <FavoriteMovieResponse>{
    return this.http.get<FavoriteMovieResponse>(`${environment.apiBaseUrl}/account/${environment.account_id}/favorite/movies?api_key=${environment.apiKey}&language=${environment.LANG}&sort_by=created_at.asc&page=1&session_id=${localStorage.getItem('session_id')}`);
  }

  deleteFavorite():Observable<FavoriteResponse>{
    return this.http.delete<FavoriteResponse>(`${environment.apiBaseUrl}/account/${environment.account_id}/favorite?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`)
  }

}
