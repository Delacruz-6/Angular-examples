import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DialogMovieAddComponent } from '../dialogs/dialog-movie-add/dialog-movie-add.component';
import { DialogMovieDetailComponent } from '../dialogs/dialog-movie-detail/dialog-movie-detail.component';
import { List, ListaPeliculasResponse, Pelicula } from '../interfaces/list.interface';
import { Movie } from '../interfaces/movies-list.interface';
import { ListService } from '../services/list.service';
import { MoviesServiceService } from '../services/movies-service.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  id !: string;
  list !: Pelicula[];

  constructor(private listService: ListService,
    private route : ActivatedRoute,
     private moviesService : MoviesServiceService,
     private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametro =>{
      this.id = parametro['idPlaylist'];
      console.log(this.id);
      this.listService.getListDetail(this.id).subscribe( res => {
        this.list= res.items;
      })
    })
  }

  getMovieImagenUrl(movie: Movie){
    return `${environment.imageBaseURL}/${movie?.poster_path}`
  }

  /*
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
      width: '500px',
      data: { movieId: this.movie?.id }
    });
  }

  */

}
