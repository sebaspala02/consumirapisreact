import React, { Component } from "react";
import "./assets/css/bootstrap.css";

//importar componentes
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component {
  //state objeto mas importante React
  state = {
    termino: "",
    imagenes: [],
  };

  //usar api con datos de busqueda
  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${termino}`;

    //console.log(url);
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ imagenes: resultado.teams }));
  };

  //funcion que pasara texto de input al controlador
  //setState cambia el estado de State
  datosBusqueda = (termino) => {
    this.setState(
      {
        termino,
      },
      () => {
        this.consultarApi();
      }
    );
    //de aqui que conuslte la api
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
