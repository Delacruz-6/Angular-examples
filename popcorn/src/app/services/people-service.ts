import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People, PeoplePopularResponse, PersonResponse } from '../interfaces/people.popular.interface';

@Injectable({
    providedIn: 'root'
  })
  export class PeopleService {

    constructor(private http: HttpClient) { }

    getPeoplePopularList(limit : number): Observable<PeoplePopularResponse>{
      return this.http.get<PeoplePopularResponse>(`${environment.apiBaseUrl}/person/popular?api_key=${environment.apiKey}&language=${environment.LANG}`);

    }

    getPeople(id: string): Observable<People>{
      return this.http.get<People>(`${environment.apiBaseUrl}/person/${id}?api_key=${environment.apiKey}&language=${environment.LANG}`)
    }


  }
