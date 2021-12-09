import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailGasolineraComponent } from 'src/app/dialogs/detail-gasolinera/detail-gasolinera.component';
import { ListaEESSPrecio } from 'src/app/models/gasolinera.interface';
import { GasolinerasService } from 'src/app/services/gasolineras.service';

@Component({
  selector: 'app-item-gasolinera',
  templateUrl: './item-gasolinera.component.html',
  styleUrls: ['./item-gasolinera.component.css']
})
export class ItemGasolineraComponent implements OnInit {

  @Input() gasolineraInput !: ListaEESSPrecio;

  constructor(private dialog: MatDialog, private service : GasolinerasService) { }

  ngOnInit(): void {


  }

  openGasolineraDetailDialog( ){
    this.dialog.open(DetailGasolineraComponent, {
      height: '660px',
      width: '800px',
      data: { gasolinera: this.gasolineraInput }
    });
  }


}
