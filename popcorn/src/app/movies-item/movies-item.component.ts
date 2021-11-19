import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DialogLoginComponent } from '../dialogs/dialog-login/dialog-login.component';
import { DialogMovieAddComponent } from '../dialogs/dialog-movie-add/dialog-movie-add.component';
import { DialogMovieDetailComponent } from '../dialogs/dialog-movie-detail/dialog-movie-detail.component';
import { Movie } from '../interfaces/movies-list.interface';
import { AuthServiceService } from '../services/auth-service.service';
import { MoviesServiceService } from '../services/movies-service.service';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {
  @Input() movie!: Movie;
  i: number = 0;

  constructor(private route: ActivatedRoute, private moviesService : MoviesServiceService,
              private dialog: MatDialog,
              private authService: AuthServiceService) { }

  ngOnInit(): void {

  }
  getMovieImagenUrl(movie: Movie){
    return `${environment.imageBaseURL}/${movie?.poster_path}`
  }
  openMovieDetailDialog(id : number |undefined){
    this.dialog.open(DialogMovieDetailComponent, {
      height: '660px',
      width: '800px',
      data: { movieId: this.movie?.id }
    });
  }
  openMovieAddDialog(id : number |undefined){
    this.dialog.open(DialogMovieAddComponent, {
      height: '400px',
      width: '550px',
      data: { movieId: this.movie?.id }
    });
  }

  addFavorite(){
    if( this.authService.isLoggedIn()){

    }else{
      this.openLoginDialog();
    }
  }
  openLoginDialog(){
    this.dialog.open(DialogLoginComponent,{
      width: '400px',
      disableClose: true,

    })
  }
  addToPlayList(id : number |undefined) {
    if(this.authService.isLoggedIn()) {
      this.openMovieAddDialog(id);
    } else {
      this.openLoginDialog();
    }
  }


}

