// store info about olympians and their signs
function zodiac (){}



const olympians = [

    {
        name: 'Zeus',
        sign: 'Taurus',
        description: ''
        campers:'Jason Grace', 'Thalia Grace',
    }
    {
        name: 'Hera',
        sign: 'Capricorn',
        description:''
    }
    {
        name: 'Poseidon'
        sign: 'Pisces'
        description:
        campers:'Percy Jackson'
    }
    {
        name: 'Demeter'
        sign: 'Virgo'
        description:
        campers: 'Meg McCaffrey',
    }
    {
        name: 'Ares',
        sign: 'Aries,
        description: 'heyyyy',
        campers: 'Clarisse LaRue','Frank Zhang' 'images/aries.png',
    }
    {
        name:
        sign:
        description:
        campers:
    }

];

let currentSign = null;


function displayZodiacSign(name) {
    const zodiacContainer = document.getElementById('zodiacContainer');
    zodiacContainer.innerHTML = ''; // Clear existing content

    const sign = zodiacSigns[name];

    if (sign) {
        const zodiacCard = document.createElement('div');
        zodiacCard.classList.add('zodiac-card');

        const image = document.createElement('img');
        image.src = sign.image;
        image.alt = sign.sign;
        image.classList.add('zodiac-image');

        const displayName = document.createElement('h3');
        displayName.textContent = sign.name;

        const description = document.createElement('p');
        description.textContent = sign.description;

        zodiacCard.appendChild(image);
        zodiacCard.appendChild(displayName);
        zodiacCard.appendChild(description);

        zodiacContainer.appendChild(zodiacCard);
    }
}





//linking date code to the olympian
const olympian = {};

if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    olympian = 'Hera'
} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    olympian = 'Sagittarius'
} else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    olympian = 'Scorpio'
} else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    olympian = 'Libra'
} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    olympian = 'Virgo'
} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    olympian = 'Leo'
} else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    olympian = 'Artemis'
} else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    olympian = 'Hermes'
} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    olympian = 'Taurus'
} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    olympian = 'Ares'
} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    olympian = 'Poseidon'
} else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    olympian = 'Athena'
}


console.log (olympian);



