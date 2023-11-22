// Catalogo.js
import React from 'react';
import { Link } from 'react-router-dom';

function Catalogo() {
  return (
    <div>
      {/* Renderiza tu lista de productos */}
      <ul>
        <li>
          <Link to="Filtros">Producto 1</Link>
        </li>
        <li>
          <Link to="Aceites">Producto 2</Link>
        </li>
        <li>
          <Link to="Accesorios">Producto 3</Link>
        </li>
       
      </ul>
    </div>
  );
}

export default Catalogo;



