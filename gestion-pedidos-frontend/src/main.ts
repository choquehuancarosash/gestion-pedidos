// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';  // Importa appConfig
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)  // Aplica la configuración
  .catch((err) => console.error(err));
