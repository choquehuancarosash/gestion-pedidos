import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../models/cliente.model';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
})
export class ClienteListComponent implements OnInit {
  data: Cliente[] = [];
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.lista();
  }

  lista() {
    this.clienteService.getClientes().subscribe((x) => {
      this.data = x;
    });
  }
}
