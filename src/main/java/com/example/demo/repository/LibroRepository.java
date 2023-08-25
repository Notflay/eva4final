package com.example.demo.repository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entity.Libro;

import org.springframework.data.repository.CrudRepository;

@RepositoryRestResource(collectionResourceRel = "libros", path = "libros")
public interface LibroRepository extends CrudRepository<Libro, Long> {  
}
