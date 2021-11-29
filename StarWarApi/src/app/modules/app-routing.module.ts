import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPlanetComponent } from '../components/detail-planet/detail-planet.component';
import { ListPlanetComponent } from '../components/list-planet/list-planet.component';
import { PeopleDetailComponent } from '../components/people-detail/people-detail.component';
import { PeopleListComponent } from '../components/people-list/people-list.component';

const routes: Routes = [
  {path: 'planets',pathMatch: 'full', component:ListPlanetComponent},
  {path: 'planets/:idPlanet',pathMatch: 'full', component:DetailPlanetComponent},
  {path: 'people', pathMatch: 'full', component: PeopleListComponent},
  {path: 'people/:idPerson', pathMatch: 'full', component: PeopleDetailComponent},
  { path: '', pathMatch: 'full', redirectTo: '/people' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
