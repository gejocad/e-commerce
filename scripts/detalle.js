import backDB from './backDB.js'
import frontDB from './frontDB.js'


let id = localStorage.getItem("cursoId");
mostrar(id)

function mostrar(id) {

    let imagen = document.querySelector(".imagen")
    let nombre = document.querySelector(".nombre")
    let categoria = document.querySelector(".categoria")
    let precio = document.querySelector(".precio")
    let descripcion = document.querySelector(".descripcion")
    let valoracion = document.querySelector(".valoracion")
    let instructor = document.querySelector(".instructor")

    let tipo = localStorage.getItem("tipo")
    if (tipo == "back")
        {var pelId = backDB[id], data = backDB} 
    else if(tipo == "front") {
        var pelId = frontDB[id], data = frontDB;
    } else {
        window.location.href = "producto.html";
        alert ("ingrese un articulo por favor");
    }

    imagen.innerHTML = ''
    nombre.innerHTML = ''
    categoria.innerHTML = ''
    precio.innerHTML = ''
    descripcion.innerHTML = ''
    valoracion.innerHTML = ''
    instructor.innerHTML = ''

    imagen.innerHTML +=`
        <img id="img-detalle" src="${pelId.imagen}">
    `
    nombre.innerHTML +=`
        <h1 id="titulo" class="">${pelId.nombre}</h1>
    `
    categoria.innerHTML +=`
        <li id="coincidencia" class="minDetalle" class="">${pelId.categoria}</li>
    `
    precio.innerHTML +=`
    <li class="minDetalle" style="margin-right: 8px;margin-left: 30px;">${pelId.precio}</li>
    `
    
    descripcion.innerHTML +=`
    <div class="descripcion">${pelId.descripcion}</div>
    `
    valoracion.innerHTML +=`
    <li class="liR">R</li>
    <li class="minDetalle" style="margin-left: 15px;margin-right: 8px;">${pelId.valoracion}</li>
    <li class="liHD"><img  src="./imagenes/HD.png" alt=""></li>
    `
    instructor.innerHTML +=`
    <p>${pelId.instructor}</p>
    `
}