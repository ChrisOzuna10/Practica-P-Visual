import listaUsuarios from "./index.js";
const iniciar=()=>{
    listaUsuarios
    let valorUsuario = document.getElementById("User").value;
    let valorPassword = document.getElementById("Pass").value;
    let mensaje = "";

    for (let i = 0; i<listaUsuarios.length; i++) {
        //de la "lista de usuarios" un usuario y compara el atributo "usuario"; tambien compara el atributo "pass", si son iguales sale del bucle
        if (listaUsuarios[i].usuario == valorUsuario.trim() && listaUsuarios[i].pass == valorPassword.trim()) {
            //una forma de salirse del bucle for
            i = listaUsuarios.length+1;
            mensaje = "Bienvenido"
        }else{
            mensaje="usuario o password incorrecto"
        }
    }
    alert(mensaje);
}
export default iniciar