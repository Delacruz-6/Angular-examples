import { Component, Input, OnInit } from '@angular/core';
import { List } from '../interfaces/list.interface';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css']
})
export class PlaylistItemComponent implements OnInit {
  @Input() listInput !: List;
  constructor() { }

  ngOnInit(): void {
  }

}
