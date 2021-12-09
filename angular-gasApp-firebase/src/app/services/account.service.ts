import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuario.interface';
import { User } from '../shared/services/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }

  getUser():Observable <Usuarios>{
    return this.http.get<Usuarios>(``)
  }

}
