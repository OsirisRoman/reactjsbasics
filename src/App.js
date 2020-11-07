import { Fragment, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  //Crear listado de productos
  const [productos, guardarProductos] = useState([
    { id: 2, nombre: 'Camisa Mongo', precio: 50 },
    { id: 3, nombre: 'Camisa Express', precio: 60 },
    { id: 1, nombre: 'Camisa ReactJS', precio: 70 },
    { id: 4, nombre: 'Camisa NodeJS', precio: 80 },
  ]);

  //Obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo='Tienda Virtual' />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
