import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailGasolineraComponent } from 'src/app/dialogs/detail-gasolinera/detail-gasolinera.component';
import { LoginComponent } from 'src/app/dialogs/login/login.component';
import { ListaEESSPrecio } from 'src/app/models/gasolinera.interface';
import { AuthService } from 'src/app/services/auth.service';
import { GasolinerasService } from 'src/app/services/gasolineras.service';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ListasGasolinerasComponent } from 'src/app/dialogs/listas-gasolineras/listas-gasolineras.component';

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

  openPlaylist(){
    this.dialog.open(ListasGasolinerasComponent, {
      height: '660px',
      width: '800px',
      data: { gasolinera: this.gasolineraInput }
    });
  }

  addFavorite(){
    if( localStorage.getItem('email') != null){
      this.service.addFavorite(this.gasolineraInput);
    }else{
      this.openLoginDialog();
    }
  }

  addPlaylist(){
    if( localStorage.getItem('email') != null){
      this.service.addFavorite(this.gasolineraInput);
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


}
