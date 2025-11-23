document.addEventListener('DOMContentLoaded', function() {
    const wishlist = [
        {
            name: 'SteelSeries Arctis GameBuds',
            info: 'Ørepropper som er bra for gaming spesielt for prisen. Nå er den på stort tilbud til Black Friday men de er kanskje ikke det etter denne oppdateringen.',
            link: 'https://www.prisjakt.no/product.php?p=13877828'
        },
        {
            name: 'Demon Slayer: The Hinokami Chronicles 2 (PS5)',
            info: 'Dette er et spill basert på en anime som heter demon slayer. Det er et fighting arena spill til PS5.',
            link: 'https://www.prisjakt.no/product.php?p=14503095'
        },
        {
            name: 'Moyu Weilong Skewb',
            info: 'Dette er en type Rubiks cube som har en rar måte å vri på som heter en "Skewb".',
            link: 'https://mastercubestore.no/yj-moyu/1957-moyu-weilong-skewb-maglev-stickerless-6970647060863.html'
        },
         {
            name: 'Killteam approved ops misson pack 2025',
            info: 'En bunke med kort som er lurt å ha når man spiller missions i Warhammer 40 000: Killteam.',
            link: 'https://www.warhammer.com/en-NO/shop/kill-team-approved-ops-cards-eng-2025?queryID=6a917567d680751643361e4229d92f43'
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
            name: 'Dayan Guhong Pro Maglev M 54MM',
            info: 'Dette er en Speedcube som er mindre enn vanlig som gjør den bedre for enhånds løsning.',
            link: 'https://mastercubestore.no/dayan/2172-dayan-guhong-pro-maglev-m-54mm-stickerless-6934874501209.html'
        },
        {
            name: 'Cubeguard Cube Case',
            info: 'Dette er en liten koffert for kuber sånn at det blir lettere å ta med seg kuber til f. eks konkurannser. Når du skal betale kan du bruke en rabatt kode som tilhører den beste Rubiks cube løseren i Norge. Koden er "KR". ',
            link: 'https://www.thecubicle.com/en-no/collections/backpacks/products/cubicle-hard-shell-cube-case'
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
