const olympianInfo = {
    zeus: {
        name: 'Zeus',
        sign: 'Taurus',
        description: 'King of the Gods',
        campers:['Jason Grace', 'Thalia Grace'],
        sound: 'sounds/zeus.mp3',
        images: <img src='images/jason.webp' src='images/thalia.webp' alt=""/> ['images/jason.webp', 'images/thalia.webp']
    },
    hera: {
        name: 'Hera',
        sign: 'Capricorn',
        description:'Queen of the Gods',
        sound: 'sounds/hera.mp3',
        images: [],
    },
    poseidon: {
        name: 'Poseidon',
        sign: 'Pisces',
        description:'God of the Sea',
        campers:['Percy Jackson', 'Tyson'],
        sound: 'sounds/poseidon.mp3',
        images: ['images/percy.webp', 'images/tyson.webp']
    },
    demeter: {
        name: 'Demeter',
        sign: 'Virgo',
        description:'Goddess of the Harvest',
        campers:'Meg McCaffrey',
        sound: 'sounds/demeter.mp3',
        images: 'images/meg.webp',
    },
    ares: {
        name: 'Ares',
        sign: 'Aries',
        description: 'God of War',
        campers: 'Clarisse LaRue, Frank Zhang',
        sound: 'sounds/ares.mp3',
        images: ['images/clarisse.webp', 'images/frank.webp']
    },
    athena: {
        name: 'Athena',
        sign: 'Aquarius',
        description: 'Goddess of Wisdom',
        campers: 'Annabeth Chase',
        sound: 'sounds/athena.mp3',
        images: 'images/annabeth.webp',
    },
    apollo: {
        name: 'Apollo',
        sign: 'Leo',
        description: 'God of the Sun',
        campers: 'Will Solace, Kayla Knowles, Austin Lake',
        sound: 'sounds/apollo.mp3',
        images: ['images/will.webp', 'images/kayla.webp', 'images/austin.webp']
    },
    artemis:{
        name: 'Artemis',
        sign: 'Cancer',
        description: 'Goddess of the Moon',
        campers: 'Thalia Grace',
        sound: 'sounds/artemis.mp3',
        images: 'images/thalia.webp',
    },
    hephaestus: {
        name: 'Hephaestus',
        sign: 'Scorpio',
        description: 'God of Craftsmen and Fire',
        campers: 'Leo Valdez, Charles Beckendorf,',
        sound: 'sounds/hephaestus.mp3',
        images: ['images/leo.webp', 'images/charles.webp', 'images/harley.webp']
    },
    aphrodite: {
        name: 'Aphrodite',
        sign: 'Libra',
        description: 'Goddess of Love',
        campers: 'Piper McLean, Silena Beauregard',
        sound: 'sounds/aphrodite.mp3',
        images: ['images/piper.webp', 'images/silena.webp']
    },
    hermes: {
        name: 'Hermes',
        sign: 'Gemini',
        description: 'God of Travel',
        campers: 'Luke Castellan, Travis and Connor Stoll',
        sound: 'sounds/hermes.mp3',
        images: ['images/luke.webp', 'images/travis_and_connor.webp']
    },
    dionysus: {
        name: 'Dionysus',
        sign: 'Sagittarius',
        description: 'God of Wine',
        sound: 'sounds/dionysus.mp3',
        images: []
    },
};

function calculateOlympian() {
    let selectedDate = document.getElementById("birthday").value;
    if (selectedDate) {
        const birthdate = new Date(selectedDate);
        const month = birthdate.getMonth() + 1;
        const day = birthdate.getDate();
        const olympian = getOlympian(month, day);
        calendarOlympianInfo(olympian);
    } else {
        document.getElementById("result").innerHTML = "Please put in your birthday!";
    }
}

function calendarOlympianInfo(olympian) {
    const demigodInfo = olympianInfo.olympian;      //demigod remains undefined OR no values stored
    console.log("Received god:", olympian);
    console.log("God info:", demigodInfo);
    const dgaudio = new Audio();
    dgaudio.src = olympian.sound; // Set the audio source
    dgaudio.play();
    document.getElementById("result").innerText = `
        ${olympian.name}\n
        ${demigodInfo.sign}\n
        ${demigodInfo.description}\n
        ${demigodInfo.campers || 'Empty cabin!'}\n
        ${demigodInfo.images || 'No campers yet!'}
    `;
// }
// //<div id="imageContainer"></div>
//   // Function to display images

//     function displayImages() {
//         const container = document.getElementById("imageContainer");
//         imagePaths.forEach(path => {
//             const img = document.createElement("img");
//             img.src = path;
//             img.alt = "Image";
//             container.appendChild(img);
    // });
}





function displayOlympianInfo(olympian) {
    const godInfo = olympianInfo[olympian];
    const audio = new Audio();
    const container = document.getElementById("imageContainer");
 
    audio.src = godInfo.sound; // Set the audio source
    audio.play(); // Play the audio
   // images.src = godInfo.images;
        console.log("Received god:", olympian);
        // Display the information for the selected Greek god
        console.log("God info:", godInfo);
        document.getElementById("result").innerText = `
            ${godInfo.name}\n
            ${godInfo.sign}\n
            ${godInfo.description}\n
            ${godInfo.campers || 'Empty cabin!'}\n
            ${godInfo.images || 'No campers yet!'}
            ${godInfo.images.length > 0 ? '' : 'No images available!'}

        `;
        
        if (godInfo.images && godInfo.images.length > 0) {
            godInfo.images.forEach(imageSrc => {
                const img = document.createElement("img");
                img.src = imageSrc;
                container.appendChild(img); });
            }
        // const imagePaths = godInfo.images;
        // function displayImages() {
        //     const container = document.getElementById("imageContainer");
        //         imagePaths.forEach(path => {
        //         const img = document.createElement("img");
        //         img.src = path;
        //         img.alt = "Image"
        //         container.appendChild(img);
            // });
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
