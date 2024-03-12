
const olympianInfo = {
    
    zeus: {
        name: 'Zeus',
        sign: 'Taurus',
        description: 'King of the Gods',
        campers:'Jason Grace, Thalia Grace', 
    },
    hera: {
        name: 'Hera',
        sign: 'Capricorn',
        description:'Queen of the Gods',
    },
    poseidon: {
        name: 'Poseidon',
        sign: 'Pisces',
        description:'God of the sea',
        campers:'Percy Jackson',
    }

};
// event listeners to see if someone clicks a cabin and call respective info
document.getElementById("zeus").addEventListener("click", () => displayOlympianInfo('zeus'));
document.getElementById("hera").addEventListener("click", () => displayOlympianInfo('hera'));


function calculateOlympian() {
    let selectedDate = document.getElementById("birthday").value;
    if (selectedDate) {
        const birthdate = new Date(selectedDate);
        const month = birthdate.getMonth() + 1; 
        const day = birthdate.getDate();

        const olympian = getOlympian(month, day);
        displayOlympianInfo(olympian);
    } else {
        // if there's no birthday and the user presses lets go, they get a response
        document.getElementById("result").innerHTML = "Please put in your birthday!";
    }

    function displayOlympianInfo(god) {
        // Display the information for the selected Greek god
        const godInfo = olympianInfo[god];
        document.getElementById("result").innerHTML = `
            Olympian: ${godInfo.name}<br>
            Sign: ${godInfo.sign} <br>
            Description: ${godInfo.description} <br>
            Campers: ${godInfo.campers || 'None'}
        `;
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
}