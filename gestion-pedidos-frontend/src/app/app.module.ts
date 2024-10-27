import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { PedidoListComponent } from './pages/pedidos/pedido-list/pedido-list.component';
import { ProductoListComponent } from './pages/productos/producto-list/producto-list.component';
import { HomeComponent } from './pages/home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ClienteListModule } from './pages/clientes/cliente-list/cliente-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PedidoListComponent,
    ProductoListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClienteListModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideHttpClient() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }