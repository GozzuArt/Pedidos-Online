document.addEventListener("DOMContentLoaded", () => {
    const items = [
        { id: "cono", name: "Cono Crocante", price: 1000 },
        { id: "cono-blanco", name: "Cono Blanco", price: 1200 },
        { id: "pico-rico", name: "Pico Rico", price: 300 },
        { id: "pico-rico-especial", name: "Pico Rico Especial", price: 300 },
        { id: "acapulco-agua-naranja-uva", name: "Acapulco Agua (Naranja y Uva)", price: 300 },
        { id: "acapulco-agua-uva-frutilla", name: "Acapulco Agua (Uva y Frutilla)", price: 300 },
        { id: "acapulco-crema-chocolate", name: "Acapulco Crema (Chocolate)", price: 400 },
        { id: "acapulco-crema-vainilla", name: "Acapulco Crema (Vainilla)", price: 400 },
        { id: "bombon", name: "Bombón", price: 500 },
        { id: "sombrero", name: "Sombrero", price: 500 },
    ];

    const totalElement = document.getElementById("total");
    const orderButton = document.getElementById("orderButton");
    const metodoEntrega = document.getElementById("metodo-entrega");
    const nombreInput = document.getElementById("nombre");
    const direccionInput = document.getElementById("direccion");

    function calculateTotal() {
        let total = 0;

        // Calcular el total basado en los productos seleccionados
        items.forEach(item => {
            const quantity = parseInt(document.getElementById(item.id)?.value) || 0;
            total += quantity * item.price;
        });

        // Añadir costo de entrega si aplica
        if (metodoEntrega.value === "domicilio") {
            total += 600;
        }

        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    function generateOrderMessage() {
        const nombre = nombreInput.value.trim();
        if (!nombre) {
            alert("Por favor, ingresa tu nombre.");
            return null;
        }

        let message = `¡Hola! Soy ${nombre} y quiero realizar un pedido:\n\n`;

        // Generar detalles del pedido
        items.forEach(item => {
            const quantity = parseInt(document.getElementById(item.id)?.value) || 0;
            if (quantity > 0) {
                message += `- ${item.name} x${quantity}\n`;
            }
        });

        // Añadir tipo de entrega
        const metodo = metodoEntrega.value === "domicilio" ? "Entrega a domicilio (+600)" : "Retirar en tienda";
        message += `\nMétodo de entrega: ${metodo}`;

        // Añadir dirección si aplica y está completa
        if (metodoEntrega.value === "domicilio" && direccionInput.value.trim()) {
            message += `\nDirección: ${direccionInput.value.trim()}`;
        }

        // Añadir el total
        const total = totalElement.textContent;
        message += `\n\nTotal: ${total}`;

        return message;
    }

    // Escuchar cambios en los inputs para actualizar el total
    items.forEach(item => {
        const input = document.getElementById(item.id);
        if (input) {
            input.addEventListener("input", calculateTotal);
        }
    });

    // Escuchar cambios en el método de entrega
    metodoEntrega.addEventListener("change", calculateTotal);

    // Manejar el botón de pedido
    orderButton.addEventListener("click", () => {
        const message = generateOrderMessage();
        if (message) {
            const whatsappLink = `https://wa.me/541138599611?text=${encodeURIComponent(message)}`;
            window.open(whatsappLink, "_blank");
        }
    });

    // Inicializar el total al cargar la página
    calculateTotal();
});
