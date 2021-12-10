import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { ListGasolineraComponent } from '../components/list-gasolinera/list-gasolinera.component';
import { FavoritasGasolinerasComponent } from '../components/favoritas-gasolineras/favoritas-gasolineras.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: ListGasolineraComponent},
  { path: 'sign-in',pathMatch: 'full', component: SignInComponent },
  { path: 'favoritas',pathMatch: 'full', component: FavoritasGasolinerasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
