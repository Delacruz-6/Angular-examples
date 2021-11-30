import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GasolineraResponse, ListaEESSPrecio } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';
export interface DialogGasolineraData {
  latitud: string;
}

@Component({
  selector: 'app-dialog-gasolinera-detail-component',
  templateUrl: './dialog-gasolinera-detail-component.component.html',
  styleUrls: ['./dialog-gasolinera-detail-component.component.css']
})
export class DialogGasolineraDetailComponent implements OnInit {

  gasolinera !: ListaEESSPrecio;
  gasolineraList !: ListaEESSPrecio[];
  gasolineraListFiltrada !: ListaEESSPrecio[];

  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogGasolineraData,
  private service : GasolineraService) { }

  ngOnInit(): void {
    this.getGasolinera();
  }

  detailGasolinera(){
    this.gasolineraListFiltrada = this.gasolineraList;
    this.gasolineraListFiltrada = this.gasolineraList?.filter( g => g.latitud.includes(this.data.latitud));
    console.log(this.data.latitud);
    console.log(this.gasolinera)
  }

  getGasolinera(){
    this.service.getGasolineras().subscribe(resp => {
      this.gasolineraList = this.service.parseAnyToGasolineraListResponse(JSON.stringify(resp));
      this.gasolinera = resp.listaEESSPrecio;
      //this.gasolinera= resp.listaEESSPrecio?.filter( g => g.latitud.includes(this.data.latitud));
      console.log(this.data.latitud);
      console.log(this.gasolinera)
      console.log(this.gasolineraList);
    });
  }

}
