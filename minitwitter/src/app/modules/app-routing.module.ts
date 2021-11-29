import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSingupComponent } from '../components/auth-singup/auth-singup.component';

const routes: Routes = [
  { path: 'registro',pathMatch: 'full', component: AuthSingupComponent },
  { path: '',pathMatch: 'full', component: AuthSingupComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
