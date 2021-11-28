import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  personDetail !: Person;
  personId !: string;
  imgPersonaje !: string;

  constructor(private service: PeopleService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe( parametros =>{
      this.personId= parametros['idPerson'];
      // Añado la imagen del personaje
      this.imgPersonaje = this.service.getImgPerson(parseInt(this.personId));
      this.service.getPerson(this.personId).subscribe( res =>{
        this.personDetail= res;
        console.log(this.imgPersonaje);
      });
    });
  }


  getplanetId(url : string){
    let numArray = url.split('/');
    return numArray[5];
  }

}
