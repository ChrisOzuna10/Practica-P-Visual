const listaUsuarios = [{ usuario: "user1", pass: "1234" }];

localStorage.setItem("lista", JSON.stringify(listaUsuarios));

document.addEventListener("DOMContentLoaded", () => {
    if (listaUsuarios.length > 0) {
        let user = listaUsuarios[0].usuario; // Cambiado el índice a 0

        const button = document.getElementById("Bsecion");
        if (button) { // Verificar que el botón existe
            button.textContent = "🔓 " + user;
        }
    }
});

export default listaUsuarios;
