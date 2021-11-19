import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  constructor(private authService : AuthServiceService,
    private router : Router) { }

  ngOnInit(): void {
    this.authService.getSessionId().subscribe( resp => {
      this.authService.setLocalSessionId(resp.session_id);
      this.router.navigate(['/movies-popular']);
    })
  }

}
