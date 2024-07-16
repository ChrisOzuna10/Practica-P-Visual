import React from "react";
import guardar from "../../scripts/logIn";
const Registro = () => {
    return (
        <div className="form-container">
            <label htmlFor="User">Usuario:</label>
            <input id="User" type="text" />

            <label htmlFor="Pass">Contraseña:</label>
            <input type="password" id="Pass" />

            <label htmlFor="PassC">Confirmar:</label>
            <input type="password" id="PassC" />

            <button onClick={guardar}>Guardar</button>
        </div>
    );
}

export default Registro;
