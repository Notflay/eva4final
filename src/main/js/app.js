const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevoCliente = require('./pages/PageNuevoCliente');
const PageEditarLibro = require('./pages/PageEditarLibro');
const PageEditarCliente = require('./pages/PageEditarCliente');
const PageNuevoLibro = require('./pages/PageNuevoLibro');

import PageEditarPedido from "./pages/PageEditarPedido";
import PageNuevoPedido from "./pages/PageNuevoPedido";

const router = createBrowserRouter([
	{ path: '/', element: <PageHome /> },
	{ path: '/clientes/nuevo', element: <PageNuevoCliente /> },
	{ path: '/clientes/:id/editar', element: <PageEditarCliente /> },
	{ path: '/libros/nuevo', element: <PageNuevoLibro /> },
	{ path: '/libros/:id/editar', element: <PageEditarLibro/> },
	{ path: '/pedidos/nuevo', element: <PageNuevoPedido/> },
	{ path: '/pedidos/:id/editar', element: <PageEditarPedido/> }
]);

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
);