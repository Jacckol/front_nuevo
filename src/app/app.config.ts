import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  // providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
  //providers: [provideRouter(routes),provideHttpClient(withFetch())]
  providers: [provideRouter(routes),provideClientHydration(),importProvidersFrom(BrowserModule),importProvidersFrom(BrowserAnimationsModule)]


};
