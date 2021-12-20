import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ObjetoEncontrado, ObjetoEncontradoDto, ObjetoPerdido, ObjetoPerdidoDto } from '../interfaces/objeto.interface';

@Injectable({
  providedIn: 'root'
})
export class ObjetosService {


  listasRefEnc!: AngularFirestoreCollection<ObjetoEncontradoDto>;
  listasRefPer!: AngularFirestoreCollection<ObjetoPerdidoDto>;


  constructor(private firestore: AngularFirestore) {
    let userId = localStorage.getItem('uid');
    this.listasRefEnc = this.firestore.collection(`usuarios/${userId}/objetosEncontrados`);
    this.listasRefEnc = this.firestore.collection(`usuarios/${userId}/objetosPerdidos`);
    console.log(this.listasRefEnc)
  }

  getAllEnc(): AngularFirestoreCollection<ObjetoEncontradoDto> {
    console.log(this.listasRefEnc)
    return this.listasRefEnc;
  }

  getAllPer(): AngularFirestoreCollection<ObjetoPerdidoDto> {
    console.log(this.listasRefPer)
    return this.listasRefPer;
  }

  addObjPerdido(nombre: string, descripcion :string, localizacion: string, categoria: string) {
    let userId = localStorage.getItem('uid');
    if(userId != null){
      return this.firestore.collection(`usuarios/${userId}/objetoPerdido`).doc(nombre).set({
        nombre: nombre,
        categoria: categoria,
        descripcion : descripcion,
        localizacion : localizacion,
        uid: localStorage.getItem('uid')
      });
    }
    return ;
  }

  addObjEncontrado(nombre: string, descripcion :string, localizacion: string, categoria: string) {
    let userId = localStorage.getItem('uid');
    if(userId != null){
      return this.firestore.collection(`usuarios/${userId}/objetoEncontrado`).doc(nombre).set({
        nombre: nombre,
        categoria: categoria,
        descripcion : descripcion,
        localizacion : localizacion,
        uid: localStorage.getItem('uid')
      });
    }
    return ;
  }


}
