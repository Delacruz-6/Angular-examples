import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ObjetoEncontrado, ObjetoEncontradoDto, ObjetoPerdido, ObjetoPerdidoDto } from 'src/app/interfaces/objeto.interface';
import { ObjetosService } from 'src/app/services/objetos.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  address: string = '';
  categorias :string []=['Objetos personales','Llaves y carteras', 'Documentación'];
  //selectedCategoria !:string;

  nObjetoPer = new ObjetoEncontradoDto ();
  nObjetoEnc = new ObjetoPerdidoDto ();


  fundacionDonBoscoLatLng: google.maps.LatLngLiteral = {lat: 37.36133765325532, lng: -5.964321690581096};
  markerOptions: google.maps.MarkerOptions = {
    draggable: true
  };

  constructor(private httpClient: HttpClient, private objService : ObjetosService) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyByNlJfkMKkavCkpc9KMY0Wf5fASr4OOic', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  ngOnInit(): void {

  }

  searchAddress() {
    let addressSplited = this.address.split(',');
    this.fundacionDonBoscoLatLng = {lat: Number(addressSplited[0]), lng: Number(addressSplited[1])};
  }

  updateLocationMarker(event: google.maps.MapMouseEvent) {
    console.log(`${event.latLng?.lat()} , ${event.latLng?.lat()}`);
    this.nObjetoEnc.localizacion=`${event.latLng?.lat()} , ${event.latLng?.lat()}`;
    this.nObjetoPer.localizacion=`${event.latLng?.lat()} , ${event.latLng?.lat()}`;
  }

  addObjetoPerdido(){
    console.log(this.nObjetoPer)
    if(this.nObjetoPer.localizacion ==null){
      this.nObjetoPer.localizacion ='37.361943106116065 , 37.361943106116065'
    }
    if(this.nObjetoPer.descripcion== null){
      this.nObjetoPer.descripcion = 'Sin descripcion'
    }
    if(this.nObjetoPer.categoria== null){
      this.nObjetoPer.categoria = 'Sin categoria'
    }
    this.objService.addObjPerdido(this.nObjetoPer.nombre,this.nObjetoPer.descripcion,this.nObjetoPer.localizacion,this.nObjetoPer.categoria);
  }

  addObjetoEncontrado(){
    console.log(this.nObjetoEnc)
    if(this.nObjetoEnc.localizacion ==null){
      this.nObjetoEnc.localizacion ='37.361943106116065 , 37.361943106116065'
    }
    if(this.nObjetoEnc.descripcion== null){
      this.nObjetoEnc.descripcion = 'Sin descripcion'
    }
    if(this.nObjetoEnc.categoria== null){
      this.nObjetoEnc.categoria = 'Sin categoria'
    }

    this.objService.addObjEncontrado(this.nObjetoEnc.nombre,this.nObjetoEnc.descripcion,this.nObjetoEnc.localizacion,this.nObjetoEnc.categoria);
  }

}
