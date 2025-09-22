let listaDeAmigos = [];
let sorteoReset = false;

// Agregar amigo
function agregarAmigo() {
    let nombre = document.getElementById("inputNombre");
    let nombreSe = nombre.value.trim().toUpperCase();

    if (nombreSe === "") {
        alert("No se puede ingresar un valor vacio, solo se permiten nombres.");
        return;
    }

    if (listaDeAmigos.includes(nombreSe)) {
        alert("Ese nombre ya está en la lista, intenta con otro");
        nombre.value = "";
        console.log(listaDeAmigos);
        return;
    }

    listaDeAmigos.push(nombreSe);
    mostrarLista()
    nombre.value = "";
    console.log(listaDeAmigos);
}
function mostrarLista() { 
    let lista = document.getElementById("listado");
    lista.innerHTML = "";
    for (let name = 0; name < listaDeAmigos.length; name++){
        let nameLista = document.createElement("li");
        nameLista.textContent = `${listaDeAmigos[name]}`;
        lista.append(nameLista);
    }
}
function sortear() {
    if (listaDeAmigos.length < 2) {
        alert("Agregar 2 o mas nombres");
        return;
    }
    let resultado = Math.floor(Math.random() * listaDeAmigos.length);
    let nameGanador = listaDeAmigos[resultado];

    let cambioGanador = document.getElementById("tituloLista");
    cambioGanador.textContent = "El ganador es:";
    
    let listaGanadora = document.getElementById("listado");
    listaGanadora.textContent = nameGanador;

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnAñadir").disabled = true;
    document.getElementById("btnReset").style.display = "inline-block";

}
function reiniciarJuego() {
    listaDeAmigos = [];

    document.getElementById("tituloLista").textContent = "Lista de amigos";
    document.getElementById("listado").textContent = "";

    document.getElementById("inputNombre").value = "";

    document.getElementById("btnReset").style.display = "none";
    document.getElementById("btnAñadir").disabled = false;

    document.getElementById("btnSortear").disabled = false;
}
