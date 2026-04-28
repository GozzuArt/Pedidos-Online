const SHEET_CSV_URL = 'https://sheetdb.io/api/v1/bo51n4scc3xwn';

let productos = [
  {
    nombre: "CONO CROCANTE",
    precio: 1400,
    categoria: "Helados",
    descripcion: "Cobertura crocante",
    variantes: [
      { id: "cono-crocante", sabor: "Clásico", imagen: "img/cono-crocante.jpg", stock: 0, precio: 1400 }
    ]
  },
  {
    nombre: "CONO ECO",
    precio: 1600,
    categoria: "Helados",
    descripcion: "Cono clásico e irresistible",
    variantes: [
      { id: "cono-eco-chocolate-negro", sabor: "Chocolate Negro", imagen: "img/cono-eco-chocolate-negro.jpg", stock: 0, precio: 1600 },
      { id: "cono-eco-chocolate-blanco", sabor: "Chocolate Blanco", imagen: "img/cono-eco-chocolate-blanco.jpg", stock: 0, precio: 1600 }
    ]
  },
  {
    nombre: "PIÚ",
    precio: 1500,
    categoria: "Helados",
    descripcion: "Helado relleno cremoso",
    variantes: [
      { id: "piu-avellanas", sabor: "Avellanas", imagen: "img/piu-avellanas.jpg", stock: 0, precio: 1500 },
      { id: "piu-chocolate-negro", sabor: "Chocolate negro", imagen: "img/piu-dulce de leche.jpg", stock: 0, precio: 1600 },
      { id: "piu-chocolate-blanco", sabor: "Chocolate blanco", imagen: "img/piu-chocolate blanco.jpg", stock: 0, precio: 1600 }
    ]
  },
  {
    nombre: "BOMBÓN",
    precio: 600,
    categoria: "Helados",
    descripcion: "Cubierto de chocolate",
    variantes: [
      { id: "bombon", sabor: "Clásico", imagen: "img/bombon.jpg", stock: 0, precio: 600 }
    ]
  },
  {
    nombre: "PICO RICO",
    precio: 400,
    categoria: "Helados",
    descripcion: "Helado refrescante frutal",
    variantes: [
      { id: "pico-rico", sabor: "Clásico", imagen: "img/pico-rico.jpg", stock: 0, precio: 400 }
    ]
  },
  {
    nombre: "PICO RICO FRUTILLA",
    precio: 500,
    categoria: "Helados",
    descripcion: "Helado con relleno de crema",
    variantes: [
      { id: "pico-rico-frutilla", sabor: "Frutilla", imagen: "img/pico-rico-fru.jpg", stock: 0, precio: 500 }
    ]
  },
  {
    nombre: "ACAPULCO AGUA",
    precio: 400,
    categoria: "Helados",
    descripcion: "Helado de agua liviano",
    variantes: [
      { id: "acapulco-agua-uva-frutilla", sabor: "Uva y Frutilla", imagen: "img/acapulco-agua-uva y frutilla.jpg", stock: 0, precio: 400 },
      { id: "acapulco-agua-uva-naranja", sabor: "Uva y Naranja", imagen: "img/acapulco-agua-uva y naranja.jpg", stock: 0, precio: 500 }
    ]
  },
  {
    nombre: "ACAPULCO CREMA",
    precio: 500,
    categoria: "Helados",
    descripcion: "Helado cremoso con sabores",
    variantes: [
      { id: "acapulco-crema-vainilla", sabor: "Vainilla", imagen: "img/acapulco-vainilla.jpg", stock: 0, precio: 500 },
      { id: "acapulco-crema-chocolate", sabor: "Chocolate", imagen: "img/acapulco-chocolate.jpg", stock: 0, precio: 500 },
      { id: "acapulco-crema-frutilla", sabor: "Frutilla", imagen: "img/acapulco-frutilla.jpg", stock: 0, precio: 500 },
      { id: "acapulco-crema-dulce-de-leche", sabor: "Dulce de leche", imagen: "img/acapulco-dulce de leche.jpg", stock: 0, precio: 500 }
    ]
  },
  {
    nombre: "COCA COLA",
    precio: 4500,
    categoria: "Bebidas",
    descripcion: "Bebida 2,25L fría",
    variantes: [
      { id: "coca-cola", sabor: "Original", imagen: "img/coca.jpg", stock: 0, precio: 4500 }
    ]
  },
  {
    nombre: "SPRITE",
    precio: 4500,
    categoria: "Bebidas",
    descripcion: "Refresco lima-limón",
    variantes: [
      { id: "sprite", sabor: "Original", imagen: "img/sprite.jpg", stock: 0, precio: 4500 }
    ]
  },
  {
    nombre: "MANAOS",
    precio: 2000,
    categoria: "Bebidas",
    descripcion: "Gaseosa económica",
    variantes: [
      { id: "manaos-naranja", sabor: "Naranja", imagen: "img/manaos-naranja.jpg", stock: 0, precio: 2000 },
      { id: "manaos-cola", sabor: "Cola", imagen: "img/manaos-cola.jpg", stock: 0, precio: 2000 },
      { id: "manaos-lima", sabor: "Lima", imagen: "img/manaos-lima.jpg", stock: 0, precio: 2000 },
      { id: "manaos-pomelo", sabor: "Pomelo", imagen: "img/manaos-pomelo.jpg", stock: 0, precio: 2000 }
    ]
  },
  {
    nombre: "MILLER",
    precio: 4000,
    categoria: "Bebidas",
    descripcion: "Cerveza rubia fría",
    variantes: [
      { id: "miller", sabor: "Original", imagen: "img/miller.jpg", stock: 0, precio: 4000 }
    ]
  },
  {
    nombre: "BRAHAMA",
    precio: 3500,
    categoria: "Bebidas",
    descripcion: "Cerveza suave",
    variantes: [
      { id: "brahama", sabor: "Original", imagen: "img/brahma.jpg", stock: 0, precio: 3500 }
    ]
  },
  {
    nombre: "TERMIDOR",
    precio: 1900,
    categoria: "Bebidas",
    descripcion: "Vino espumante",
    variantes: [
      { id: "termidor", sabor: "Original", imagen: "img/termidor.jpg", stock: 0, precio: 1900 }
    ]
  },
  {
    nombre: "ALMACEN",
    precio: 0,
    categoria: "Almacen",
    descripcion: "Snack dulce",
    variantes: [
      { id: "almacen", sabor: "General", imagen: "img/galletitas.jpg", stock: 0, precio: 0 }
    ]
  }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let categoriaActual = "Helados";

function mostrarProductos() {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  document.getElementById("categoria-actual").textContent = `Estás viendo: ${categoriaActual}`;

  const filtrados = productos.filter(p => p.categoria === categoriaActual);

  filtrados.forEach((producto, index) => {
    const varianteActual = producto.variantes[0];

    const div = document.createElement("div");
    div.className = "producto";

    div.innerHTML = `
      <div class="carousel ${producto.variantes.length > 1 ? 'tiene-variantes' : ''}" id="carousel-${index}" data-variante="0">
        <img src="${varianteActual.imagen}" class="img-producto" alt="${producto.nombre} - ${varianteActual.sabor}" draggable="false">
      </div>
      <h3>${producto.nombre}</h3>
      <p class="sabor-actual" id="sabor-${index}">${varianteActual.sabor}</p>
      <p class="descripcion">${producto.descripcion}</p>
      <p class="precio" id="precio-${index}">$${varianteActual.precio}</p>
      <p class="stock ${varianteActual.stock > 0 ? '' : 'sin-stock'}" id="stock-${index}">
        ${varianteActual.stock > 0 ? `Stock: ${varianteActual.stock}` : 'Agotado'}
      </p>
      <button
        id="btn-${index}"
        onclick="agregarAlCarrito(${index})"
        ${varianteActual.stock <= 0 ? 'disabled' : ''}
        class="${varianteActual.stock <= 0 ? 'btn-agotado' : ''}"
      >
        ${varianteActual.stock > 0 ? 'Agregar' : 'Sin stock'}
      </button>
    `;

    contenedor.appendChild(div);
    inicializarSwipe(index, producto);
  });
}

function inicializarSwipe(index, producto) {
  const carousel = document.getElementById(`carousel-${index}`);
  let startX = 0;
  let isMouseDown = false;

  const manejarDeslizamiento = (deltaX) => {
    if (Math.abs(deltaX) < 50 || producto.variantes.length <= 1) return;

    let varianteIndex = parseInt(carousel.dataset.variante || 0);

    if (deltaX > 0) {
      varianteIndex = (varianteIndex + 1) % producto.variantes.length;
    } else {
      varianteIndex = (varianteIndex - 1 + producto.variantes.length) % producto.variantes.length;
    }

    actualizarVariante(index, producto, varianteIndex);
  };

  carousel.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    manejarDeslizamiento(startX - endX);
  });

  carousel.addEventListener('mousedown', e => {
    isMouseDown = true;
    startX = e.clientX;
    e.preventDefault();
  });

  carousel.addEventListener('mouseup', e => {
    if (!isMouseDown) return;
    isMouseDown = false;
    manejarDeslizamiento(startX - e.clientX);
  });

  carousel.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });
}

