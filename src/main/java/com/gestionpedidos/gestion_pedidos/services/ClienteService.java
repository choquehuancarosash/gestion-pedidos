package com.gestionpedidos.gestion_pedidos.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionpedidos.gestion_pedidos.models.Cliente;
import com.gestionpedidos.gestion_pedidos.repositories.ClienteRepository;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    public Cliente obtenerCliente(Long id) {
        return clienteRepository.findById(id).orElse(null);
    }

    public Cliente crearCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente actualizarCliente(Long id, Cliente clienteActualizado) {
        Cliente cliente = obtenerCliente(id);
        if (cliente != null) {
            cliente.setNombre(clienteActualizado.getNombre());
            cliente.setEmail(clienteActualizado.getEmail());
            return clienteRepository.save(cliente);
        }
        return null;
    }

    public void eliminarCliente(Long id) {
        clienteRepository.deleteById(id);
    }
}