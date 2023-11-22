
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Catalogo from './Catalogo';  
import DetalleProducto from './DetalleProducto';  

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Catalogo} />
        <Route path="/producto/:id" component={DetalleProducto} />
      </Switch>
    </Router>
  );
}

export default App;
