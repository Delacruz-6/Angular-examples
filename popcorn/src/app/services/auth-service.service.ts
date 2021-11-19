import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestTokenResponse, SessionResponse } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http : HttpClient) { }

  getLocalSessionId() {
    return localStorage.getItem('session_id');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('session_id') != null;
  }

  setLocalSessionId(sessionId: string) {
    localStorage.setItem('session_id', sessionId);
  }

  setLocalRequestToken(token: string) {
    localStorage.setItem('request_token', token);
  }

  getLocalRequestToken() {
    return localStorage.getItem('request_token');
  }

  getResquestoken(): Observable <RequestTokenResponse>{
    return this.http.get<RequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`)
  }

  getSessionId(): Observable <SessionResponse>{
    return this.http.post<SessionResponse>(`${environment.apiBaseUrl}/authentication/session/new?api_key=${environment.apiKey}`, {request_token: this.getLocalRequestToken()})
  }

}
