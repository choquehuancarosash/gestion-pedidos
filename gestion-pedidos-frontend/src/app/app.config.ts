// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Usa tu archivo app.routes.ts

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Proveedor de rutas
  ],
};