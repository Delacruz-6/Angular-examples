import { Component, Input, OnInit } from '@angular/core';
import { ListaEESSPrecio } from 'src/app/interfaces/gasolinera.interface';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {
  @Input() gasolineraInput !: ListaEESSPrecio;
  constructor() { }

  ngOnInit(): void {
  }

}
