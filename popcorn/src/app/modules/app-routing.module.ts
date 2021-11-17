import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPopularListComponent } from '../movies-popular-list/movies-popular-list.component';
import { PeopleDetailComponent } from '../people-detail/people-detail.component';
import { PeoplesPopularComponent } from '../peoples-popular/peoples-popular.component';



const routes: Routes = [
  { path: 'movies-popular',pathMatch: 'full', component: MoviesPopularListComponent },
  { path: 'people-popular',pathMatch: 'full', component: PeoplesPopularComponent },
  { path: 'people-detail/:id',pathMatch: 'full', component: PeopleDetailComponent },
  { path: '',pathMatch: 'full', component: MoviesPopularListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

