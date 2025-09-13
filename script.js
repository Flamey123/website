document.addEventListener('DOMContentLoaded', function() {
    const wishlist = [
        {
            name: 'YJ MGC Square-1',
            info: 'Dette er en rar type Rubiks cube som endrer form med navnet "Square-1". Når du skal betale kan du bruke en rabatt kode som tilhører den beste Rubiks cube løseren i Norge. Koden er "KR".',
            link: 'https://nordicube.no/products/yj-mgc-square-1-m?_pos=4&_psq=mgc&_ss=e&_v=1.0'
        },
        {
            name: 'Moyu Weilong Skewb',
            info: 'Dette er en type Rubiks cube som har en rar måte å vri på som heter en "Skewb".',
            link: 'https://mastercubestore.no/yj-moyu/1957-moyu-weilong-skewb-maglev-stickerless-6970647060863.html'
        },
        {
            name: 'QiYi Clock',
            info: 'Dette er et Rubiks Pusslespill der målet er å få alle klokkene til å peke opp. Når du skal betale kan du bruke en rabatt kode som tilhører den beste Rubiks cube løseren i Norge. Koden er "KR". Hvis den ikke allerede er valgt, vil jeg helst ha Lilac fargen. Den kinesiske limited fargen er ikke lov i offisielle konkurannser.',
            link: 'https://nordicube.no/products/qiyi-magnetic-clock?variant=46383443542233'
        },
        {
            name: 'VIN Cube 5x5',
            info: 'Dette er en ganske billig 5x5 Rubiks cube med ganske premium følelse. Når du skal betale kan du bruke en rabatt kode som tilhører den beste Rubiks cube løseren i Norge. Koden er "KR".',
            link: 'https://nordicube.no/products/vin-cube-5x5-m-uv'
        },
        {
            name: 'ASTRO Bot PS5',
            info: 'Dette er et spill til PlayStation 5.',
            link: 'https://www.elkjop.no/product/gaming/spill/nordisk-film-1000044860-game/788518'
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
