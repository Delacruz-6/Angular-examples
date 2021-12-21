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

  addObjPerdido(nombre: string, descripcion :string, localizacion: string, longitud: string, latitud: string ,categoria: string) {
    let userId = localStorage.getItem('uid');
    if(userId != null){
      return this.firestore.collection(`objetoPerdido`).doc(nombre).set({
        nombre: nombre,
        categoria: categoria,
        descripcion : descripcion,
        latitud : latitud,
        longitud : longitud,
        localizacion : localizacion,
        uid: localStorage.getItem('uid')
      });
    }
    return ;
  }

  addObjEncontrado(nombre: string, descripcion :string, localizacion: string, longitud: string, latitud: string ,categoria: string) {
    let userId = localStorage.getItem('uid');
    if(userId != null){
      return this.firestore.collection(`objetoEncontrado`).doc(nombre).set({
        nombre: nombre,
        categoria: categoria,
        descripcion : descripcion,
        latitud : latitud,
        longitud : longitud,
        localizacion : localizacion,
        uid: localStorage.getItem('uid')
      });
    }
    return ;
  }


}
