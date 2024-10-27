import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './pages/clientes/cliente-list/cliente-list.component';
import { PedidoListComponent } from './pages/pedidos/pedido-list/pedido-list.component';
import { ProductoListComponent } from './pages/productos/producto-list/producto-list.component';
import { HomeComponent } from './pages/home/home.component';
import { MatTabsModule } from '@angular/material/tabs'; // Importa MatTabsModule
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    PedidoListComponent,
    ProductoListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule, // Asegúrate de que este módulo esté importado aquí
    RouterModule.forRoot(routes)  // Agrega RouterModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
