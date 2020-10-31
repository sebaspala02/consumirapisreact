import React, { Component } from "react";

class Buscador extends Component {
  //ref permite leer lo imput con react para buscar
  busquedaRef = React.createRef();

  //obtenerdato
  obtenerDato = (e) => {
    //preventDefault evita linea de url
    e.preventDefault();
    //tomamos datos de busqueda
    //console.log(this.busquedaRef.current.value);
    const termino = this.busquedaRef.current.value;
    //pasas los datos de busqueda al componente pricipal
    this.props.datosBusqueda(termino);
  };

  render() {
    return (
      //eventos en el form
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
