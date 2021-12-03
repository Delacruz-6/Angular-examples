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
    // TODO sign out of offline app
  }

    // Sign in with Google
    async googleAuth() {
      const user = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log(user);
    }



}
