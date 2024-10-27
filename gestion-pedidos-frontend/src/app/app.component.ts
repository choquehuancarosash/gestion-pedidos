import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-pedidos-frontend';
  activeTabIndex: number = 0; // Índice del tab activo inicial

  constructor(private router: Router) {
    // Sincroniza el índice de la pestaña con la ruta al cargar el componente
    this.router.events.subscribe(() => {
      this.syncActiveTab();
    });
  }

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
    this.activeTabIndex = event.index; // Actualiza el índice activo
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
