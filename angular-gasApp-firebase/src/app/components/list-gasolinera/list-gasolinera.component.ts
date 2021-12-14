import { Component, OnInit } from '@angular/core';
import { ListaEESSPrecio, Municipio, Provincia } from 'src/app/models/gasolinera.interface';
import { GasolinerasService } from 'src/app/services/gasolineras.service';

@Component({
  selector: 'app-list-gasolinera',
  templateUrl: './list-gasolinera.component.html',
  styleUrls: ['./list-gasolinera.component.css']
})
export class ListGasolineraComponent implements OnInit {


  //provinciaSelected : string = '';
  precioMin : number =0;
  precioMax : number = 2;
  provincias !: Provincia[];
  municipios !: Municipio[];
  gasolineraList !: ListaEESSPrecio[];
  idProvincia: string[] = [];
  idMunicipio: string[] = [];
  listaFullGasolineras  !: ListaEESSPrecio[];

  gasolineraListFiltrada !: ListaEESSPrecio[];
  constructor(private service : GasolinerasService) { }

  ngOnInit(): void {
    this.service.getGasolineras().subscribe(resp => {
      this.getProvincias();
      this.getMunicipios(this.idProvincia[0]);
      this.filterGasolinera();
      this.listaFullGasolineras = this.service.parseAnyToGasolineraListResponse(JSON.stringify(resp));
      this.gasolineraList = this.service.parseAnyToGasolineraListResponse(JSON.stringify(resp));
      this.gasolineraListFiltrada = this.gasolineraList;
      //this.gasolineraListFiltrada.splice(1,5);
      this.quitarFiltro();
      console.log(this.gasolineraList);
    });

  }

  filterGasolinera(){
    console.log(this.idProvincia);

    //Filtrado por pronvicia
    if(this.idProvincia != []) {
      this.gasolineraListFiltrada = this.gasolineraList?.filter( g => this.idProvincia.includes(g.idProvincia));
      this.getMunicipios(this.idProvincia[0]);
    }
    if(this.idMunicipio != []) {
      this.gasolineraListFiltrada = this.gasolineraList?.filter( g => this.idMunicipio.includes(g.idMunicipio));
    }
    console.log(this.gasolineraListFiltrada);

    this.gasolineraListFiltrada = this.gasolineraListFiltrada?.filter( g => (Number.parseFloat(g.precioGasoleoA.replace(',', '.')) <= this.precioMax) && (Number.parseFloat(g.precioGasoleoA.replace(',', '.'))  >= this.precioMin));
    this.gasolineraListFiltrada = this.gasolineraListFiltrada?.filter( g => (Number.parseFloat(g.precioGasolina95E5.replace(',', '.')) <= this.precioMax) && (Number.parseFloat(g.precioGasolina95E5.replace(',', '.'))  >= this.precioMin));

    console.log(this.gasolineraListFiltrada);

  }

  getProvincias(){
    this.service.getProvincias().subscribe( res =>{
      this.provincias = res;
    })
  }

  quitarFiltro(){
    this.gasolineraListFiltrada = this.listaFullGasolineras;
    console.log(this.gasolineraListFiltrada);
  }

  getMunicipios(idProvincia : string){
    this.service.getMunicipios(idProvincia).subscribe( res =>{
      this.municipios= res;
    })
  }
}
