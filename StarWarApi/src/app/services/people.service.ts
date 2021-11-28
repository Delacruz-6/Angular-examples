import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person, PersonResponse } from '../interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http : HttpClient) { }

  getPeople(): Observable<PersonResponse>{
    return this.http.get<PersonResponse>(`${environment.baseUrl}/people`)
  }

  getPerson(idPerson:string): Observable<Person>{
    return this.http.get<Person>(`${environment.baseUrl}/people/${idPerson}`)
  }

  getImgPerson(id : number){
    return  `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  }
}
