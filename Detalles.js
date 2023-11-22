
import React from 'react';
import { useParams } from 'react-router-dom';

function DetalleProducto() {
  const { id } = useParams();

  // Lógica para obtener y mostrar detalles del producto con el id proporcionado

  return (
    <div>
      <h2>Detalles del Producto {id}</h2>
      {/* Mostrar detalles del producto según el id */}
    </div>
  );
}

export default DetalleProducto;
