import React from 'react';
import PropTypes from 'prop-types';

export const TercerComponente = ({nombre, apellidos, ficha}) => {
  return (
    <div>
        <h1>TercerComponente</h1>
        <ul>
            <li>{nombre}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string,
    ficha: PropTypes.object
}

TercerComponente.defaultProps = {
    nombre : "Juan",
    apellidos : "Martinez"
}