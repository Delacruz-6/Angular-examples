import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { ListGasolineraComponent } from '../components/list-gasolinera/list-gasolinera.component';
import { FavoritasGasolinerasComponent } from '../components/favoritas-gasolineras/favoritas-gasolineras.component';
import { ListasGasComponent } from '../components/listas-gas/listas-gas.component';
import { AngularFireAuthGuard, loggedIn } from '@angular/fire/compat/auth-guard';

const loggedInV = () => loggedIn;


const routes: Routes = [
  {path: '', pathMatch: 'full', component: ListGasolineraComponent},
  {path: 'gasolineras', pathMatch: 'full', component: ListGasolineraComponent},
  { path: 'sign-in',pathMatch: 'full', component: SignInComponent },
  { path: 'favoritas',pathMatch: 'full', component: FavoritasGasolinerasComponent, canActivate: [AngularFireAuthGuard] , data: { authGuardPipe: loggedInV } },
  { path: 'listas', pathMatch: 'full', component: ListasGasComponent , canActivate: [AngularFireAuthGuard] , data: { authGuardPipe: loggedInV }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
