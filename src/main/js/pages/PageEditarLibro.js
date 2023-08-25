const React = require('react');
const { Link, useParams } = require('react-router-dom');

const client = require('../client');
const { useState, useEffect } = require('react');

function PageEditarLibro() {

    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [precio, setPrecio] = useState(0);
    const [autor, setAutor] = useState("");

    // getting id param from route
    let { id } = useParams();

    useEffect(() => {
        client({ method: 'GET', path: '/api/libros/' + id }).done(response => {
            setTitulo(response.entity.titulo);
            setGenero(response.entity.genero);
            setPrecio(response.entity.precio);
            setAutor(response.entity.autor);
        });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/libros/' + id,
            entity: {
                titulo,
                precio,
                autor,
                genero
            },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <div className='container my-5'>
            <h1>Editar libro</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="titulo">Título</label>
                    <input
                        className="form-control"
                        type="text"
                        id="titulo"
                        name="titulo"
                        onChange={e => setTitulo(e.target.value)}
                        value={titulo}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="genero">Género</label>
                    <input
                        className="form-control"
                        type="text"
                        id="genero"
                        name="genero"
                        onChange={e => setGenero(e.target.value)}
                        value={genero}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="precio">Precio</label>
                    <input
                        className="form-control"
                        type="number"
                        id="precio"
                        name="precio"
                        onChange={e => setPrecio(e.target.value)}
                        value={precio}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="autor">Autor</label>
                    <input
                        className="form-control"
                        type="text"
                        id="autor"
                        name="autor"
                        onChange={e => setAutor(e.target.value)}
                        value={autor}
                    />
                </div>
                <input className='btn btn-primary' type="submit" value="Actualizar libro" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </div>
    );
}

module.exports = PageEditarLibro;