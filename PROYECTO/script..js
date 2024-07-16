document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form');
    const productList = document.getElementById('product-list');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const price = document.getElementById('price').value;
            const size = document.getElementById('size').value;
            const quantity = document.getElementById('quantity').value;

            const product = {
                name,
                price,
                size,
                quantity
            };

            let products = JSON.parse(localStorage.getItem('products')) || [];
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));

            form.reset();
            alert('Producto registrado exitosamente');
        });
    }

    if (productList) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${product.name}, Precio: $${product.price}, Talla: ${product.size}, Cantidad: ${product.quantity}`;
            productList.appendChild(li);
        });
    }
});
