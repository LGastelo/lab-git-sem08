class Producto {
    constructor(nombre, precio, descuento, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento;
        this.imagen = imagen;
    }

    calcularPrecioFinal() {
        return this.precio - (this.precio * this.descuento / 100);
    }
}


const producto1 = new Producto("Laptop", 2500, 10, "img/laptop.jpg");
const producto2 = new Producto("Celular", 1200, 15, "img/celular.jpg");
const producto3 = new Producto("Audífonos", 300, 20, "img/audifonos.jpg");

const catalogo = [producto1, producto2, producto3];

const contenedor = document.getElementById("contenedor-productos");

catalogo.forEach(producto => {

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" width="150" height="150">
        <h2>${producto.nombre}</h2>
        <p class="precio">Precio: S/${producto.precio}</p>
        <button>Aplicar Descuento</button>
    `;

    const boton = tarjeta.querySelector("button");

    boton.addEventListener("click", () => {

        const precioFinal = producto.calcularPrecioFinal();

     
        const precio = tarjeta.querySelector(".precio");

        precio.textContent = `Precio con descuento: S/${precioFinal.toFixed(2)}`;
    });

   
    contenedor.appendChild(tarjeta);
});