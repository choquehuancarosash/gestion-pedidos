import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { ClienteListComponent } from './cliente-list.component'; // Importa el componente ClienteListComponent

@NgModule({
  declarations: [
    ClienteListComponent // Declara el componente ClienteListComponent
  ],
  imports: [
    CommonModule // Importa CommonModule para habilitar las directivas *ngFor y *ngIf
  ],
  exports: [
    ClienteListComponent // Exporta el componente si lo necesitas en otros módulos
  ]
})
export class ClienteListModule { }