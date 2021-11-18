import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/interfaces/account.interfaces';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  user !: UserResponse;
  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
    this.accountService.getUser().subscribe( res =>{
      this.user= res;
    })
  }

}
