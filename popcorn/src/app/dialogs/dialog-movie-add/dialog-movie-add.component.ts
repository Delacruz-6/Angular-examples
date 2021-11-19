import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { List, NuevaLista } from 'src/app/interfaces/list.interface';
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
  listaNueva !: NuevaLista;
  selectedListId!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogMovieAddData,
    private movieService: MoviesServiceService,
    private listService: ListService,
    private router : Router) { }

  ngOnInit(): void {
    this.getMovieId();
    this.getList();
    console.log(this.selectedListId)
    console.log(this.data.movieId)

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


  addMovieList(){
    this.listService.addPeliculaToLista( this.selectedListId, this.data.movieId).subscribe();
  }

  onSubmit(){
    window.location.reload();
  }

  addNewList(){
    this.listService.createList(this.listaNueva).subscribe();
  }




}
