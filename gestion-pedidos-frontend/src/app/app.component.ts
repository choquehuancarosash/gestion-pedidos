import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet, Router } from '@angular/router';
import { Cliente } from './models/cliente.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-pedidos-frontend';
  activeTabIndex: number = 0;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.syncActiveTab();
    });
  }

  clientes: Cliente[] = [
    { id: 1, nombre: 'Cliente A', email: 'clienteA@example.com' },
    { id: 2, nombre: 'Cliente B', email: 'clienteB@example.com' },
    { id: 3, nombre: 'Cliente C', email: 'clienteC@example.com' }
  ];

  syncActiveTab() {
    const currentRoute = this.router.url;
    if (currentRoute.includes('/clientes')) {
      this.activeTabIndex = 0; // Clientes
    } else if (currentRoute.includes('/productos')) {
      this.activeTabIndex = 1; // Productos
    } else if (currentRoute.includes('/pedidos')) {
      this.activeTabIndex = 2; // Pedidos
    }
  }

  onTabChange(event: any) {
    this.activeTabIndex = event.index;
    switch (event.index) {
      case 0:
        this.router.navigate(['/clientes']);
        break;
      case 1:
        this.router.navigate(['/productos']);
        break;
      case 2:
        this.router.navigate(['/pedidos']);
        break;
      default:
        break;
    }
  }
}
