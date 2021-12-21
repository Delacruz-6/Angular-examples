import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from '../components/formularios/formularios.component';
import { LoginComponent } from '../components/login/login.component';
import { MapaComponent } from '../components/mapa/mapa.component';
import { MisObjetosComponent } from '../components/mis-objetos/mis-objetos.component';
import { AngularFireAuthGuard, loggedIn } from '@angular/fire/compat/auth-guard';

const loggedInV = () => loggedIn;

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  { path: 'formulario',pathMatch: 'full', component: FormulariosComponent, canActivate: [AngularFireAuthGuard] , data: { authGuardPipe: loggedInV } },
  { path: 'mapa',pathMatch: 'full', component: MapaComponent, canActivate: [AngularFireAuthGuard] , data: { authGuardPipe: loggedInV } },
  { path: 'mis-objetos-perdidos',pathMatch: 'full', component: MisObjetosComponent, canActivate: [AngularFireAuthGuard] , data: { authGuardPipe: loggedInV } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
