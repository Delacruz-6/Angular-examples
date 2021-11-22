import { Component, OnInit } from '@angular/core';
import { FavoriteMovie } from 'src/app/interfaces/favorite.interface';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  favoriteLists !: FavoriteMovie[];
  constructor( private favoriteService : FavoriteService) { }

  ngOnInit(): void {
    this.getListFavorites();
  }

  getListFavorites() {
    this.favoriteService.getFavorites().subscribe( res =>{
      this.favoriteLists = res.results;
      console.log(this.favoriteLists);
    })
  }

}
