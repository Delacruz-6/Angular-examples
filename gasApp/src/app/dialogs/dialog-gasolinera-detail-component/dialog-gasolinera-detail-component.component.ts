import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GasolineraResponse, ListaEESSPrecio } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';
export interface DialogGasolineraData {
  gasolinera: ListaEESSPrecio;
}

@Component({
  selector: 'app-dialog-gasolinera-detail-component',
  templateUrl: './dialog-gasolinera-detail-component.component.html',
  styleUrls: ['./dialog-gasolinera-detail-component.component.css']
})
export class DialogGasolineraDetailComponent implements OnInit {

  gasolinera : ListaEESSPrecio = this.data.gasolinera;
  gasolineraList !: ListaEESSPrecio[];
  gasolineraListFiltrada !: ListaEESSPrecio[];

  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogGasolineraData,
  private service : GasolineraService) { }

  ngOnInit(): void {

  }

}
