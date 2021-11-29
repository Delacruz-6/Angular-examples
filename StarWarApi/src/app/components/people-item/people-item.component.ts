import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent implements OnInit {
  @Input() personInput !: Person;
  personList !: Person[];

  personId !: string;
  imgPersonaje !: string;
  i : number = 0;


  constructor(private peopleService : PeopleService,
              private planetService : PlanetService) { }

  ngOnInit(): void {
    /*
    this.getPersonList();
    //this.personId =this.findPerson(this.personInput.name);
    console.log(this.findPerson(this.personInput.name))
    this.imgPersonaje = Event.arguments.dataset.index;
    this.imgPersonaje = this.peopleService.getImgPerson(Event.arguments.dataset.index);
    console.log(this.imgPersonaje);
    */
    //this.imgPersonaje = this.peopleService.getImgPerson(id);
    this.imgPersonaje= this.peopleService.getImgPerson(this.i+1);
    //this.getImgPerson(this.i);
    console.log(this.imgPersonaje)

    console.log(this.findPerson)
  }

  getplanetId(url : string){
    let numArray = url.split('/');
    return numArray[5];
  }

  getPersonList(){
    this.peopleService.getPeople().subscribe(res =>{
      this.personList= res.results;
    });
  }

  findPerson(): number{
    let index= this.personList?.findIndex(x => x.name === this.personInput.name);
    console.log(index);
    return index;
  }

  getImgPerson(id : number ){
    return this.peopleService.getImgPerson(id);
  }

  /*

  getImgPersons(id : number){
    return  `https://starwars-visualguide.com/assets/img/characters/${this.getPersonId(id.toString)}.jpg`
  }

  getPersonId(url: string | undefined): string {
    if(url) {
      let splitArray = url.split("/");
      return splitArray[4];
    } else {
      return '';
    }
  }
  */



}
