import { Component, OnInit } from '@angular/core';
import { Planet, PlanetResponse } from 'src/app/interfaces/planet.interface';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-list-planet',
  templateUrl: './list-planet.component.html',
  styleUrls: ['./list-planet.component.css']
})
export class ListPlanetComponent implements OnInit {

  PlanetList !: Planet[];

  constructor(private service : PlanetService) { }


  ngOnInit(): void {
    this.getPlanets();

  }

  getPlanets(): void{
    this.service.getPlanets().subscribe(res =>{
      this.PlanetList= res.results;
    });
  }

}
