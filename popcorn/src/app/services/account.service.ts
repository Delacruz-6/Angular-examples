import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FavoriteDto, FavoriteResponse, UserResponse } from '../interfaces/account.interfaces';
const DEFAULT_HEADER = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }

  getUser():Observable <UserResponse>{
    return this.http.get<UserResponse>(`${environment.apiBaseUrl}/account?api_key=${environment.apiKey}&session_id=${environment.session_id}`);
  }

  addFavorite(dto : FavoriteDto): Observable<FavoriteResponse>{
    return this.http.post<FavoriteResponse>(`${environment.apiBaseUrl}/account/${environment.account_id}/favorite?api_key=${environment.apiKey}&session_id=${environment.session_id}`, dto, DEFAULT_HEADER)

  }

}
