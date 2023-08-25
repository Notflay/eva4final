const React = require("react");
const client = require("../client");
const { Link } = require("react-router-dom");

class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clientes: [], pedidos: [], libros: [] };
  }

  componentDidMount() {
    client({ method: "GET", path: "/api/clientes" }).done((response) => {
      this.setState({ clientes: response.entity._embedded.clientes });
    });
    client({ method: "GET", path: "/api/pedidos" }).done((response) => {
      console.log(response.entity._embedded.pedidos);
      this.setState({ pedidos: response.entity._embedded.pedidos });
    });
    client({ method: "GET", path: "/api/libros" }).done((response) => {
      this.setState({ libros: response.entity._embedded.libros });
    });
  }

  render() {
    return (
      <div className="container my-5" style={{backgroundColor:"#00ff00"}}>
        <h1>Libreria Suisei :D </h1>
        <div className="row">
          <div className="col-8">
            <Titulo entidad="Clientes"  />
            <ClienteList clientes={this.state.clientes} />
            <br />
            <Link to="/clientes/nuevo">Nuevo cliente</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <Titulo entidad="Libros" />
            <LibroList libros={this.state.libros} />
            <br />
            <Link to="/libros/nuevo">Nuevo libros</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <Titulo entidad="Pedidos"  />
            <PedidoList pedidos={this.state.pedidos} />
            <br />
            <Link to="/pedidos/nuevo">Nuevo pedidos</Link>
          </div>
        </div>
      </div>
    );
  }
}

const Titulo = (props) => {
  return (
    <>
      <hr />
      <h2>
        {props.emoji} - {props.entidad}
      </h2>
      <span>Listado de {props.entidad.toLowerCase()}</span>
      <hr />
    </>
  );
};

const ClienteList = (props) => {
  const clientes = props.clientes.map((cliente) => (
    <tr key={cliente._links.self.href}>
      <td scope="row">{cliente.nombreCompleto}</td>
      <td scope="row">{cliente.correoElectronico}</td>
      <td scope="row">
        <Link
          to={
            "/clientes/" +
            cliente._links.self.href.split("/").slice(-1) +
            "/editar"
          }
        >
          Editar
        </Link>
      </td>
    </tr>
  ));
  // ZZZZZZZZZZZZZ
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Correo electronico</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>{clientes}</tbody>
    </table>
  );
};

const PedidoList = (props) => {
  const pedidos = props.pedidos.map((pedido) => (
    <tr key={pedido._links.self.href}>
      <td scope="row">{pedido.cliente.nombreCompleto}</td>
      <td scope="row">{pedido.libro.titulo}</td>
      <td scope="row">{pedido.fechaPedido}</td>
      <td scope="row">
        <Link
          to={
            "/pedidos/" +
            pedido._links.self.href.split("/").slice(-1) +
            "/editar"
          }
        >
          Editar
        </Link>
      </td>
    </tr>
  ));

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Cliente</th>
          <th scope="col">Libro</th>
          <th scope="col">Fecha pedido</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>{pedidos}</tbody>
    </table>
  );
};

const LibroList = (props) => {
  const libros = props.libros.map((libro) => (
    <tr key={libro._links.self.href}>
      <td scope="row">{libro.titulo}</td>
      <td scope="row">{libro.autor}</td>
      <td scope="row">{libro.genero}</td>
      <td scope="row">{"S/. " + libro.precio}</td>
      <td scope="row">
        <Link
          to={
            "/libros/" + libro._links.self.href.split("/").slice(-1) + "/editar"
          }
        >
          Editar
        </Link>
      </td>
    </tr>
  ));

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Titulo</th>
          <th scope="col">Autor</th>
          <th scope="col">Genero</th>
          <th scope="col">Precio</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>{libros}</tbody>
    </table>
  );
};

module.exports = PageHome;
