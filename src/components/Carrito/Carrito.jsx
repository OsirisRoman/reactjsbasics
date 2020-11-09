import React from 'react';

import './Carrito.css';

const Carrito = ({ carrito, setCarrito }) => {
  //Eliminar elemento del carrito
  const eliminarProducto = (productoAEliminar) => {
    const copiaCarrito = [];
    for (let i = 0; i < carrito.length; i++) {
      if (i !== productoAEliminar) copiaCarrito.push(carrito[i]);
    }
    setCarrito(copiaCarrito);
    console.log(`Eliminando el producto # ${productoAEliminar}...`);
  };

  return (
    <div className='carrito'>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <h2>El carrito está vacío</h2>
      ) : (
        carrito.map((producto, idx) => (
          <li key={idx}>
            {producto.nombre}
            <button
              type='button'
              id='borrar'
              //notar que esta función con parámetros debe pasar dentro de un anonymous function
              onClick={() => eliminarProducto(idx)}>
              Eliminar Este Producto
            </button>
          </li>
        ))
      )}
    </div>
  );
};

export default Carrito;
