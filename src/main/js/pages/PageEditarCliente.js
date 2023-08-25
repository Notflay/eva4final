const React = require('react');
const { Link, useParams } = require('react-router-dom');

const client = require('../client');
const { useState, useEffect } = require('react');

function PageEditarCliente() {
    const [nombre, setNombre] = useState("");
    const [correoElectronico, setCorreo] = useState("");

    // getting id param from route
    let { id } = useParams();

    useEffect(() => {
        client({ method: 'GET', path: '/api/clientes/' + id }).done(response => {
            setNombre(response.entity.nombreCompleto);
            setCorreo(response.entity.correoElectronico)
        });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/clientes/' + id,
            entity: {
                nombreCompleto: nombre,
                correoElectronico
            },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <div className='container my-5'>
            <h1>Editar cliente</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" id="nombre" name="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Correo">Correo</label>
                    <input className="form-control" type="text" id="Correo" name="Correo" onChange={(e) => setCorreo(e.target.value)} value={correoElectronico} />
                </div>
                <input className="btn btn-primary" type="submit" value="Actualizar cliente" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </div>
    );
}

module.exports = PageEditarCliente;