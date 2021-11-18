import { Component, OnInit } from '@angular/core';
import { List } from '../interfaces/list.interface';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit {

  Lists !: List[];
  constructor(
    private listService : ListService
  ) { }

  ngOnInit(): void {
    this.getList();
  }


  getList() {
    this.listService.getList().subscribe( resultado => {
      this.Lists = resultado.results;
      console.log(resultado);
    });
  }

}
