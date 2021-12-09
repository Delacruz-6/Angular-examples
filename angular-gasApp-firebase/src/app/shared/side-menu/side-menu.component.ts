import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from 'src/app/models/usuario.interface';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';


//import { User } from '../services/user';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  currentPage = 'profile';
  user !: Usuarios;
  constructor(private route: ActivatedRoute,
    private accountService : AccountService,
    private authService : AuthService) { }

  ngOnInit(): void {
    this.authService.getUserAuth().subscribe( resp =>{
      if(resp?.email &&  resp?.displayName && resp?.photoURL !=null){
        this.user.email= resp.email;
        this.user.nombre= resp.displayName;
        this.user.urlFoto= resp.photoURL;

      }
      console.log(this.user)
    })

  }

  loginOut(){
    this.authService.logout();
  }

}
