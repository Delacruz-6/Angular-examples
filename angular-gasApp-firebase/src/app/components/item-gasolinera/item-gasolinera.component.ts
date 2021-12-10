import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailGasolineraComponent } from 'src/app/dialogs/detail-gasolinera/detail-gasolinera.component';
import { LoginComponent } from 'src/app/dialogs/login/login.component';
import { ListaEESSPrecio } from 'src/app/models/gasolinera.interface';
import { AuthService } from 'src/app/services/auth.service';
import { GasolinerasService } from 'src/app/services/gasolineras.service';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';

const COLLECTION_FAVORITES='favorites';
@Component({
  selector: 'app-item-gasolinera',
  templateUrl: './item-gasolinera.component.html',
  styleUrls: ['./item-gasolinera.component.css']
})
export class ItemGasolineraComponent implements OnInit {

  @Input() gasolineraInput !: ListaEESSPrecio;

  constructor(private dialog: MatDialog,
    private service : GasolinerasService,
    private authService : AuthService,
    private firestore : AngularFirestore) { }

  ngOnInit(): void {


  }

  openGasolineraDetailDialog( ){
    this.dialog.open(DetailGasolineraComponent, {
      height: '660px',
      width: '800px',
      data: { gasolinera: this.gasolineraInput }
    });
  }

  addFavorite(){
    if( localStorage.getItem('email') != null){
      this.firestore.collection(COLLECTION_FAVORITES)
      .doc(this.gasolineraInput.ideess)
      .set({ localidad: this.gasolineraInput.localidad,
        provincia: this.gasolineraInput.provincia,
        uid: this.gasolineraInput.ideess,
        gasoleoA: this.gasolineraInput.precioGasoleoA,
        gasolina95: this.gasolineraInput.precioGasolina95E5,
        direccion: this.gasolineraInput.direccion });
      localStorage.setItem('localidad',this.gasolineraInput.localidad? this.gasolineraInput.localidad: '');
      localStorage.setItem('provincia', this.gasolineraInput.localidad? this.gasolineraInput.localidad: '');
      localStorage.setItem('uid', this.gasolineraInput.ideess? this.gasolineraInput.ideess: '');
      localStorage.setItem('direccion', this.gasolineraInput.direccion? this.gasolineraInput.direccion: '');
      localStorage.setItem('gasoleoA', this.gasolineraInput.precioGasoleoA? this.gasolineraInput.precioGasoleoA: '');
      localStorage.setItem('gasolina95', this.gasolineraInput.precioGasolina95E5? this.gasolineraInput.precioGasolina95E5: '');

    }else{
      this.openLoginDialog();
    }
  }

  openLoginDialog(){
    this.dialog.open(LoginComponent,{
      width: '400px',
      disableClose: true,

    })
  }


  deleteFavorite(){
    if( localStorage.getItem('uid') != null){
      this.firestore.collection(COLLECTION_FAVORITES)
      .doc(this.gasolineraInput.ideess).delete();
    }else{
      this.openLoginDialog();
    }
  }

}
