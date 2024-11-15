const carrito = [];
const listaCarrito = document.getElementById('lista-carrito').querySelector('tbody');
const imgCarrito = document.getElementById('img-carrito');
const carritoDiv = document.getElementById('carrito');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

imgCarrito.addEventListener('click', () => {
    carritoDiv.classList.toggle('hidden');
});

// Agregar al carrito
document.querySelectorAll('.agregar-carrito').forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        const producto = {
            id: e.target.getAttribute('data-id'),
            nombre: e.target.getAttribute('data-nombre'),
            precio: e.target.getAttribute('data-precio'),
            imagen: e.target.getAttribute('data-imagen')
        };
        agregarAlCarrito(producto);
    });
});

// Función para agregar al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();
}

// Mostrar carrito
function mostrarCarrito() {
    listaCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${producto.imagen}" class="w-16 h-16 object-cover"></td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>1</td>
            <td><button class="eliminar" data-id="${producto.id}">Eliminar</button></td>
        `;
        listaCarrito.appendChild(row);
    });
}

// Vaciar carrito
vaciarCarritoBtn.addEventListener('click', () => {
    carrito.length = 0; // Vaciar el array
    mostrarCarrito(); // Actualizar la vista del carrito
});
