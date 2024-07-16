import listaUsuarios from "./index.js";

const guardar = () => {
    listaUsuarios
    let valorUsuario = document.getElementById("User").value;
    let valorPassword = document.getElementById("Pass").value;
    let valorConfirmPass = document.getElementById("PassC").value;
    let mensaje = "";

    if(valorPassword == valorConfirmPass){
        //crea el objeto usuario 
        let usuario = {usuario: valorUsuario, pass: valorConfirmPass};
        //guarda el usuario en la lista
        listaUsuarios.push(usuario)

        mensaje = "exito al guardar"
        // Guarda la lista actualizada en el almacenamiento local
        localStorage.setItem("lista", JSON.stringify(listaUsuarios)); 
    }else{
        mensaje = "ERROR"
    }
    alert(mensaje);

} 
export default guardar