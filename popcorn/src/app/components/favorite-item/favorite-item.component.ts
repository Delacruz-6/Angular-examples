import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMovieDetailComponent } from 'src/app/dialogs/dialog-movie-detail/dialog-movie-detail.component';
import { FavoriteMovie } from 'src/app/interfaces/favorite.interface';
import { Movie } from 'src/app/interfaces/movies-list.interface';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FavoriteDto } from 'src/app/interfaces/account.interfaces';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/app/services/account.service';
import { DialogLoginComponent } from 'src/app/dialogs/dialog-login/dialog-login.component';




@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.css']
})
export class FavoriteItemComponent implements OnInit {

  @Input() moviesFavoritesInput !: FavoriteMovie;

  dtoFavoritos = new FavoriteDto ();
  location: any;
  constructor(private dialog: MatDialog,
    private authService: AuthServiceService,
    private accountService: AccountService) { }

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

  deletePlaylist(){
    this.dtoFavoritos.favorite=false;
    console.log(this.dtoFavoritos.favorite)
    //window.location.reload();
    this.accountService.deleteFavorite().subscribe( res => {
      this.dtoFavoritos.favorite=false;
      console.log(this.dtoFavoritos.favorite)
    })

  }

  addFavorite(mediaId : number ){
    if( this.authService.isLoggedIn()){
      this.dtoFavoritos.media_id=mediaId
      console.log(this.dtoFavoritos.media_id)
      console.log(this.dtoFavoritos)
      this.accountService.addFavorite(this.dtoFavoritos).subscribe();
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
}
