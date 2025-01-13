const cart = [];

function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        alert('${product.title} has been added to your cart!');
    }
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
});

// Sort by price functionality
document.getElementById('sort-price').addEventListener('click', function() {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    renderProducts(sortedProducts);
});

// Initial rendering of products
renderProducts(products);