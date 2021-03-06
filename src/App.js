import React, { Component } from "react";
import "./assets/css/bootstrap.css";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component {
  state = {
    termino: "",
    imagenes: [],
  };

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${termino}`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ imagenes: resultado.teams }));
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino,
      },
      () => {
        this.consultarApi();
      }
    );
    
  };
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imagenes</p>

          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <Resultado imagenes={this.state.imagenes} />
      </div>
    );
  }
}

export default App;
