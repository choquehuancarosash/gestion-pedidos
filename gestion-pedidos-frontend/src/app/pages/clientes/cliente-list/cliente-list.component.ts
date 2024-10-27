import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service'; // Ajusta la ruta según tu estructura
import { Cliente } from '../../../models/cliente.model';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe({
      next: (clientes: Cliente[]) => {
        this.clientes = clientes; 
      },
      error: (error) => {
        console.error('Error al obtener los clientes', error);
      }
    });
  }
}