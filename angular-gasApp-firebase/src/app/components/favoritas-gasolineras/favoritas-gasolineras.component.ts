import { Component, OnInit } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { GasolineraFav, ListaEESSPrecio } from 'src/app/models/gasolinera.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GasolinerasService } from 'src/app/services/gasolineras.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailGasolineraComponent } from 'src/app/dialogs/detail-gasolinera/detail-gasolinera.component';
import { LoginComponent } from 'src/app/dialogs/login/login.component';


@Component({
  selector: 'app-favoritas-gasolineras',
  templateUrl: './favoritas-gasolineras.component.html',
  styleUrls: ['./favoritas-gasolineras.component.css']
})
export class FavoritasGasolinerasComponent implements OnInit {

  gasolineraList : GasolineraFav[] = [];


  constructor(private service : GasolinerasService,
    private authService : AuthService,
    private firestore : AngularFirestore,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getGasolinerasList();
  }

  getGasolinerasList() {
    this.service.getFavorites().subscribe(resp =>  {
      this.gasolineraList = resp;
    });  }

  openGasolineraDetailDialog(gasolineraFav :GasolineraFav ){
    this.dialog.open(DetailGasolineraComponent, {
      height: '660px',
      width: '800px',
      data: { gasolinera: gasolineraFav }
    });
  }


  openLoginDialog(){
    this.dialog.open(LoginComponent,{
      width: '400px',
      disableClose: true,

    })
  }

  deleteFavorite(gasolinera :GasolineraFav ){
    if( localStorage.getItem('uid') != null){
      this.service.deleteFavorite(gasolinera.id).then(resp => {
        alert(`eliminada la gasolinera ${gasolinera.rotulo}`);
      });
    }else{
      this.openLoginDialog();
    }
  }
}
