// app.routes.ts (ya no un módulo)
import { Routes } from '@angular/router';
import { ClienteListComponent } from './pages/clientes/cliente-list/cliente-list.component';
import { PedidoListComponent } from './pages/pedidos/pedido-list/pedido-list.component';
import { ProductoListComponent } from './pages/productos/producto-list/producto-list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'clientes', component: ClienteListComponent },
  { path: 'pedidos', component: PedidoListComponent },
  { path: 'productos', component: ProductoListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];