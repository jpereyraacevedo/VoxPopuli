//Variables del programa

const necesitaEnvio = 275

const usuario1 = {
    usuario: (prompt("¡Hola! Bienvenido a Vox Populi, como es el nombre de nuestro visitante?")),
    pregunta: (prompt("Es usted de CABA? Responda con SI o con NO.").toUpperCase()),
    remera: (prompt("Que remera quiere? KIMETSU DIGIMON GODZILLA O ANIME").toUpperCase())
}

class RegistroUsuario {
    constructor(nombre, tipoRemera, caba) {
        this.nombre = nombre;
        this.tipoRemera = tipoRemera;
        this.caba = caba;
    }
    registrar() {
        console.log("El usuario " + this.nombre + " selecciono una remera de " + this.tipoRemera + " y " + this.caba + " es de CABA")
    }
}

const usuarioRegistrado = new RegistroUsuario(usuario1.usuario, usuario1.remera, usuario1.pregunta);

// Arrays que simulan el stock

const digimon = {
    id: 1,
    nombre: "DIGIMON",
    precio: 800,
}

const kimetsu = {
    id: 2,
    nombre: "KIMETSU",
    precio: 850,
}

const godzilla = {
    id: 3,
    nombre: "GODZILLA",
    precio: 900,
}

const anime = {
    id: 4,
    nombre: "ANIME",
    precio: 875,
}

const productos = [digimon, kimetsu, godzilla, anime];

for (const producto of productos) {
    if ((producto.nombre == usuario1.remera) && (usuario1.pregunta === "SI")) {
        alert(usuario1.usuario + " el precio de la remera de " + usuario1.remera + " es de $" + producto.precio)
    }
    if ((producto.nombre == usuario1.remera) && (usuario1.pregunta === "NO")) {
        alert(usuario1.usuario + " el precio de la remera de " + usuario1.remera + " con envio es de $" + (producto.precio + necesitaEnvio))
    }
}

usuarioRegistrado.registrar()

