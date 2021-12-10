import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {  Usuarios } from 'src/app/models/usuario.interface';
import { Observable } from 'rxjs';


const COLLECTION_USERS = 'usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userList!: Observable<Usuarios[]>;



  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore) {
  }

  ngOnInit(): void {

  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(resp => {
      this.firestore.collection(COLLECTION_USERS).doc(resp?.user?.uid)
      .set({ nombre: resp.user?.displayName,
        email: resp.user?.email,
        uid: resp.user?.uid,
        urlFoto: resp.user?.photoURL });
      localStorage.setItem('nombre', resp.user?.displayName? resp.user?.displayName: '');
      localStorage.setItem('urlFoto', resp.user?.photoURL? resp.user?.photoURL: '');
      localStorage.setItem('uid', resp.user?.uid? resp.user?.uid: '');
      localStorage.setItem('email', resp.user?.email? resp.user?.email: '');
    console.log(resp.user)
    });

  }
  logout() {
    this.auth.signOut();
  }

  getUserList() {
    this.userList = this.firestore.collection<Usuarios>(COLLECTION_USERS).valueChanges();
  }

}
