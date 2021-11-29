import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolineraListComponent } from '../components/gasolinera-list/gasolinera-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: GasolineraListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
