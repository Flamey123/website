document.addEventListener('DOMContentLoaded', function() {
    const wishlist = [
        {
            name: 'GoPro Hero 10',
            info: 'Actionkamera til å feks filme cubing.',
            link: 'https://www.prisjakt.no/product.php?p=5715775'
        },
        {
            name: 'YJ MGC 7x7 M',
            info: 'Dette er en magnetisk 7x7 cube.',
            link: 'https://mastercubestore.no/yj-moyu/1438-yj-mgc-7x7-magnetic-stickerless-6970774553313.html'
        },
        {
            name: 'Gan Lube II (Light)',
            info: 'Silikonbasert glidemiddel til Rubix cuber. Lav viskositet.',
            link: 'https://mastercubestore.no/gancube/1925-gan-lube-ii-accel-10-ml-light.html'
        },
        {
            name: 'Gan Lube III (Heavy)',
            info: 'Silikonbasert glidemiddel til Rubix cuber. Høy viskositet.',
            link: 'https://mastercubestore.no/gancube/1926-gan-lube-iii-mastery-10-ml-heavy.html'
        },
        {
            name: 'Penger!',
            info: 'Brukes til å betale for produkter og tjenester :-D'
            link: 'https://no.wikipedia.org/wiki/Norsk_krone'
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

        if (product.link != ''); {
            const productLink = document.createElement('a');
            productLink.href = product.link;
            productLink.textContent = 'Finn pris';
            productLink.target = '_blank';
            productElement.appendChild(productLink);
        }

        wishlistContainer.appendChild(productElement);
    });
});
