package com.gestionpedidos.gestion_pedidos.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.gestionpedidos.gestion_pedidos.models.Producto;
import com.gestionpedidos.gestion_pedidos.repositories.ProductoRepository;

import java.util.List;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto> listarProductos() {
        return productoRepository.findAll();
    }

    public Producto obtenerProducto(Long id) {
        return productoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado con id: " + id));
    }

    public Producto crearProducto(Producto producto) {
        validarProducto(producto);
        return productoRepository.save(producto);
    }

    public Producto actualizarProducto(Long id, Producto productoActualizado) {
        Producto producto = obtenerProducto(id);
        validarProducto(productoActualizado); // Validación aquí
        producto.setNombre(productoActualizado.getNombre());
        producto.setPrecio(productoActualizado.getPrecio());
        return productoRepository.save(producto);
    }

    public void eliminarProducto(Long id) {
        try {
            productoRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new RuntimeException("No se pudo eliminar el producto con id: " + id + " porque no existe.");
        }
    }

    public boolean existeProducto(Long id) {
        return productoRepository.existsById(id);
    }

    private void validarProducto(Producto producto) {
        if (producto.getNombre() == null || producto.getNombre().isEmpty()) {
            throw new IllegalArgumentException("El campo 'nombre' es requerido.");
        }
        if (producto.getPrecio() == null || producto.getPrecio() <= 0) {
            throw new IllegalArgumentException("El campo 'precio' debe ser mayor que cero.");
        }
    }
}