import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ObjetoPerdidoDto } from '../interfaces/objeto.interface';

@Injectable({
  providedIn: 'root'
})
export class ObjetosPerService {


  listasRef!: AngularFirestoreCollection<ObjetoPerdidoDto>;


  constructor(private firestore: AngularFirestore) {
    let userId = localStorage.getItem('uid');
    this.listasRef = this.firestore.collection(`objetosPerdidos`);
    console.log(this.listasRef)
  }


  getAll(): AngularFirestoreCollection<ObjetoPerdidoDto> {
    console.log(this.listasRef)
    return this.listasRef;
  }


}