function actualizarVariante(index, producto, varianteIndex) {
  const variante = producto.variantes[varianteIndex];
  const carousel = document.getElementById(`carousel-${index}`);

  carousel.dataset.variante = varianteIndex;

  const imagen = carousel.querySelector('img');
  imagen.src = variante.imagen;
  imagen.alt = `${producto.nombre} - ${variante.sabor}`;

  document.getElementById(`sabor-${index}`).textContent = variante.sabor;
  document.getElementById(`precio-${index}`).textContent = `$${variante.precio}`;

  const stockElement = document.getElementById(`stock-${index}`);
  stockElement.textContent = variante.stock > 0 ? `Stock: ${variante.stock}` : 'Agotado';

  let claseStock = 'sin-stock';
  if (variante.stock > 5) {
    claseStock = 'stock-alto';
  } else if (variante.stock > 0) {
    claseStock = 'stock-bajo';
  }

  stockElement.className = `stock ${claseStock}`;

  const boton = document.getElementById(`btn-${index}`);
  boton.disabled = variante.stock <= 0;
  boton.textContent = variante.stock > 0 ? 'Agregar' : 'Sin stock';
  boton.className = variante.stock > 0 ? '' : 'btn-agotado';
}

function cambiarCategoria(categoria) {
  categoriaActual = categoria;
  mostrarProductos();
}

