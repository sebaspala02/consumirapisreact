import React from "react";

const Imagen = (props) => {
  const {
    strLeague,
    strTeam,
    strTeamBadge,
    strCountry,
    strStadium,
  } = props.imagenes;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={strTeamBadge} alt={strTeam} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">Equipo: {strTeam}</p>
          <p className="card-text">Liga: {strLeague}</p>
          <p className="card-text">Pais: {strCountry}</p>
          <p className="card-text">Estadio: {strStadium}</p>
          <a
            href={strTeamBadge}
            target="_black"
            className="btn btn-primary btn-block"
          >
            Ver imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
