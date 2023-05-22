import React from 'react';

export const EventosComponentes = () => {
    const hasDadoClick = (e,nombre) => {
        alert("Has dado click al boton!"+nombre);
    }

    const hasDadoDobleClick = (e,nombre) => {
        alert("Has dado doble click al boton!"+nombre);
    }

  return (
    <div>
        <h1>EventosComponentes</h1>
        {/*Evento click*/}
        <button onClick={e => hasDadoClick(e, "Elías")}>Dame Click</button>
        
        {/*Evento doble click*/}
        <button onDoubleClick={e => hasDadoDobleClick(e, "Elías")}>Dame doble Click</button>

    </div>
  )
}
