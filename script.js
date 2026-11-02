document.addEventListener('DOMContentLoaded', function() {
    const wishlist = [
        {
            name: 'Haven tent Spectre',
            info: 'Dette er en luksus hengekøye som føles som et svevende mini telt. Når man skal kjøpe, husk på liggeunderlag, R5, istedenfor R2,5',
            link: 'https://www.magasinet.no/haven-tent-spectre-xl-hengekoye-valgfritt-liggeunderlag'
        },
        {
            name: 'Haven Whoopie slings',
            info: 'Dette er et tilbehør til haven tent som skal gjøre det letter å justere hengekøya',
            link: 'https://www.magasinet.no/haven-tent-whoopie-slings-feste-til-hengekoye-green'
        },
         {
            name: 'Space marine captain with jump pack and relic shield',
            info: 'Dette er en warhammer space marine captain modell med en jump pack. Alternativ til kjøp-knappen: https://gamezone.no/warhammer/166930/space-marines-captain-jump-pack--and--relic-shield-warhammer-40k',
            link: 'https://www.outland.no/p/p-space-marines-captain-w-jump-pack-relic-shield-warhammer-40000-5011921265619'
        },
        
            name: 'Space marine jump pack intercessor squad',
            info: 'Dette er en squad med 5 warhammer space marine modeller med jump packs. Alternativ til kjøp-knappen: https://www.outland.no/p/p-jump-pack-intercessors-5011921200498',
            link: 'https://gamezone.no/warhammer/157634/space-marines-jump-pack-intercessors-warhammer-40k'
        },
                          
            name: 'Space marine terminator assault squad',
            info: 'Dette er en squad med 5 warhammer space marine terminator modeller med nærkamps-våpen. Alternativ til kjøp-knappen: https://www.outland.no/p/p-space-marines-terminator-assault-squad-warhammer-40000-5011921248773',
            link: 'https://gamezone.no/warhammer/167177/space-marines-terminator-assault-squad'
        },

            name: 'Space marine captain in terminator armour',
            info: 'Dette er en warhammer space marine captain modell i terminator armour. Alternativ til kjøp-knappen: https://www.outland.no/p/p-captain-in-terminator-armour-warhammer-40000-5011921201327',
            link: 'https://gamezone.no/warhammer/158603/space-marines-captain-terminator-armour-warhammer-40k'
        },

            name: 'Kill team: Scout squad',
            info: 'Dette er en squad med 10 warhammer space marine neophyte modeller. Alternativ til kjøp-knappen: https://www.outland.no/p/p-kill-team-scout-squad-warhammer-40000-kill-team-5011921229031',
            link: 'https://gamezone.no/warhammer/162148/kill-team-scout-squad-warhammer-40k'
        },

            name: 'Space marine land raider redeemer/crusader',
            info: 'Dette er et warhammer space marine kjøretøy med våpen og transport til andre space marine modeller. Den kan bygges som to varianter. Alternativ til kjøp-knappen: https://www.outland.no/p/land-raider-crusader-redeemer',
            link: 'https://gamezone.no/warhammer/121302/space-marine-land-raider-crusader-warhammer-40k-redeemer'
        },

            name: 'Space marine librarian in phobos armour',
            info: 'Dette er en warhammer space marine modell som spesialiserer i bevegelse og magiske krefter. Alternativ til kjøp-knappen: https://www.outland.no/p/primaris-librarian-in-phobos-armour-5011921142095',
            link: 'https://gamezone.no/warhammer/142432/space-marines-primaris-librarian-phobos-in-phobos-armour-warhammer-40k'
        },

            name: 'Space marine reiver squad',
            info: 'Dette er en squad med 10 warhammer space marine modeller som spesialiserer i bevegelse. Alternativ til kjøp-knappen: https://www.outland.no/p/adeptus-astartes-primaris-reivers-5011921085583',
            link: 'https://gamezone.no/warhammer/132209/space-marines-primaris-reiver-squad-warhammer-40k'
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
