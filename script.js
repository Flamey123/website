document.addEventListener('DOMContentLoaded', function() {
    const wishlist = [
        {
            name: 'Product 1',
            info: 'This is a great product.',
            link: 'https://example.com/product1'
        },
        {
            name: 'Product 2',
            info: 'This is another great product.',
            link: 'https://example.com/product2'
        },
        // Add more products here
    ];

    const wishlistContainer = document.getElementById('wishlist');

    wishlist.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'wishlist-item';

        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productElement.appendChild(productName);

        const productInfo = document.createElement('p');
        productInfo.textContent = product.info;
        productElement.appendChild(productInfo);

        const productLink = document.createElement('a');
        productLink.href = product.link;
        productLink.textContent = 'Buy Now';
        productLink.target = '_blank';
        productElement.appendChild(productLink);

        wishlistContainer.appendChild(productElement);
    });
});
