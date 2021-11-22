import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMovieDetailComponent } from 'src/app/dialogs/dialog-movie-detail/dialog-movie-detail.component';
import { FavoriteMovie } from 'src/app/interfaces/favorite.interface';
import { Movie } from 'src/app/interfaces/movies-list.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.css']
})
export class FavoriteItemComponent implements OnInit {

  @Input() moviesFavoritesInput !: FavoriteMovie;
  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  getMovieImagenUrl(movie: Movie){
    return `${environment.imageBaseURL}/${movie?.poster_path}`
  }

  openMovieDetailDialog(id : number |undefined){
    this.dialog.open(DialogMovieDetailComponent, {
      height: '660px',
      width: '800px',
      data: { movieId: this.moviesFavoritesInput?.id }
    });
  }
}
