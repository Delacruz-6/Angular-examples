import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaEESSPrecio } from 'src/app/models/gasolinera.interface';
import { GasolinerasService } from 'src/app/services/gasolineras.service';

export interface DialogGasolineraData {
  gasolinera: ListaEESSPrecio;
}

@Component({
  selector: 'app-detail-gasolinera',
  templateUrl: './detail-gasolinera.component.html',
  styleUrls: ['./detail-gasolinera.component.css']
})
export class DetailGasolineraComponent implements OnInit {

  gasolinera : ListaEESSPrecio = this.data.gasolinera;
  gasolineraList !: ListaEESSPrecio[];
  gasolineraListFiltrada !: ListaEESSPrecio[];

  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogGasolineraData,
  private service : GasolinerasService) { }

  ngOnInit(): void {

  }

  getGoogleMaps(direccion:String){
    this.service.getGoogleMaps(direccion.replace(' ', '+'));
  }

}
