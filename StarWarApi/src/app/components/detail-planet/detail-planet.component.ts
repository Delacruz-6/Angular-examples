import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet, PlanetResponse } from 'src/app/interfaces/planet.interface';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-detail-planet',
  templateUrl: './detail-planet.component.html',
  styleUrls: ['./detail-planet.component.css']
})
export class DetailPlanetComponent implements OnInit {
  planetId !: string;
  planetDetail !: Planet;

  constructor(private Service : PlanetService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros =>{
      this.planetId=parametros['idPlanet'];
      this.Service.getPlanet(this.planetId).subscribe( res=> { this.planetDetail = res; })
    })

  }







}
