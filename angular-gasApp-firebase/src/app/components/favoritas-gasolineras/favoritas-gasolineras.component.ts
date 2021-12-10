import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaEESSPrecio } from 'src/app/models/gasolinera.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GasolinerasService } from 'src/app/services/gasolineras.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailGasolineraComponent } from 'src/app/dialogs/detail-gasolinera/detail-gasolinera.component';
const COLLECTION_FAVORITES='favorites';


@Component({
  selector: 'app-favoritas-gasolineras',
  templateUrl: './favoritas-gasolineras.component.html',
  styleUrls: ['./favoritas-gasolineras.component.css']
})
export class FavoritasGasolinerasComponent implements OnInit {

  gasolineraList!: Observable<ListaEESSPrecio[]>;

  constructor(private service : GasolinerasService,
    private authService : AuthService,
    private firestore : AngularFirestore,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getGasolinerasList();
  }

  getGasolinerasList() {
    this.gasolineraList = this.firestore.collection<ListaEESSPrecio>(COLLECTION_FAVORITES).valueChanges();
  }

  openGasolineraDetailDialog( ){
    this.dialog.open(DetailGasolineraComponent, {
      height: '660px',
      width: '800px',
      data: { gasolinera: this.gasolineraList }
    });
  }
  deleteFavorite(){

  }

}
