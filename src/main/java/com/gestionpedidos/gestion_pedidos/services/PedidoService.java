package com.gestionpedidos.gestion_pedidos.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionpedidos.gestion_pedidos.models.Cliente;
import com.gestionpedidos.gestion_pedidos.models.Pedido;
import com.gestionpedidos.gestion_pedidos.models.Producto;
import com.gestionpedidos.gestion_pedidos.repositories.ClienteRepository;
import com.gestionpedidos.gestion_pedidos.repositories.PedidoRepository;
import com.gestionpedidos.gestion_pedidos.repositories.ProductoRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ProductoRepository productoRepository;

    public List<Pedido> listarPedidos() {
        return pedidoRepository.findAll();
    }

    public Pedido obtenerPedido(Long id) {
        return pedidoRepository.findById(id).orElse(null);
    }

    public Pedido crearPedido(Pedido pedido) {
        if (pedido.getCliente() == null || pedido.getCliente().getId() == null) {
            throw new IllegalArgumentException("Cliente no puede ser nulo");
        }

        Cliente cliente = clienteRepository.findById(pedido.getCliente().getId())
                .orElseThrow(
                        () -> new RuntimeException("Cliente no encontrado con id: " + pedido.getCliente().getId()));
        pedido.setCliente(cliente);

        if (pedido.getProductos() == null || pedido.getProductos().isEmpty()) {
            throw new IllegalArgumentException("La lista de productos no puede estar vacía");
        }

        List<Producto> productosCargados = new ArrayList<>();
        for (Producto producto : pedido.getProductos()) {
            if (producto.getId() == null) {
                throw new IllegalArgumentException("Producto no puede ser nulo");
            }

            Producto p = productoRepository.findById(producto.getId())
                    .orElseThrow(() -> new RuntimeException("Producto no encontrado con id: " + producto.getId()));
            productosCargados.add(p);
        }

        pedido.setProductos(productosCargados);

        return pedidoRepository.save(pedido);
    }

    public Pedido actualizarPedido(Long id, Pedido pedidoActualizado) {
        Pedido pedido = obtenerPedido(id);
        if (pedido != null) {
            if (pedidoActualizado.getCliente() != null) {
                pedido.setCliente(pedidoActualizado.getCliente());
            }
            if (pedidoActualizado.getProductos() != null) {
                pedido.setProductos(pedidoActualizado.getProductos());
            }
            return pedidoRepository.save(pedido);
        }
        return null;
    }

    public void eliminarPedido(Long id) {
        pedidoRepository.deleteById(id);
    }
}