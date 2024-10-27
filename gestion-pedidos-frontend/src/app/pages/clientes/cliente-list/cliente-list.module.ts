import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list.component'; 

@NgModule({
  declarations: [
    ClienteListComponent
  ],
  imports: [
    CommonModule 
  ],
  exports: [
    ClienteListComponent
  ]
})
export class ClienteListModule { }