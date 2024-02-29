import React from "react";
import "../styles/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../images/testimonio-${ props.imagen }.png`)}
        alt={`Foto de ${ props.nombre }`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          {props.nombre} en <strong>{props.pais}</strong>
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio" dangerouslySetInnerHTML={{ __html: props.testimonio} }/>
      </div>
    </div>
  );
}

export default Testimonio;
