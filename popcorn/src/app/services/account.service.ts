import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../interfaces/account.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }

  getUser():Observable <UserResponse>{
    return this.http.get<UserResponse>(`
    ${environment.apiBaseUrl}/account?api_key=${environment.apiKey}&session_id=${environment.session_id}`);
  }

}
