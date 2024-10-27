package com.gestionpedidos.gestion_pedidos.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionpedidos.gestion_pedidos.models.Pedido;
import com.gestionpedidos.gestion_pedidos.repositories.PedidoRepository;

import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public List<Pedido> listarPedidos() {
        return pedidoRepository.findAll();
    }

    public Pedido obtenerPedido(Long id) {
        return pedidoRepository.findById(id).orElse(null);
    }

    public Pedido crearPedido(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    public Pedido actualizarPedido(Long id, Pedido pedidoActualizado) {
        Pedido pedido = obtenerPedido(id);
        if (pedido != null) {
            pedido.setCliente(pedidoActualizado.getCliente());
            pedido.setProductos(pedidoActualizado.getProductos());
            pedido.setTotal(pedidoActualizado.getTotal());
            return pedidoRepository.save(pedido);
        }
        return null;
    }

    public void eliminarPedido(Long id) {
        pedidoRepository.deleteById(id);
    }
}