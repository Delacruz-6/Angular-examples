import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserResponse } from 'src/app/interfaces/account.interfaces';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-side-menu',
  templateUrl:'./side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  currentPage = 'profile';
  user !: UserResponse;
  constructor(private route: ActivatedRoute,
    private accountService : AccountService) { }

  ngOnInit(): void {
    console.log(this.route.url);
    this.accountService.getUser().subscribe( res =>{
      this.user= res;
    })
  }
}
