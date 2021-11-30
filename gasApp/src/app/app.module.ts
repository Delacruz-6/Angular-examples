import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { GasolineraListComponent } from './components/gasolinera-list/gasolinera-list.component';
import { GasolineraItemComponent } from './components/gasolinera-item/gasolinera-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportsModule } from './modules/material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogGasolineraDetailComponent } from './dialogs/dialog-gasolinera-detail-component/dialog-gasolinera-detail-component.component';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    GasolineraListComponent,
    GasolineraItemComponent,
    DialogGasolineraDetailComponent
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule

  ],
  entryComponents: [
    DialogGasolineraDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
