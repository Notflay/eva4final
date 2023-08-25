const React = require('react');
const { Link, useParams } = require('react-router-dom');

const client = require('../client');
import { useState, useEffect } from 'react';

const PageEditarPedido = (props) => {
    const [clientes, setClientes] = useState([]);
    const [libros, setLibros] = useState([]);
    const [libroId, setLibroId] = useState("");
    const [clienteId, setClienteId] = useState("");
    const [loaded, setLoaded] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        client({ method: 'GET', path: '/api/pedidos/' + id }).done(response => {
            console.log(response);
            setLibroId(response.entity.libro.id);
            setClienteId(response.entity.cliente.id);
            setLoaded(true);
        });
        client({ method: 'GET', path: '/api/clientes' }).done(response => {
            setClientes(response.entity._embedded.clientes);
        });
        client({ method: 'GET', path: '/api/libros' }).done(response => {
            setLibros(response.entity._embedded.libros);
        });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/actualizar_pedido/' + id,
            entity: {
                nuevoClienteId: clienteId,
                nuevoLibroId: libroId
            },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <div className='container my-5'>
            { loaded ? (<><h1>Editar pedido</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="cliente">Cliente</label>
                    <select
                        className="form-control"
                        type="text"
                        id="cliente"
                        name="cliente"
                        onChange={e => setClienteId(e.target.value)}
                        value={clienteId}
                    >
                        <option value="">Seleccione un cliente</option>
                        {clientes.map((cliente) => (
                            <option key={cliente._links.self.href} value={cliente._links.self.href.split("/").slice(-1)}>{cliente.nombreCompleto}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="libro">Libro</label>
                    <select
                        className="form-control"
                        type="text"
                        id="libro"
                        name="libro"
                        onChange={e => setLibroId(e.target.value)}
                        value={libroId}
                    >
                        <option value="">Seleccione un libro</option>
                        {libros.map((libro) => (
                            <option key={libro._links.self.href} value={libro._links.self.href.split("/").slice(-1)}>{libro.titulo}</option>
                        ))}
                    </select>
                </div>
                <input className='btn btn-primary' type="submit" value="Actualizar pedido" />
            </form>
            <hr />
            <Link to="/">Volver</Link></>) : "Cargando..."}
            
        </div>
    );
};

export default PageEditarPedido;