import React from "react";
import { Link } from "react-router-dom";
import iniciar from "../../scripts/signIn";

const Inicio = () => {
    return (
        <div className="form-container">
            <label htmlFor="User">Usuario:</label>
            <input id="User" type="text" />

            <label htmlFor="Pass">Contraseña:</label>
            <input type="password" id="Pass" />

            <button onClick={iniciar}>Iniciar sesión</button>

            <h3>No tienes cuenta? <Link to='/login'>Créala aquí</Link></h3>
        </div>
    );
}

export default Inicio;
