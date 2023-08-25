package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Cliente;
import com.example.demo.entity.Libro;
import com.example.demo.entity.Pedido;
import com.example.demo.repository.ClienteRepository;
import com.example.demo.repository.LibroRepository;
import com.example.demo.repository.PedidoRepository;

import jakarta.persistence.EntityNotFoundException;

@Controller
public class PedidoController {

    private final PedidoRepository pedidoRepository;
    private final LibroRepository libroRepository;
    private final ClienteRepository clienteRepository;

    @Autowired
    public PedidoController(PedidoRepository pedidoRepository, LibroRepository libroRepository, ClienteRepository clienteRepository) {
        this.pedidoRepository = pedidoRepository;
        this.libroRepository = libroRepository;
        this.clienteRepository = clienteRepository;
    }

    @RequestMapping(path="/actualizar_pedido/{id}", method = RequestMethod.PATCH)
    public ResponseEntity<?> partialUpdatePedido(@PathVariable Long id, @RequestBody UpdatePedidoRequest updatePedidoRequest) {
        Pedido pedido = pedidoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Pedido not found with id: " + id));

        Cliente nuevoCliente = clienteRepository.findById(updatePedidoRequest.getNuevoClienteId())
                .orElseThrow(() -> new EntityNotFoundException("Cliente not found with id: " + updatePedidoRequest.getNuevoClienteId()));

        Libro nuevoLibro = libroRepository.findById(updatePedidoRequest.getNuevoLibroId())
                .orElseThrow(() -> new EntityNotFoundException("Libro not found with id: " + updatePedidoRequest.getNuevoLibroId()));

        pedido.setCliente(nuevoCliente);
        pedido.setLibro(nuevoLibro);

        pedidoRepository.save(pedido);

        return ResponseEntity.ok().build();
    }
}

