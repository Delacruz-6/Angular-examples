import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DialogMovieDetailComponent } from '../dialogs/dialog-movie-detail/dialog-movie-detail.component';
import { Movie } from '../interfaces/movies-list.interface';
import { MoviesServiceService } from '../services/movies-service.service';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {
  @Input() movie!: Movie;
  i: number = 0;

  constructor(private route: ActivatedRoute, private moviesService : MoviesServiceService,private dialog: MatDialog) { }

  ngOnInit(): void {
 
  } 
  getMovieImagenUrl(movie: Movie){
    return `${environment.imageBaseURL}/${movie.poster_path}`
  }
  openMovieDetailDialog(id : number |undefined){
    this.dialog.open(DialogMovieDetailComponent, {
      height: '660px',
      width: '800px',
      data: { movieId: this.movie?.id }
    });
  }


}

