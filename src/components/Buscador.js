import React, { Component } from "react";

class Buscador extends Component {
  busquedaRef = React.createRef();

  obtenerDato = (e) => {
    e.preventDefault();
    const termino = this.busquedaRef.current.value;
    this.props.datosBusqueda(termino);
  };

  render() {
    return (
      <form onSubmit={this.obtenerDato}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Buscar tu imagen. Ejem: Futbol"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              placeholder="Buscar imagen"
              value="Buscar..."
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;