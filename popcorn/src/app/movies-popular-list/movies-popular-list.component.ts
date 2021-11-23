import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../services/movies-service.service';
import { Movie, Genre } from '../interfaces/movies-list.interface';
import { AuthServiceService } from '../services/auth-service.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-movies-popular-list',
  templateUrl: './movies-popular-list.component.html',
  styleUrls: ['./movies-popular-list.component.css']
})
export class MoviesPopularListComponent implements OnInit {

  moviesPopularList: Movie[] | undefined;
  generos = new FormControl();
  generosLists!: Genre[];
  idGenero!: number;

  moviesListGenero: Movie[] | undefined;

  constructor(private route: ActivatedRoute,
              private moviesService : MoviesServiceService,
              private authService: AuthServiceService) { }

  ngOnInit(): void {
    console.log(this.authService.getSessionId);
    this.getMoviesPopular();
    this.getGeneros();
  }

  getMoviesPopular() {
    this.moviesService.getMoviesPopularList().subscribe( resultado => {
      this.moviesPopularList = resultado.results;
      this.moviesListGenero = resultado.results;
      console.log(resultado);
    });
  }

  getMoviesPopularList(){
    this.moviesService.getMoviesPopularList().subscribe( resultado =>{
      this.moviesPopularList= resultado.results;
      console.log(resultado);
    });
  }

  filterMovies(){
    this.moviesListGenero = this.moviesPopularList;
    this.moviesListGenero = this.moviesPopularList?.filter( movie => movie.genre_ids.includes(this.idGenero))
    console.log(this.idGenero);
  }

  getGeneros(){
    this.moviesService.getGenre().subscribe( res => {
      this.generosLists = res.genres;
    })
  }


}

export class SelectMultipleExample {
  toppings = new FormControl();
  generosLists: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
