import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    // Provies the routes with hash location (ask TA what this means)
    provideRouter(routes, withHashLocation()),
    // HTTP Requests
    provideHttpClient()
  ]
};
