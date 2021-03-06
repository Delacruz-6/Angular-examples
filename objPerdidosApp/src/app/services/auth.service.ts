import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public readonly auth: AngularFireAuth) { }

  logout() {
    this.auth.signOut();
    localStorage.removeItem('email');
    localStorage.removeItem('uid');
    localStorage.removeItem('urlFoto');
    localStorage.removeItem('nombre');

  }

    // Sign in with Google
    async googleAuth() {
      const user = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log(user);
    }


    getLocalSessionId() {
      return localStorage.getItem('session_id');
    }

    isLoggedIn(): boolean {
      if(localStorage.getItem('uid') != null){
        return false;
      }else{
        return true;
      }
    }

    setLocalSessionId(sessionId: string) {
      localStorage.setItem('session_id', sessionId);
    }

    setLocalRequestToken(token: string) {
      localStorage.setItem('request_token', token);
    }

    getLocalRequestToken() {
      return localStorage.getItem('request_token');
    }


    getUserAuth(){
      return this.auth.authState;
    }




}
