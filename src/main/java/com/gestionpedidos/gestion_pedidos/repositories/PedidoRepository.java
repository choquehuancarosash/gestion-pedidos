package com.gestionpedidos.gestion_pedidos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.gestionpedidos.gestion_pedidos.models.Pedido;

@RepositoryRestResource(collectionResourceRel = "pedidos", path = "pedidos")
@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}