import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieResponse } from 'src/app/interfaces/movies-list.interface';
import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { environment } from 'src/environments/environment';

export interface DialogMovieDetailData {
  movieId: number;
}

@Component({
  selector: 'app-dialog-movie-detail',
  templateUrl: './dialog-movie-detail.component.html',
  styleUrls: ['./dialog-movie-detail.component.css']
})
export class DialogMovieDetailComponent implements OnInit {

  movie!: MovieResponse;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogMovieDetailData,
    private movieService: MoviesServiceService) { }
  

  ngOnInit(): void {
    console.log(this.data.movieId);
    this.movieService.getMovie(this.data.movieId).subscribe(movieResult => {
      this.movie = movieResult;
  });
}
getMovieImagenUrl(movie: MovieResponse){
  return `${environment.imageBaseURL}/${movie.poster_path}`
}


}
