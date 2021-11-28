import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { ListPlanetComponent } from './components/list-planet/list-planet.component';
import { ItemPlanetComponent } from './components/item-planet/item-planet.component';
import { DetailPlanetComponent } from './components/detail-planet/detail-planet.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleItemComponent } from './components/people-item/people-item.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListPlanetComponent,
    ItemPlanetComponent,
    DetailPlanetComponent,
    PeopleListComponent,
    PeopleItemComponent,
    PeopleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [Storage],
  bootstrap: [AppComponent]
})
export class AppModule { }
