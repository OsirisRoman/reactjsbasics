//imr
import React from 'react';

//sfc
const Producto = ({ producto, carrito, setCarrito }) => {
  const { nombre, precio } = producto;

  //Agregar al carrito
  const seleccionarProducto = (producto) => {
    setCarrito([...carrito, producto]);
    console.log(`Comprando ${producto.nombre}...`);
  };

  //Comprando
  const comprando = () => {
    console.log('comprando');
  };

  return (
    <p>
      {nombre}: ${precio}{' '}
      <button
        type='button'
        id='comprar'
        //notar que esta función con parámetros debe pasar dentro de un anonymous function
        onClick={() => seleccionarProducto(producto)}>
        Comprar Este Producto
      </button>
      <button
        type='button'
        id='comprando'
        //esta función SIN parámetros debe pasar sin paréntesis
        onClick={comprando}>
        comprando
      </button>
    </p>
  );
};

export default Producto;
