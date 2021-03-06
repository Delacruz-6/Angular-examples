import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogGasolineraDetailComponent } from 'src/app/dialogs/dialog-gasolinera-detail-component/dialog-gasolinera-detail-component.component';
import { ListaEESSPrecio } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {
  @Input() gasolineraInput !: ListaEESSPrecio;

  constructor(private dialog: MatDialog, private service : GasolineraService) { }

  ngOnInit(): void {


  }

  openGasolineraDetailDialog( ){
    this.dialog.open(DialogGasolineraDetailComponent, {
      height: '660px',
      width: '800px',
      data: { gasolinera: this.gasolineraInput }
    });
  }



}
