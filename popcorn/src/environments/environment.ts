// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'https://api.themoviedb.org/3', // URL inmutable de la API
  apiKey: '531a3f7a778e7bae353f18eb81f1e379', // Introducir la API key de tu cuenta
  imageBaseURL: 'https://image.tmdb.org/t/p/w500', //Imagen de las peliculas poster_path
  LANG : 'es-ES', // Lengua
  account_id: '11320748'

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
