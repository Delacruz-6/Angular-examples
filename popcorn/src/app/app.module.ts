import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/app-routing.module';
import { MoviesPopularListComponent } from './movies-popular-list/movies-popular-list.component';
import { MoviesItemComponent } from './movies-item/movies-item.component';
import { MaterialImportsModule } from './modules/material-imports.module.tst';
import { HttpClientModule } from '@angular/common/http';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PeoplesPopularComponent } from './peoples-popular/peoples-popular.component';
import { PeopleItemComponent } from './people-item/people-item.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { DialogMovieDetailComponent } from './dialogs/dialog-movie-detail/dialog-movie-detail.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogMovieAddComponent } from './dialogs/dialog-movie-add/dialog-movie-add.component';
import { FormsModule } from '@angular/forms';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { DialogLoginComponent } from './dialogs/dialog-login/dialog-login.component';
import { SessionComponent } from './share/session/session.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesPopularListComponent,
    MoviesItemComponent,
    PeoplesPopularComponent,
    PeopleItemComponent,
    SideMenuComponent,
    DialogMovieDetailComponent,
    PeopleDetailComponent,
    DialogMovieAddComponent,
    CuentaComponent,
    PlaylistListComponent,
    PlaylistDetailComponent,
    PlaylistItemComponent,
    DialogLoginComponent,
    SessionComponent,
    FavoriteListComponent,
    FavoriteItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialImportsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#fffafa",
      "backgroundStrokeWidth": 0,
      "backgroundPadding": -11,
      "radius": 25,
      "space": 4,
      "toFixed": 0,
      "unitsFontWeight": "800",
      "outerStrokeWidth": 7,
      "outerStrokeColor": "#e875ff",
      "innerStrokeColor": "#cbcd32",
      "innerStrokeWidth": 1,
      "titleFontSize": "15",
      "titleFontWeight": "600",
      "subtitleFontWeight": "0",
      "subtitle":"Votos",
      "imageHeight": 20,
      "imageWidth": 20,
      "startFromZero": false})
  ],
  entryComponents: [
    DialogMovieDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
