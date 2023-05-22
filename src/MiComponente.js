//Importar modulos de react o dependencias
import React from "react";

//Funcion del componente
const MiComponente = () => {    
    let usuario = {
        nombre : "Victor",
        apellido : "Robles",
        web : "VictorRobes.es"
    }

    return (
        <div className="mi-componente">
        <p>Este es mi primer componente</p>
        <h3>Datos del usuario</h3>
        <ul>
            <li>Nombre: {usuario.nombre}</li>
            <li>Apellido: {usuario.apellido}</li>
            <li>Web: {usuario.web}</li>
        </ul>
        </div> 
    );
}

//Export
export default MiComponente;