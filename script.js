document.addEventListener('DOMContentLoaded', function() {
    const wishlist = [
        {
            name: 'Haven tent Spectre',
            info: 'Dette er en luksus hengekøye som føles som et svevende mini telt. Når man skal kjøpe, husk på liggeunderlag, R5, istedenfor R2,5.',
            link: 'https://www.magasinet.no/haven-tent-spectre-xl-hengekoye-valgfritt-liggeunderlag'
        },
        {
            name: 'Haven Whoopie slings',
            info: 'Dette er et tilbehør til haven tent som skal gjøre det letter å justere hengekøya.',
            link: 'https://www.magasinet.no/haven-tent-whoopie-slings-feste-til-hengekoye-green'
        },
        {
            name: 'Penger!',
            info: 'Brukes til å betale for produkter og tjenester :-D'
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

        if (product.link) {
            const productLink = document.createElement('a');
            productLink.href = product.link;
            productLink.textContent = 'Finn pris';
            productLink.target = '_blank';
            productElement.appendChild(productLink);
        }

        wishlistContainer.appendChild(productElement);
    });
});
