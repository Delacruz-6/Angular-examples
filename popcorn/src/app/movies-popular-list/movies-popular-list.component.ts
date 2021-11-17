import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../services/movies-service.service';
import { Movie } from '../interfaces/movies-list.interface';


@Component({
  selector: 'app-movies-popular-list',
  templateUrl: './movies-popular-list.component.html',
  styleUrls: ['./movies-popular-list.component.css']
})
export class MoviesPopularListComponent implements OnInit {

  moviesPopularList: Movie[] | undefined;
  moviesNumberSelected  = '50';

  constructor(private route: ActivatedRoute, private moviesService : MoviesServiceService) { }

  ngOnInit(): void {
    this.getMoviesPopular(100);
  }

  getMoviesPopular(limit: number) {
    this.moviesService.getMoviesPopularList(limit).subscribe( resultado => {
      this.moviesPopularList = resultado.results;
      console.log(resultado);
    });
  }

  getMoviesPopularList(){
    this.moviesService.getMoviesPopularList(parseInt(this.moviesNumberSelected)).subscribe( resultado =>{
      this.moviesPopularList= resultado.results;
      console.log(resultado);
    });
  }


}
