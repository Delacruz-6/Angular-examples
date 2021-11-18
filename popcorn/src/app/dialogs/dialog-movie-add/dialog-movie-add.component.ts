import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from 'src/app/interfaces/list.interface';
import { MovieResponse } from 'src/app/interfaces/movies-list.interface';
import { ListService } from 'src/app/services/list.service';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

export interface DialogMovieAddData {
  movieId: number;
}

@Component({
  selector: 'app-dialog-movie-add',
  templateUrl: './dialog-movie-add.component.html',
  styleUrls: ['./dialog-movie-add.component.css']
})
export class DialogMovieAddComponent implements OnInit {

  movie!: MovieResponse;
  list !: List;
  Lists !: List[];
  selectedListId!: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogMovieAddData,
    private movieService: MoviesServiceService,
    private listService: ListService) { }

  ngOnInit(): void {
    this.getMovieId();
    this.getList();

  }

  getMovieId(){
    this.movieService.getMovie(this.data.movieId).subscribe(movieResult => {
      this.movie = movieResult;
    });
  }

  getList() {
    this.listService.getList().subscribe( resultado => {
      this.Lists = resultado.results;
      console.log(resultado);
    });
  }


  onSubmit(){
    this.listService.addPeliculaToLista(this.data.movieId, this.selectedListId).subscribe();
    window.location.reload();
  }




}
