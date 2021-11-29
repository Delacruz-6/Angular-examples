import { Component, OnInit } from '@angular/core';
import { GasolineraResponse, ListaEESSPrecio } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera-list',
  templateUrl: './gasolinera-list.component.html',
  styleUrls: ['./gasolinera-list.component.css']
})
export class GasolineraListComponent implements OnInit {


  provincia !: string;
  precioMin !: string;
  precioMax !: string;
  gasolineraList !: ListaEESSPrecio[];
  constructor(private service : GasolineraService) { }

  ngOnInit(): void {
    this.service.getGasolineras().subscribe(resp => {
      this.gasolineraList = this.service.parseAnyToGasolineraListResponse(resp);
      console.log(this.gasolineraList);
    });
  }

  filterGasolinera(){

  }



}
