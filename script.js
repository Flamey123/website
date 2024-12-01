document.addEventListener('DOMContentLoaded', function() {
    const wishlist = [
        {
            name: 'GoPro Stativ',
            info: 'Stativ til GoPro.',
            link: 'https://www.elkjop.no/product/sport-hobby-og-fritid/kamera-og-foto/kameratilbehor/tripod-til-kamera/fleksibelt-stativ-4i1-gopro-hero/60281'
        },
        {
            name: 'Nerdforge Chreative Chaos Journal',
            info: 'Tegnebok med et spesielt design som kommer fra et YouTube par i Norge.',
            link: 'https://nerdforge.store/p/7918888485055'
        },
        {
            name: 'One Piece Vol.3 Omnibus Edition',
            info: 'Dette er en 3 i 1 bok med 3 bøker fra en manga(manga er japansk tegneserie).',
            link: 'https://www.outland.no/one-piece-3-in-1-7-8-9'
        },
        {
            name: 'HoloNova Fan',
            info: 'Dette er en vifte som kan vise bilder og videoer i fin kvalitet. Hvis du skal kjøpe dette må du trykke på der det står "Plug type", og velge EU plug.',
            link: 'https://holonova.store'
        },
        {
            name: 'ASTRO Bot PS5',
            info: 'Dette er et spill til PlayStation 5.',
            link: 'https://www.elkjop.no/product/gaming/spill/nordisk-film-1000044860-game/788518'
        },
        {
            name: 'VBucks/Robux',
            info: 'Dette er en valutta som kan bli brukt i Fortnite og ROBLOX. Man kan bare overføre penger til Morten eller Silje så blir det fikset senere.',
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
