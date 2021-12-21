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

  constructor( private objService : ObjetosService) { }

  ngOnInit(): void {
    this.getMisObjetosPerdidosList();
    console.log(this.getMisObjetosPerdidosList())
  }

  getMisObjetosPerdidosList() {
    this.objService.getAllPerdidos().subscribe(resp =>  {
      this.listasList = resp;
    });  }

}
