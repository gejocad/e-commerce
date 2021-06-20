import backDB from './backDB.js'
import frontDB from './frontDB.js'

let tem = localStorage.getItem("seleccion");


if (tem == "back"){
    
    mostrarBack()

} else if (tem == "front"){

    mostrarFront()
} else {
    window.location.href = "index.html";
    alert ("ingrese una categoria");
}

function mostrarBack() {
    let list = document.querySelector(".listDev")
    let back = backDB

    list.innerHTML=''

   back.forEach(item => {
        list.innerHTML += `
                <a href="detalle.html" class="">
                    <div class="" id="curso${item.id}" data-dev=${item.id}>                
                        <img src="${item.imagen}" class="" alt="...">
                    </div>
                </a>
                `
});
document.querySelector("#curso0").addEventListener('click', function () {
    localStorage.setItem("categoria", "back")
    localStorage.setItem("cursoId", 0)
})
document.querySelector("#curso1").addEventListener('click', function () {
    localStorage.setItem("categoria", "back")
    localStorage.setItem("cursoId", 1)
})
document.querySelector("#curso2").addEventListener('click', function () {
    localStorage.setItem("categoria", "back")
    localStorage.setItem("cursoId", 2)
})
document.querySelector("#curso3").addEventListener('click', function () {
    localStorage.setItem("categoria", "back")
    localStorage.setItem("cursoId", 3)
})      
}

function mostrarFront() {
    let list = document.querySelector(".listDev")
    let front = frontDB

    list.innerHTML=''

   front.forEach(item => {
        list.innerHTML += `
                <a href="detalle.html" class="">
                    <div class="" id="curso${item.id}" data-dev=${item.id}>                
                        <img src="${item.imagen}" class="" alt="...">
                    </div>
                </a>
                `         
    
});

document.querySelector("#curso0").addEventListener('click', function () {
    localStorage.setItem("categoria", "front")
    localStorage.setItem("cursoId", 0)
})
document.querySelector("#curso1").addEventListener('click', function () {
    localStorage.setItem("categoria", "front")
    localStorage.setItem("cursoId", 1)
})
document.querySelector("#curso2").addEventListener('click', function () {
    localStorage.setItem("categoria", "front")
    localStorage.setItem("cursoId", 2)
})
document.querySelector("#curso3").addEventListener('click', function () {
    localStorage.setItem("categoria", "front")
    localStorage.setItem("cursoId", 3)
})    }

