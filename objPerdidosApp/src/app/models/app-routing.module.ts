import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent } from '../components/formularios/formularios.component';
import { LoginComponent } from '../components/login/login.component';
import { MapaComponent } from '../components/mapa/mapa.component';
import { MisObjetosComponent } from '../components/mis-objetos/mis-objetos.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  { path: 'formulario',pathMatch: 'full', component: FormulariosComponent },
  { path: 'mapa',pathMatch: 'full', component: MapaComponent },
  { path: 'mis-objetos-perdidos',pathMatch: 'full', component: MisObjetosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