function agregarAlCarrito(index) {
  const filtrados = productos.filter(p => p.categoria === categoriaActual);
  const producto = filtrados[index];

  const carousel = document.getElementById(`carousel-${index}`);
  const varianteIndex = parseInt(carousel.dataset.variante || 0);
  const variante = producto.variantes[varianteIndex];

  if (variante.stock <= 0) {
    alert('Producto sin stock');
    return;
  }

  const itemExistente = carrito.find(item => item.id === variante.id);

  if (itemExistente) {
    if (itemExistente.cantidad >= variante.stock) {
      alert('No hay más unidades disponibles');
      return;
    }
    itemExistente.cantidad += 1;
  } else {
    carrito.push({
      id: variante.id,
      nombre: producto.nombre,
      sabor: variante.sabor,
      precio: variante.precio,
      cantidad: 1
    });
  }

  guardarCarrito();
  actualizarCarrito();
}

function aumentarCantidad(index) {
  const item = carrito[index];

  let varianteEncontrada = null;

  for (const producto of productos) {
    const variante = producto.variantes.find(v => v.id === item.id);
    if (variante) {
      varianteEncontrada = variante;
      break;
    }
  }

  if (!varianteEncontrada) return;

  if (item.cantidad >= varianteEncontrada.stock) {
    alert('No hay más stock disponible');
    return;
  }

  item.cantidad += 1;
  guardarCarrito();
  actualizarCarrito();
}

function disminuirCantidad(index) {
  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad -= 1;
  } else {
    carrito.splice(index, 1);
  }

  guardarCarrito();
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  actualizarCarrito();
}

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function actualizarCarrito() {
  const lista = document.getElementById('carrito');
  const mensajeVacio = document.getElementById('carrito-vacio');

  lista.innerHTML = '';
  mensajeVacio.textContent = carrito.length === 0 ? 'Tu carrito está vacío' : '';

  let total = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement('li');

    li.innerHTML = `
      ${item.nombre} ${item.sabor ? `(${item.sabor})` : ''}
      <br>
      Cantidad:
      <button onclick="disminuirCantidad(${index})">➖</button>
      ${item.cantidad}
      <button onclick="aumentarCantidad(${index})">➕</button>
      <br>
      Subtotal: $${item.precio * item.cantidad}
    `;

    lista.appendChild(li);
    total += item.precio * item.cantidad;
  });

  document.getElementById('total').textContent = `Total: $${total}`;
}

async function cargarStock() {
  try {
    const respuesta = await fetch(SHEET_CSV_URL);
    const stockData = await respuesta.json();

    stockData.forEach(itemStock => {
      const idSheet = (itemStock.id || '').trim().toLowerCase();
      if (!idSheet) return;

      for (const producto of productos) {
        const variante = producto.variantes.find(v => v.id.toLowerCase() === idSheet);

        if (variante) {
          variante.stock = parseInt(itemStock.stock) || 0;

          if (itemStock.precio) {
            variante.precio = parseInt(itemStock.precio) || variante.precio;
          }

          if (itemStock.img && itemStock.img.trim() !== '') {
            variante.imagen = itemStock.img.trim();
          }

          break;
        }
      }
    });

    mostrarProductos();
    actualizarCarrito();
  } catch (error) {
    console.error('Error al cargar stock:', error);
    mostrarProductos();
    actualizarCarrito();
  }
}

function finalizarPedido() {
  if (carrito.length === 0) {
    alert('El carrito está vacío');
    return;
  }

  const nombre = prompt('Tu nombre:');
  const direccion = prompt('Dirección de entrega:');

  if (!nombre || !direccion) {
    alert('Debes completar tus datos');
    return;
  }

  let mensaje = '🛒 *Nuevo pedido Köa* %0A%0A';

  carrito.forEach(item => {
    mensaje += `• ${item.nombre}`;
    if (item.sabor) mensaje += ` (${item.sabor})`;
    mensaje += ` x${item.cantidad} = $${item.precio * item.cantidad}%0A`;
  });

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  mensaje += `%0ATotal: $${total}%0A%0A`;
  mensaje += `👤 Nombre: ${nombre}%0A`;
  mensaje += `📍 Dirección: ${direccion}`;

  const telefono = '5491136093800';
  const url = `https://wa.me/${telefono}?text=${mensaje}`;

  window.open(url, '_blank');
}

cargarStock();
