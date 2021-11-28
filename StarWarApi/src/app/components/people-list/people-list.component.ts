import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
//import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

/*
  generoForm = new FormGroup({
    gender: new FormControl('')
  });
*/
selectedGender !: string;
generos : String[] = ['female','male','n/a'];

  //signUpForm!: FormGroup;
  //genderValues = ['Male', ' Female'];


  personList !: Person[];
  personFilterList !: Person[];

  constructor(private service : PeopleService) { }



  ngOnInit(): void {
    this.service.getPeople().subscribe(res =>{
      this.personFilterList=res.results;
      this.personList= res.results;
    });

  }


  filterPeople(){
    this.personFilterList = this.personList;
    this.personFilterList = this.personList?.filter( person => person.gender.includes(this.selectedGender));
    console.log(this.selectedGender);
  }




}
