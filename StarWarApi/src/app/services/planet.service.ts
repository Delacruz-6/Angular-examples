import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planet, PlanetResponse } from '../interfaces/planet.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private hhtp : HttpClient) { }

  getPlanets():Observable <PlanetResponse>{
    return this.hhtp.get<PlanetResponse>(`${environment.baseUrl}/planets`)
  }

  getPlanet(id : string):Observable <Planet>{
    return this.hhtp.get<Planet>(`${environment.baseUrl}/planets/${id}`)
  }
}
