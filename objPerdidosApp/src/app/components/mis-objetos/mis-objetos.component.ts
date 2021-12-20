import { Component, OnInit } from '@angular/core';
import { ObjetosService } from 'src/app/services/objetos.service';
import { map } from 'rxjs';
import { ObjetoPerdidoDto } from 'src/app/interfaces/objeto.interface';
import { ObjetosPerService } from 'src/app/services/objetos-per.service';

@Component({
  selector: 'app-mis-objetos',
  templateUrl: './mis-objetos.component.html',
  styleUrls: ['./mis-objetos.component.css']
})
export class MisObjetosComponent implements OnInit {

  listasList!: ObjetoPerdidoDto[];

  constructor(private service: ObjetosPerService) { }

  ngOnInit(): void {
    this.getAllLists();
    console.log(this.getAllLists())
  }

  getAllLists(): void {
    this.service.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.listasList = data;
    });
  }

  deleteObjetoPerdido(lista : ObjetoPerdidoDto){
    let idLista:string = `${lista.nombre}`;
    this.service.deleteObjetoPerdido(idLista);
  }

}
