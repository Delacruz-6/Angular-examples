import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { People } from '../interfaces/people.popular.interface';
import { PeopleService } from '../services/people-service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  person!: People;
  personId !: string;


  constructor(private personService: PeopleService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe(parametro =>{
        this.personId = parametro['id'];
        this.personService.getPeople(this.personId).subscribe( res => {
          this.person= res;
        })
      })
  }

  getPeopleImagenUrl(people: People){
    return `${environment.imageBaseURL}/${people.profile_path}`
  }

}
