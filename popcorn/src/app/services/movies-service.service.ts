import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieResponse, MoviesPopularResponse } from '../interfaces/movies-list.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http: HttpClient) { }



  getMoviesPopularList(): Observable<MoviesPopularResponse>{
    return this.http.get<MoviesPopularResponse>(`${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}&language=${environment.LANG}`);
  }

  getMovie(id: number): Observable<MovieResponse>{
    return this.http.get<MovieResponse>(`${environment.apiBaseUrl}/movie/${id}?api_key=${environment.apiKey}&language=${environment.LANG}`)
  }



}
