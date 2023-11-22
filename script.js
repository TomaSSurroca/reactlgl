document.addEventListener("DOMContentLoaded", function () {

    const carrito = [];



    // Función para agregar un producto al carrito

    function agregarAlCarrito(nombre, precio) {

        const productoExistente = carrito.find((producto) => producto.nombre === nombre);



        if (productoExistente) {

            // Si el producto ya está en el carrito, incrementa su cantidad y actualiza el precio total

            productoExistente.cantidad++;

            productoExistente.total = productoExistente.cantidad * productoExistente.precio;

        } else {

            // Si el producto no está en el carrito, agrégalo con cantidad 1 y precio total igual al precio unitario

            const producto = { nombre, precio, cantidad: 1, total: precio };

            carrito.push(producto);

        }



        mostrarCarrito();

    }



    // Función para mostrar el carrito

    function mostrarCarrito() {

        const listaCarrito = document.getElementById('lista-carrito');

        const totalCarrito = document.getElementById('total-carrito');



        listaCarrito.innerHTML = '';

        let total = 0;



        carrito.forEach((producto) => {

            const itemCarrito = document.createElement('li');

            itemCarrito.innerHTML = `${producto.nombre} - Cantidad: ${producto.cantidad} - Total: $${producto.total.toFixed(2)}`;

            listaCarrito.appendChild(itemCarrito);



            total += producto.total;

        });



        totalCarrito.innerText = `$${total.toFixed(2)}`;

    }



    // Función para vaciar el carrito

    function vaciarCarrito() {

        carrito.length = 0;

        mostrarCarrito();

    }



    // Obtén los botones "Agregar al carrito" por su clase CSS o como prefieras

    const botonesAgregar = document.querySelectorAll('.agregar-al-carrito');



    botonesAgregar.forEach((boton) => {

        boton.addEventListener('click', function () {

            const nombre = this.getAttribute('data-nombre');

            const precio = parseFloat(this.getAttribute('data-precio'));

            agregarAlCarrito(nombre, precio);

        });

    });



    // Agrega un evento al botón "Vaciar Carrito"

    const botonVaciar = document.getElementById('vaciar-carrito');

    if (botonVaciar) {

        botonVaciar.addEventListener('click', vaciarCarrito);

    }

    })