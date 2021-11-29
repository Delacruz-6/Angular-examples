import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignUptDto } from '../components/models/dto/SignOutDto';
import { AuthSignUpResponse } from '../components/models/interfaces/auth.interface';

const AUTH_BASE_URL = 'auth';
const TOKEN_HEADERS = {
  headers: new HttpHeaders({
    'Authentication bearer' !: localStorage.getItem('token')!
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authBaseUrl = `${environment.apiBaseUrl}/${AUTH_BASE_URL}`;

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

  signup(signUpDto: SignUptDto): Observable<AuthSignUpResponse> {
    let requestUrl = `${this.authBaseUrl}/signup`;
    return this.http.post<AuthSignUpResponse>(requestUrl, signUpDto, TOKEN_HEADERS);
  }



}
