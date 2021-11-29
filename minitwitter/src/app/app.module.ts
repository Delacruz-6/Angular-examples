import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthSingupComponent } from './components/auth-singup/auth-singup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MaterialImportsModule } from './modules/material-import-modules';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSingupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
