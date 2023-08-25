package com.example.demo;

public class UpdatePedidoRequest {
    private Long nuevoClienteId;
    private Long nuevoLibroId;

    public Long getNuevoClienteId() {
        return nuevoClienteId;
    }

    public void setNuevoClienteId(Long nuevoClienteId) {
        this.nuevoClienteId = nuevoClienteId;
    }

    public Long getNuevoLibroId() {
        return nuevoLibroId;
    }

    public void setNuevoLibroId(Long nuevoLibroId) {
        this.nuevoLibroId = nuevoLibroId;
    }
}
