import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, People } from '../interfaces/people.popular.interface';
import { PeopleService } from '../services/people-service';

@Component({
  selector: 'app-peoples-popular',
  templateUrl: './peoples-popular.component.html',
  styleUrls: ['./peoples-popular.component.css']
})
export class PeoplesPopularComponent implements OnInit {

  peoplePopularList!: People[] ;
  peopleNumberSelected  = '50';

  constructor(private route: ActivatedRoute, private peopleService : PeopleService) { }

  ngOnInit(): void {
    this.getPeoplePopular(100);
  }

  getPeoplePopular(limit: number) {
    this.peopleService.getPeoplePopularList(limit).subscribe( resultado => {
      this.peoplePopularList = resultado.results;
      console.log(resultado);
    });
  }
  getPeoplePopularList(){
    this.peopleService.getPeoplePopularList(parseInt(this.peopleNumberSelected)).subscribe( resultado =>{
      this.peoplePopularList= resultado.results;
      console.log(resultado);
    });
  }
}