// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nuevoNombre= '';
let ListaNombreAmigos = []; 

function agregarAmigo(){
    nuevoNombre= document.getElementById('amigo').value.trim();

    if (nuevoNombre === "") {
        console.log('El campo nombre esta vacio');
        alert('El campo nombre esta vacio');
        //exit();
    }else{
        ListaNombreAmigos.push(nuevoNombre);
        console.log('ListaNombreAmigos='+ListaNombreAmigos);
        actualizarLista();
        document.getElementById('amigo').value='';
    }
    
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";
    for (let i = 0; i < ListaNombreAmigos.length; i++) {
        lista.innerHTML += `<li>${ListaNombreAmigos[i]}</li>`;
    }
}


function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (ListaNombreAmigos.length === 0) {
        resultado.innerHTML = "No hay amigos registrados en la Lista.";
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * ListaNombreAmigos.length);
    
    resultado.innerHTML = `${ListaNombreAmigos[indiceAleatorio]} ha sido seleccionado!`;
}