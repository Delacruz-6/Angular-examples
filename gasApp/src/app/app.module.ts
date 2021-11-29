import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { GasolineraListComponent } from './components/gasolinera-list/gasolinera-list.component';
import { GasolineraItemComponent } from './components/gasolinera-item/gasolinera-item.component';
import { GasolineraDetailComponent } from './components/gasolinera-detail/gasolinera-detail.component';
import { FormsModule } from '@angular/forms';
import { MaterialImportsModule } from './modules/material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    GasolineraListComponent,
    GasolineraItemComponent,
    GasolineraDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialImportsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
