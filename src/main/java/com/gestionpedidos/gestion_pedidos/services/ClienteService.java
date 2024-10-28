package com.gestionpedidos.gestion_pedidos.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
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
        return clienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente no encontrado con id: " + id));
    }

    public Cliente crearCliente(Cliente cliente) {
        validarCliente(cliente);
        return clienteRepository.save(cliente);
    }

    public Cliente actualizarCliente(Long id, Cliente clienteActualizado) {
        Cliente cliente = obtenerCliente(id);
        validarCliente(clienteActualizado);
        cliente.setNombre(clienteActualizado.getNombre());
        cliente.setEmail(clienteActualizado.getEmail());
        return clienteRepository.save(cliente);
    }

    public void eliminarCliente(Long id) {
        try {
            clienteRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new RuntimeException("No se pudo eliminar el cliente con id: " + id + " porque no existe.");
        }
    }

    public boolean existeCliente(Long id) {
        return clienteRepository.existsById(id);
    }

    private void validarCliente(Cliente cliente) {
        if (cliente.getNombre() == null || cliente.getNombre().isEmpty()) {
            throw new RuntimeException("El campo 'nombre' es requerido.");
        }
        if (cliente.getEmail() == null || cliente.getEmail().isEmpty()) {
            throw new RuntimeException("El campo 'email' es requerido.");
        }
    }
}