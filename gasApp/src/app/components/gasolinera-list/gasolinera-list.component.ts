import { Component, OnInit } from '@angular/core';
import { GasolineraResponse, ListaEESSPrecio, Provincia } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera-list',
  templateUrl: './gasolinera-list.component.html',
  styleUrls: ['./gasolinera-list.component.css']
})
export class GasolineraListComponent implements OnInit {


  provinciaSelected : string = '';
  precioMin : string = '';
  precioMax : string = '';
  provincias !: Provincia[];
  gasolineraList !: ListaEESSPrecio[];
  idProvincia !: string;

  gasolineraListFiltrada !: ListaEESSPrecio[];
  constructor(private service : GasolineraService) { }

  ngOnInit(): void {
    this.service.getGasolineras().subscribe(resp => {
      this.getProvincias();
      this.filterGasolinera();
      this.gasolineraList = this.service.parseAnyToGasolineraListResponse(JSON.stringify(resp));
      //this.gasolineraList= resp;
      console.log(this.gasolineraList);
    });

  }

  filterGasolinera(){
    this.gasolineraListFiltrada = this.gasolineraList;
    //Filtrado por pronvicia
    if(this.idProvincia !== '')
    this.gasolineraListFiltrada = this.gasolineraList?.filter( g => g.idProvincia.includes(this.idProvincia));
    //this.gasolineraListFiltrada = this.gasolineraListFiltrada.find(precioGasoleoA => precioGasoleoA > this.precioMax)
    if(this.precioMin !== '')
    this.gasolineraListFiltrada = this.gasolineraListFiltrada?.filter( g => g.precioGasoleoA > this.precioMin);
    if(this.precioMax !== '')
    this.gasolineraListFiltrada = this.gasolineraListFiltrada?.filter( g => g.precioGasoleoA < this.precioMax);
    console.log(this.idProvincia);
    console.log(this.precioMin);
    console.log(this.precioMax);
    console.log(this.gasolineraListFiltrada);

  }

  getProvincias(){
    this.service.getProvincias().subscribe( res =>{
      this.provincias = res
    })
  }

  formatLabel(value: number) {

    return value + '€';
  }



}
