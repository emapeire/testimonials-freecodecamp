import React from "react";
import "../stylesheets/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio" 
        src={require(`../images/testimonio-${props.imagen}.png`)}
        alt={`foto-${props.alt}`} />
      <div className="contenido-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

/*
class Testimonio extends React.Component {
  render() {
    return (
      <div className="contenedor-testimonio">
        <img 
          className="imagen-testimonio" 
          src={require(`../images/testimonio-${this.props.imagen}.png`)}
          alt={`foto-${this.props.alt}`} />
        <div className="contenido-testimonio">
          <p className="nombre-testimonio"><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
          <p className="cargo-testimonio">{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
          <p className="texto-testimonio">"{this.props.testimonio}"</p>
        </div>
      </div>
    );
  }
}
*/

export default Testimonio;
