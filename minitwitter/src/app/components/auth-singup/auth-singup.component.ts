import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { SignUptDto } from '../models/dto/SignOutDto';
import { AuthSignUpResponse } from '../models/interfaces/auth.interface';

@Component({
  selector: 'app-auth-singup',
  templateUrl: './auth-singup.component.html',
  styleUrls: ['./auth-singup.component.css']
})
export class AuthSingupComponent implements OnInit {
  signupDto = new SignUptDto();
  registerResponse !: AuthSignUpResponse;

  form = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });


  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  doSignUp() {
    this.signupDto.email = this.form.get('email')?.value;
    this.signupDto.email = this.form.get('password')?.value;
    this.signupDto.email = this.form.get('username')?.value;
    this.authService.signup(this.signupDto).subscribe(res => {
      this.authService.setLocalRequestToken(res.token);
      window.open(`${environment.apiBaseUrl}/tweets/all`);
    });
  }

}
