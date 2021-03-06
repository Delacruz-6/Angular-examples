import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';




import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule, USE_DEVICE_LANGUAGE, USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialImportsModule } from './modules/material-imports.module.tst';
import { ListGasolineraComponent } from './components/list-gasolinera/list-gasolinera.component';
import { DetailGasolineraComponent } from './dialogs/detail-gasolinera/detail-gasolinera.component';
import { ItemGasolineraComponent } from './components/item-gasolinera/item-gasolinera.component';
import { LoginComponent } from './dialogs/login/login.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { FavoritasGasolinerasComponent } from './components/favoritas-gasolineras/favoritas-gasolineras.component';
import { ListasGasolinerasComponent } from './dialogs/listas-gasolineras/listas-gasolineras.component';
import { ListasGasComponent } from './components/listas-gas/listas-gas.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ListGasolineraComponent,
    DetailGasolineraComponent,
    ItemGasolineraComponent,
    LoginComponent,
    SideMenuComponent,
    FavoritasGasolinerasComponent,
    ListasGasolinerasComponent,
    ListasGasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialImportsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
