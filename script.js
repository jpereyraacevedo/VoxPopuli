// //Variables del programa
// const necesitaEnvio = 275;

// let form = document.getElementById("form")

// $(() => {
//     $("#remera1").on('click',function() {
//         $("#adding-html").css({background: "#D3FBD8", border: "2px solid #9CC2A1"}).slideDown(2000).append(`<p>Gracias por tu compra! <br>
//         Seleccionaste la remera de Godzilla</p>`);
//         $("#remera1").fadeOut()
//         $("#remera2").fadeOut()
//         $("#remera3").fadeOut()
//     })

// })

// $(() => {
//     $("#remera2").on('click',function() {
//         $("#adding-html").css({background: "#D3FBD8", border: "2px solid #9CC2A1"}).slideDown(2000).append(`<p>Gracias por tu compra! <br>
//                                     Seleccionaste la remera de Digimon</p>`);
//         $("#remera1").fadeOut()
//         $("#remera2").fadeOut()
//         $("#remera3").fadeOut()
//     })

// })

// $(() => {
//     $("#remera3").on('click',function() {
//         $("#adding-html").css({background: "#D3FBD8", border: "2px solid #9CC2A1"}).slideDown(2000).append(`<p>Gracias por tu compra! <br>
//                                     Seleccionaste la remera de Kimetsu no yaiba</p>`);
//         $("#remera1").fadeOut()
//         $("#remera2").fadeOut()
//         $("#remera3").fadeOut()
//     })

// })

// function funciondeprueba(e) {
//     e.preventDefault()

//     var nombreIngresado = document.getElementById("nombre").value;
//     var remeraIngresada = document.getElementById("remera").value;
//     var envioIngresado = document.getElementById("envio").value;
//     const usuario1 = {
//         usuario: nombreIngresado,
//         remera: remeraIngresada,
//         pregunta: envioIngresado,
//     }
//     const usuarioRegistrado = new RegistroUsuario(usuario1.usuario, usuario1.remera, usuario1.pregunta);

//     const digimon = {
//         id: 1,
//         nombre: "DIGIMON",
//         precio: 800,
//     }

//     const kimetsu = {
//         id: 2,
//         nombre: "KIMETSU",
//         precio: 850,
//     }

//     const godzilla = {
//         id: 3,
//         nombre: "GODZILLA",
//         precio: 900,
//     }

//     const anime = {
//         id: 4,
//         nombre: "ANIME",
//         precio: 875,
//     }

//     const productos = [digimon, kimetsu, godzilla, anime];

//     usuarioRegistrado.registrar()


//     // Guardado y recuperado de datos una vez realizado el evento

//     localStorage.setItem("nombre", nombreIngresado)
//     localStorage.setItem("modelo", remeraIngresada)

//     // Guardado del objeto registrado

//     localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioRegistrado))
// }

// // Funcion que se ejecuta con el evento

// form.addEventListener("submit", funciondeprueba)


// // Funcion constructora de usuarios para registro

// class RegistroUsuario {
//     constructor(nombre, tipoRemera, caba) {
//         this.nombre = nombre;
//         this.tipoRemera = tipoRemera;
//         this.caba = caba;
//     }
//     registrar() {
//         console.log("El usuario " + this.nombre + " selecciono una remera de " + this.tipoRemera + " y " + this.caba + " es de CABA")
//     }
// }

// Aqui nace un nuevo Dios. ¿Estará el mundo preparado para verlo? Solo el tiempo lo dirá.

// Funcion para crear el el registro de compra que luego sera usado en el storage.

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


  let addingHtml = $("#adding-html");

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
        <strong>${shirtPrice} </strong> </div>
        <img src=${shirtImage}>
    </div>
  </div>
</div>
    `;

    cartCard.innerHTML = contentCartCard
    addingHtml.append(cartCard).slideDown(1000)

    totalPrice()
  }

})

// Funcion para acumular precios

function totalPrice() {
  let total = 0
}

