const olympianInfo = {
    
    zeus: {
        name: 'Zeus',
        sign: 'Taurus',
        description: 'King of the Gods',
        campers:['Jason Grace', 'Thalia Grace'],
        images: ['images/jason.webp', 'images/thalia.webp']
    },
    hera: {
        name: 'Hera',
        sign: 'Capricorn',
        description:'Queen of the Gods',
    },
    poseidon: {
        name: 'Poseidon',
        sign: 'Pisces',
        description:'God of the ea',
        campers:'Percy Jackson',
    },
    demeter: {
        name: 'Demeter',
        sign: 'Virgo',
        description:'Goddess of the Harvest',
        campers:'Meg McCaffrey',
    },
    ares: {
        name: 'Ares',
        sign: 'Aries',
        description: 'God of War',
        campers: 'Clarisse LaRue, Frank Zhang',
    },
    athena: {
        name: 'Athena',
        sign: 'Aquarius',
        description: 'Goddess of Wisdom',
        campers: 'Annabeth Chase',
    },
    apollo: {
        name: 'Apollo',
        sign: 'Leo',
        description: 'God of the Sun',
        campers: 'Will Solace, Kayla Knowles, Austin Lake',
    },
    artemis:{
        name: 'Artemis',
        sign: 'Cancer',
        description: 'Goddess of the Moon',
        campers: 'Thalia Grace',
    },
    hephaestus: {
        name: 'Hephaestus',
        sign: 'Scorpio',
        description: 'God of Craftsmen and Fire',
        campers: 'Leo Valdez, Charles Beckendorf,',
    },
    aphrodite: {
        name: 'Aphrodite',
        sign: 'Libra',
        description: 'Goddess of Love',
        campers: 'Piper McLean, Silena Beauregard',
    },
    hermes: {
        name: 'Hermes',
        sign: 'Gemini',
        description: 'God of Travel',
        campers: 'Luke Castellan, Travis and Connor Stoll',
    },
    dionysus: {
        name: 'Dionysus',
        sign: 'Sagittarius',
        description: 'God of Wine',
    },
};
console.log()

function calculateOlympian() {
    let selectedDate = document.getElementById("birthday").value;
    if (selectedDate) {
        const birthdate = new Date(selectedDate);
        const month = birthdate.getMonth() + 1;
        const day = birthdate.getDate();
        const olympian = getOlympian(month, day);
        displayOlympianInfo(olympian);
    } else {
        document.getElementById("result").innerHTML = "Please put in your birthday!";
    }
}

function displayOlympianInfo(god) {
        console.log("Received god:", god);
        // Display the information for the selected Greek god
        const godInfo = olympianInfo[god];
        console.log("God info:", godInfo);
        console.log("God name:", godInfo.name);
        document.getElementById("result").innerText = `
            ${godInfo.name}\n
            ${godInfo.sign}\n
            ${godInfo.description}\n
            ${godInfo.campers || 'None'}\n
            ${godInfo.images || 'None'}
        `;
        // \n is equivalent to a break tag
}

//function to find olympian
function getOlympian (month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return 'Hera';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return 'Dionysus';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        return 'Hephaestus'
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        return 'Aphrodite'
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return 'Demeter'
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return 'Apollo'
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        return 'Artemis'
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        return 'Hermes'
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return 'Zeus'
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return 'Ares'
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return 'Poseidon'
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return 'Athena'
    }
}



// event listeners to see if someone clicks a cabin and call respective info
document.getElementById("zeus").addEventListener("click", () => displayOlympianInfo('zeus'));
document.getElementById("hera").addEventListener("click", () => displayOlympianInfo('hera'));
document.getElementById("poseidon").addEventListener("click", () => displayOlympianInfo('poseidon'));
document.getElementById("demeter").addEventListener("click", () => displayOlympianInfo('demeter'));
document.getElementById("ares").addEventListener("click", () => displayOlympianInfo('ares'));
document.getElementById("athena").addEventListener("click", () => displayOlympianInfo('athena'));
document.getElementById("apollo").addEventListener("click", () => displayOlympianInfo('apollo'));
document.getElementById("artemis").addEventListener("click", () => displayOlympianInfo('artemis'));
document.getElementById("hephaestus").addEventListener("click", () => displayOlympianInfo('hephaestus'));
document.getElementById("aphrodite").addEventListener("click", () => displayOlympianInfo('aphrodite'));
document.getElementById("hermes").addEventListener("click", () => displayOlympianInfo('hermes'));
document.getElementById("dionysus").addEventListener("click", () => displayOlympianInfo('dionysus'));



// event listener for the lets go button
document.getElementById("calculate").addEventListener("click", () => calculateOlympian());
