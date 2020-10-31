import React, { Component } from "react"; //react, {component} sera mas limpio que ponerlo en la class como react.components{bla bla}

//creamos la clase del componente de esta forma
class MiComponente extends Component {
  //para poder mostrar nuestro componente debe llevar lo siguiente JSX

  render() {
    let receta = {
      nombre: "pizza",
      ingredientes: ["tomate", "cebolla", "carne"],
      calorias: 400,
    };

    //para mas de 1 etiqueta se ocupa react.fragment o div
    return (
      <div className="mi-componente">
        <h1>Hola, soy el componente nuevo: MiComponente</h1>
        <h2>{"receta: " + receta.nombre}</h2>
        <h2>{"caloridas: " + receta.calorias}</h2>
        <ol>
          {receta.ingredientes.map((ingredientes, i) => {
            console.log(ingredientes);
            return <li key={i}>{ingredientes}</li>;
          })}
        </ol>
      </div>
    );
  }
}

//siempre se debe Exportar!
export default MiComponente;
