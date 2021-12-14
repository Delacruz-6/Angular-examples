import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ListaDeGasolinerasDto } from '../models/listGasolinera.interface';

@Injectable({
  providedIn: 'root'
})
export class ListasFirabaseService {


  listasRef!: AngularFirestoreCollection<ListaDeGasolinerasDto>;

  constructor(private firestore: AngularFirestore) {
    let userId = localStorage.getItem('uid');
    this.listasRef = this.firestore.collection(`usuarios/${userId}/listas`);
    console.log(this.listasRef)
  }

  getAll(): AngularFirestoreCollection<ListaDeGasolinerasDto> {
    console.log(this.listasRef)
    return this.listasRef;
  }


}
