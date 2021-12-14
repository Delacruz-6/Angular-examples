import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs';
import { ListaDeGasolineras, ListaEESSPrecio } from 'src/app/models/gasolinera.interface';
import { ListaDeGasolinerasDto } from 'src/app/models/listGasolinera.interface';

import { GasolinerasService } from 'src/app/services/gasolineras.service';
import { ListasFirabaseService } from 'src/app/services/listas-firabase.service';

export interface DialogGasolineraData {
  gasolinera: ListaEESSPrecio;
}

@Component({
  selector: 'app-listas-gasolineras',
  templateUrl: './listas-gasolineras.component.html',
  styleUrls: ['./listas-gasolineras.component.css']
})
export class ListasGasolinerasComponent implements OnInit {

  listGasolineras!: ListaDeGasolinerasDto[];
  listNueva = new ListaDeGasolinerasDto() ;

  selectedListNombre !: string;
  gasolinera !: ListaEESSPrecio;

  gasolineras !: ListaEESSPrecio[];


  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogGasolineraData,
  private service: GasolinerasService,
  private firabaseService: ListasFirabaseService) { }

  ngOnInit(): void {
    this.getAllLists();
  }

  addGasolineraList(){
    this.service.addGasolineraToList(this.selectedListNombre, this.data.gasolinera);
  }

  addNewList(){
    if(this.listNueva.nombre && this.listNueva.descripcion){
      this.service.SaveListGasolinera(this.listNueva.nombre , this.listNueva.descripcion,this.data.gasolinera);
      this.service.addGasolineraToList(this.data.gasolinera.ideess,this.data.gasolinera)
    }
    else{
      this.service.SaveListGasolinera('Nombre no definido' , 'Descripcion no añadida',this.data.gasolinera);
    }
  }


  getAllLists(): void {
    this.firabaseService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.listGasolineras = data;
    });
  }




}
