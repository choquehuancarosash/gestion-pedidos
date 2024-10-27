import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './pages/clientes/cliente-list/cliente-list.component';
import { PedidoListComponent } from './pages/pedidos/pedido-list/pedido-list.component';
import { ProductoListComponent } from './pages/productos/producto-list/producto-list.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    PedidoListComponent,
    ProductoListComponent,
    HomeComponent, // Declarar HomeComponent
  ],
  imports: [
    BrowserModule, // Solo necesitas BrowserModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap con AppComponent
})
export class AppModule { }
