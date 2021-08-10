
// Funcion para crear el registro de compra que luego sera usado en el storage.

class RegistroUsuario {
  constructor(tipoRemera, precio) {
    this.tipoRemera = tipoRemera;
    this.precio = precio;
  }
  registrar() {
    console.log("El usuario selecciono una remera de " + this.tipoRemera + " de " + this.precio)
  }
}

// Funcion para recibir el evento click en el HTML

$(function () {

  $(".addToCart").on("click", clickedCart)

// Traer el div que forma el carrito
  const addingHtml = $("#adding-html");

  function clickedCart(e) {
    let button = e.target;
    let card = button.closest(".card");
    let shirtName = card.querySelector(".card-title").textContent;
    let shirtPrice = card.querySelector(".card-text").textContent;
    let shirtImage = card.querySelector(".card-img-top").src;

    itemsAddedToCart(shirtName, shirtPrice, shirtImage);


    const usuarioRegistrado = new RegistroUsuario(shirtName, shirtPrice);
    usuarioRegistrado.registrar()

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioRegistrado))
  }

  // Funcion para crear elementos del DOM una vez recibido el evento click

  function itemsAddedToCart(shirtName, shirtPrice, shirtImage) {

    // Div para crear elementos del carrito
    let cartCard = document.createElement('div');
    let contentCartCard = `
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          ${shirtName} 
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            <strong class="shirtPrice">${shirtPrice}</strong>
          </div>
          <img src=${shirtImage}>
        </div>
        <div class="card-background">
          <p> CANTIDAD </p>
          <input class="shopping-cart-quantity-input cartElementQuantity" type="number" value="1">
          <button class="btn buttonDelete" type="button">Quitar</button>                          
        </div>
      </div>
    </div>
    `;

    // Funcion para agregar la tarjeta sobre el elemento que se quiera agregr al carrito
    cartCard.innerHTML = contentCartCard
    addingHtml.append(cartCard).slideDown(1000);

    // Funcion para eliminar elementos del carrito
    cartCard.querySelector(".buttonDelete").addEventListener("click", removeCard);

    // Funcion para la cantidad de productos
    cartCard.querySelector(".cartElementQuantity").addEventListener("change", quantityChange);

    // Funcion para actualizar el precio mostrado en el carrito
    totalPrice();
  }

})

// Funcion para acumular precios

function totalPrice() {
  let total = 0;
  const cartTotalPrice = document.querySelector(".cartTotalPrice");
  const cartElements = document.querySelectorAll(".accordion");


  // Obtener el precio para sumar el costo
  cartElements.forEach(cartElement => {
    const shirtPriceAdded = cartElement.querySelector(".shirtPrice");
    const shirtPriceForAdding = parseInt(shirtPriceAdded.textContent.replace("$", ""));


    // Obtener la cantidad de unidades
    const shirtQuantity = cartElement.querySelector(".cartElementQuantity");
    const shirtQuantityNumber = parseInt(shirtQuantity.value);


    //Sumar precio total
    total = total + shirtPriceForAdding * shirtQuantityNumber;

    // Precio visible en el sitio
    cartTotalPrice.innerHTML = `$ ${total}`
  })

}


// Eliminar objetos del carrito
function removeCard(e) {
  let buttonClicked = e.target;
  buttonClicked.closest(".accordion").remove();
  totalPrice();
}

// Funcion del cambio de cantidad de productos
function quantityChange(e) {
  let valueQuantity = e.target;
  if (valueQuantity.value <= 0) {
    valueQuantity.value = 1;
  }
  totalPrice();
}