import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {

  constructor(private authService : AuthServiceService,
              private route : Router) { }

  ngOnInit(): void {
  }

  doLogin(){
    this.authService.getResquestoken().subscribe( res  => {
      this.authService.setLocalRequestToken(res.request_token);
      window.open(`https://www.themoviedb.org/authenticate/${res.request_token}?redirect_to=http://localhost:4200/loginsuccess`,"_self");
    })
  }

}
