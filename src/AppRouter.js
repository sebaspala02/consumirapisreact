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
        .: Menú de navegación :.
        <nav className="navbar navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="btn btn-outline-success">
              <Link to="/map">➡ Mapa de la posición de la Estación Espacial Internacional ⬅</Link>
            </li>
          </ul>
          <ul className="navbar-nav xr-auto">
            <li className="btn btn-outline-success">
              <Link to="/find">Buscador de Escudos de equipos 🔍</Link>
            </li>
          </ul>
        </nav>
        .: Anclado de rutas al contenido :.
        <Route path="/map" component={Map} />
        <Route path="/find" component={Find} />
      </div>
    </Router>
  );
}
export default AppRouter;