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
        <div class="conteiner itemi">
        <ahref="detalle.html">
        <div class="col" id="curso${item.id}" data-dev=${item.id}>
          <div class="card shadow-sm">             
          <img src="${item.imagen}" class="hidden item-image" alt="...">
            <div class="card-body">
              <h3 class="card-text item-title">${item.nombre}</h3><p align="right" class="item-price">${item.precio}$</p>
            </div>
          </div>
        </div>
    </a>
    
    <button class="item-button btn btn-info addToCart"><img src="images/carrito-plus.png" class="" alt="..."></button>
    </div>
                `
});
document.querySelector("#curso0").addEventListener('click', function () {
    localStorage.setItem("tipo", "back")
    localStorage.setItem("cursoId", 0)
})
document.querySelector("#curso1").addEventListener('click', function () {
    localStorage.setItem("tipo", "back")
    localStorage.setItem("cursoId", 1)
})
document.querySelector("#curso2").addEventListener('click', function () {
    localStorage.setItem("tipo", "back")
    localStorage.setItem("cursoId", 2)
})
document.querySelector("#curso3").addEventListener('click', function () {
    localStorage.setItem("tipo", "back")
    localStorage.setItem("cursoId", 3)
})      
}

function mostrarFront() {
    let list = document.querySelector(".listDev")
    let front = frontDB

    list.innerHTML=''

   front.forEach(item => {
    list.innerHTML += `
    <div class="conteiner itemi">
    <a href="detalle.html">
    <div class="col" id="curso${item.id}" data-dev=${item.id}>
      <div class="card shadow-sm">             
      <img src="${item.imagen}" class="hidden item-image" alt="...">
        <div class="card-body">
          <h3 class="card-text item-title">${item.nombre}</h3><p align="right" class="item-price">${item.precio}$</p>
        </div>
      </div>
    </div>
</a>

<button class="item-button btn btn-info addToCart"><img src="images/carrito-plus.png" class="" alt="..."></button>
</div>
            `
});

document.querySelector("#curso0").addEventListener('click', function () {
    localStorage.setItem("tipo", "front")
    localStorage.setItem("cursoId", 0)
})
document.querySelector("#curso1").addEventListener('click', function () {
    localStorage.setItem("tipo", "front")
    localStorage.setItem("cursoId", 1)
})
document.querySelector("#curso2").addEventListener('click', function () {
    localStorage.setItem("tipo", "front")
    localStorage.setItem("cursoId", 2)
})
document.querySelector("#curso3").addEventListener('click', function () {
    localStorage.setItem("tipo", "front")
    localStorage.setItem("cursoId", 3)
})    }

/* opciones carro*/





const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);
let carrito = []
function addToCartClicked(event) {
  const button = event.target;
  const item2 = button.closest('.itemi');

  const itemTitle = item2.querySelector('.item-title').textContent;
  const itemPrice = item2.querySelector('.item-price').textContent;
  const itemImage = item2.querySelector('.item-image').src;

  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImage,
    cantidad: 1
  }

  

  carrito.push(newItem)

  localStorage.setItem('carrito', JSON.stringify(carrito))




  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}
leerLocalStorage(); 
  function leerLocalStorage(){
    if(localStorage.getItem('cart') === null){
        let productoLS = [];
        console.log(productoLS);
    }
    else {
        let productoLS = JSON.parse(localStorage.getItem('cart'));
        
        console.log(productoLS);
    }
    carrito.map(item3 =>{
        //Construir plantilla
        const shoppingCartRow = document.createElement('div');
        const shoppingCartContent = `
        <div class="row shoppingCartItem">
              <div class="col-6">
                  <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                      <img src=${item3.itemImage} class="shopping-cart-image">
                      <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${item3.itemTitle}</h6>
                  </div>
              </div>
              <div class="col-2">
                  <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                      <p class="item-price mb-0 shoppingCartItemPrice">${item3.itemPrice}</p>
                  </div>
              </div>
              <div class="col-4">
                  <div
                      class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                      <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                          value="1">
                      <button class="btn btn-danger buttonDelete" type="button">X</button>
                  </div>
              </div>
          </div>`;

          shoppingCartRow.innerHTML = shoppingCartContent;
          shoppingCartItemsContainer.append(shoppingCartRow);
        
        
        
          shoppingCartRow
            .querySelector('.buttonDelete')
            .addEventListener('click', removeShoppingCartItem);
        
          shoppingCartRow
            .querySelector('.shoppingCartItemQuantity')
            .addEventListener('change', quantityChanged);
            updateShoppingCartTotal();
            

    });}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
    


      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;

  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);



  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);
    updateShoppingCartTotal();

     
}


function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
/*
  
*/

}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
  }