//imr
import React from 'react';

//sfc
const Producto = ({ producto }) => {
  const { nombre, precio } = producto;

  return (
    <p>
      {nombre}: ${precio}
    </p>
  );
};

export default Producto;
