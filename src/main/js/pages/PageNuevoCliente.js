const React = require('react');
const { Link } = require('react-router-dom');

const client = require('../client');
const { useState } = require('react');

const PageNuevoCliente = (props) => {
    const [nombre, setNombre] = useState("");
    const [correoElectronico, setCorreo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/clientes',
            entity: { nombreCompleto: nombre, correoElectronico },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <div className='container my-5'>
            <h1>Nuevo cliente</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" id="nombre" name="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Correo">Correo</label>
                    <input className="form-control" type="text" id="Correo" name="Correo" onChange={(e) => setCorreo(e.target.value)} value={correoElectronico} />
                </div>
                <input className='btn btn-primary' type="submit" value="Nuevo cliente" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </div>
    );
}

module.exports = PageNuevoCliente;