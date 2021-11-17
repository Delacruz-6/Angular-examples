import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { People } from '../interfaces/people.popular.interface';
import { PeopleService } from '../services/people-service';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent implements OnInit {
  @Input() people!: People;
  constructor( private peopleService : PeopleService) { }

  ngOnInit(): void {
  }

  getPeopleImagenUrl(people: People){
    return `${environment.imageBaseURL}/${people.profile_path}`
  }

}
