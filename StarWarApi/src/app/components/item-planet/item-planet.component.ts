import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/app/interfaces/planet.interface';

@Component({
  selector: 'app-item-planet',
  templateUrl: './item-planet.component.html',
  styleUrls: ['./item-planet.component.css']
})
export class ItemPlanetComponent implements OnInit {

  @Input() planetInput !: Planet;
  constructor() { }

  ngOnInit(): void {
  }

  getPlanetId(url : string  ) {
    let splitArray = url.split("/");
    return splitArray[5];
}
/*
  getPlanetId(url: string ): string {
    if(url) {
      let splitArray = url.split("/");
      return splitArray[5];
    } else {
      return '';
    }
  }
*/
  
}
