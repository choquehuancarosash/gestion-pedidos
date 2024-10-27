import { Cliente } from './cliente.model';
import { Producto } from './producto.model';

export interface Pedido {
    id: number;
    cliente: Cliente;
    productos: Producto[];
    total?: number;
}