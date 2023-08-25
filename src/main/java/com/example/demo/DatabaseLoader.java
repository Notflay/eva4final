package com.example.demo;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.demo.entity.Cliente;
import com.example.demo.entity.Libro;
import com.example.demo.entity.Pedido;
import com.example.demo.repository.ClienteRepository;
import com.example.demo.repository.LibroRepository;
import com.example.demo.repository.PedidoRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {

	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private PedidoRepository pedidoRepository;

	@Autowired
	private LibroRepository libroRepository;

	@Override
	public void run(String... strings) throws Exception {
		Cliente cliente6 = new Cliente("Laura Martínez", "laura@example.com");
		Cliente cliente7 = new Cliente("Pedro Gómez", "pedro@example.com");
		Cliente cliente8 = new Cliente("Sofía Fernández", "sofia@example.com");
		Cliente cliente9 = new Cliente("Diego Ramirez", "diego@example.com");
		Cliente cliente10 = new Cliente("Valeria Lopez", "valeria@example.com");
		Cliente cliente11 = new Cliente("Andrés Torres", "andres@example.com");
		Cliente cliente12 = new Cliente("Marina Herrera", "marina@example.com");
		Cliente cliente13 = new Cliente("Roberto Sánchez", "roberto@example.com");
		Cliente cliente14 = new Cliente("Carolina Martínez", "carolina@example.com");
		Cliente cliente15 = new Cliente("Fernando García", "fernando@example.com");

		this.clienteRepository.save(cliente6);
		this.clienteRepository.save(cliente7);
		this.clienteRepository.save(cliente8);
		this.clienteRepository.save(cliente9);
		this.clienteRepository.save(cliente10);
		this.clienteRepository.save(cliente11);
		this.clienteRepository.save(cliente12);
		this.clienteRepository.save(cliente13);
		this.clienteRepository.save(cliente14);
		this.clienteRepository.save(cliente15);

		Libro libro6 = new Libro("El Alquimista", "Paulo Coelho", "Ficción", 15.99);
		Libro libro7 = new Libro("La sombra del viento", "Carlos Ruiz Zafón", "Misterio", 18.99);
		Libro libro8 = new Libro("Los juegos del hambre", "Suzanne Collins", "Aventura", 14.99);
		Libro libro9 = new Libro("El código Da Vinci", "Dan Brown", "Suspense", 17.99);
		Libro libro10 = new Libro("Cien años de soledad", "Gabriel García Márquez", "Realismo mágico", 21.99);
		Libro libro11 = new Libro("Crónica de una muerte anunciada", "Gabriel García Márquez", "Novela corta", 13.99);
		Libro libro12 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", "Clásico", 24.99);
		Libro libro13 = new Libro("Harry Potter y la cámara secreta", "J.K. Rowling", "Fantasía", 19.99);
		Libro libro14 = new Libro("1984", "George Orwell", "Distopía", 16.99);
		Libro libro15 = new Libro("Orgullo y prejuicio", "Jane Austen", "Romance", 12.99);


		this.libroRepository.save(libro6);
		this.libroRepository.save(libro7);
		this.libroRepository.save(libro8);
		this.libroRepository.save(libro9);
		this.libroRepository.save(libro10);
		this.libroRepository.save(libro11);
		this.libroRepository.save(libro12);
		this.libroRepository.save(libro13);
		this.libroRepository.save(libro14);
		this.libroRepository.save(libro15);

		Pedido pedido1 = new Pedido(cliente6, libro6, LocalDate.now());
        Pedido pedido2 = new Pedido(cliente7, libro7, LocalDate.now());
        Pedido pedido3 = new Pedido(cliente8, libro8, LocalDate.now());
        Pedido pedido4 = new Pedido(cliente9, libro9, LocalDate.now());
        Pedido pedido5 = new Pedido(cliente10, libro10, LocalDate.now());
		Pedido pedido6 = new Pedido(cliente11, libro11, LocalDate.now());
		Pedido pedido7 = new Pedido(cliente12, libro12, LocalDate.now());
		Pedido pedido8 = new Pedido(cliente13, libro13, LocalDate.now());
		Pedido pedido9 = new Pedido(cliente14, libro14, LocalDate.now());
		Pedido pedido10 = new Pedido(cliente15, libro15, LocalDate.now());

		this.pedidoRepository.save(pedido1);
		this.pedidoRepository.save(pedido2);
		this.pedidoRepository.save(pedido3);
		this.pedidoRepository.save(pedido4);
		this.pedidoRepository.save(pedido5);
		this.pedidoRepository.save(pedido6);
		this.pedidoRepository.save(pedido7);
		this.pedidoRepository.save(pedido8);
		this.pedidoRepository.save(pedido9);
		this.pedidoRepository.save(pedido10);
	}
}