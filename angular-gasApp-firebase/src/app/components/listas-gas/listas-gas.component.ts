import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ListaDeGasolinerasDto } from 'src/app/models/listGasolinera.interface';
import { GasolinerasService } from 'src/app/services/gasolineras.service';

import { ListasFirabaseService } from 'src/app/services/listas-firabase.service';


@Component({
  selector: 'app-listas-gas',
  templateUrl: './listas-gas.component.html',
  styleUrls: ['./listas-gas.component.css']
})
export class ListasGasComponent implements OnInit {
  listasList!: ListaDeGasolinerasDto[];

  constructor(private listasFirebaseService: ListasFirabaseService,
    private service : GasolinerasService) { }

  ngOnInit(): void {
    this.getAllLists();
    console.log(this.getAllLists())
  }

  getAllLists(): void {
    this.listasFirebaseService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.listasList = data;
    });
  }

  deletePlaylist(lista : ListaDeGasolinerasDto){
    let idLista:string = `${lista.id}`;
    this.service.deletePlaylist(idLista);
  }

}
