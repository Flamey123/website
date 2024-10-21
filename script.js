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
            info: 'Silikonbasert glidemiddel til Rubiks cuber. Lav viskositet.',
            link: 'https://mastercubestore.no/gancube/1925-gan-lube-ii-accel-10-ml-light.html'
        },
        {
            name: 'Gan Lube III (Heavy)',
            info: 'Silikonbasert glidemiddel til Rubiks cuber. Høy viskositet.',
            link: 'https://mastercubestore.no/gancube/1926-gan-lube-iii-mastery-10-ml-heavy.html'
        },
        {
            name: 'Nerdforge Chreative Chaos Journal',
            info: 'Tegnebok med et spesielt design som kommer fra et YouTube par i Norge.',
            link: 'https://nerdforge.store/p/7918888485055'
        },
        {
            name: 'Labyrint Duell Spill',
            info: 'Brettspill for 2 spillere som handler om å slide brikker til riktig plass.',
            link: 'https://www.finn.no/bap/forsale/ad.html?finnkode=349490765&ci=6'
        },
        {
            name: 'One Piece Vol.2',
            info: 'Dette er den andre boka i en mangaserie(manga er japansk tegneserie).',
            link: 'https://www.outland.no/one-piece-2'
        },
        {
            name: 'One Piece Vol.3',
            info: 'Dette er den tredje boka i en mangaserie(manga er japansk tegneserie).',
            link: 'https://www.outland.no/one-piece-3'
        },
        {
            name: 'One Piece Vol.2 Omnibus Edition',
            info: 'Dette er en 3 i 1 bok med 3 bøker fra en manga(manga er japansk tegneserie).',
            link: 'https://www.outland.no/one-piece-3-in-1-4-5-6'
        },
        {
            name: 'HoloNova Fan',
            info: 'Dette er en vifte som kan vise bilder og videoer i fin kvalitet. Hvis du skal kjøpe dette må du trykke på der det står "Plug type", og velge EU plug.',
            link: 'https://holonova.store'
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
