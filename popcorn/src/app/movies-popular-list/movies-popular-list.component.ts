import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../services/movies-service.service';
import { Movie } from '../interfaces/movies-list.interface';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-movies-popular-list',
  templateUrl: './movies-popular-list.component.html',
  styleUrls: ['./movies-popular-list.component.css']
})
export class MoviesPopularListComponent implements OnInit {

  moviesPopularList: Movie[] | undefined;


  constructor(private route: ActivatedRoute,
              private moviesService : MoviesServiceService,
              private authService: AuthServiceService) { }

  ngOnInit(): void {
    console.log(this.authService.getSessionId);


    this.getMoviesPopular();
  }

  getMoviesPopular() {
    this.moviesService.getMoviesPopularList().subscribe( resultado => {
      this.moviesPopularList = resultado.results;
      console.log(resultado);
    });
  }

  getMoviesPopularList(){
    this.moviesService.getMoviesPopularList().subscribe( resultado =>{
      this.moviesPopularList= resultado.results;
      console.log(resultado);
    });
  }


}
