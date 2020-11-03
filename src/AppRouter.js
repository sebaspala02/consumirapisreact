// Dependencias generales
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ReactDOM from "react-dom";

import App from "./App";
import Mapa from "./components/Mapa";

// Páginas internas
function Map() {
  return ReactDOM.render(<Mapa />, document.getElementById("rootTwo"));
}

function Find() {
  return ReactDOM.render(<App />, document.getElementById("root"));
}

// Función del routerrrr
function AppRouter() {
  return (
    <Router>
      <div className={"site-content"}>
        // Menú de navegación
        <nav class="navbar navbar-dark bg-dark">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/map">Map</Link>
            </li>
            <li class="nav-item active">
              <Link to="/find">Find</Link>
            </li>
          </ul>
        </nav>
        // Anclado de rutas al contenido
        <Route path="/map" component={Map} />
        <Route path="/find" component={Find} />
      </div>
    </Router>
  );
}
export default AppRouter;