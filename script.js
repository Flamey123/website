document.addEventListener('DOMContentLoaded', function() {
    const wishlist = [
        {
            name: 'Nintendo Switch 2 med Mario Kart World',
            info: 'Dette er oppfølgeren til den populære spillkonsollen "Nintendo Switch" i en bundle med det nye Mario Kart spillet.',
            link: 'https://www.prisjakt.no/product.php?p=14576269'
        },
        {
            name: 'Demon Slayer: The Hinokami Chronicles 2 (Switch 2)',
            info: 'Dette er et spill basert på en anime som heter demon slayer. Det er et fighting arena spill til Nintendo Switch 2.',
            link: 'https://www.nintendo.com/us/store/products/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-2-deluxe-edition-switch/'
        },
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
            name: 'Dayan Guhong Pro Maglev M 54MM',
            info: 'Dette er en Speedcube som er mindre enn vanlig som gjør den bedre for enhånds løsning.',
            link: 'https://mastercubestore.no/dayan/2172-dayan-guhong-pro-maglev-m-54mm-stickerless-6934874501209.html'
        },
        {
            name: 'The Cubicle hard shell cube case',
            info: 'Dette er nesten som en mini koffert til å ha kuber i når man skal på konkurannser eller turer. Når du skal betale kan du få 7% rabbat på din første bestilling, men du kan også få 5% mer rabatt ved å bruke rabattkode "Tingman". Denne koden tilhører en sto kube YouTuber i Australia.',
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
