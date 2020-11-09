import { Fragment, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Producto from './components/Producto/Producto';
import Carrito from './components/Carrito/Carrito';

function App() {
  //Crear listado de productos
  const [productos, setProductos] = useState([
    { id: 2, nombre: 'Camisa Mongo', precio: 50 },
    { id: 3, nombre: 'Camisa Express', precio: 60 },
    { id: 1, nombre: 'Camisa ReactJS', precio: 70 },
    { id: 4, nombre: 'Camisa NodeJS', precio: 80 },
  ]);

  //State para un carrito de compras
  const [carrito, setCarrito] = useState([]);

  //Obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo='Tienda Virtual' />
      <h3>Lista de Productos</h3>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      ))}
      <Footer fecha={fecha} />
      <Carrito carrito={carrito} setCarrito={setCarrito} />
    </Fragment>
  );
}

export default App;
