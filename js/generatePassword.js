let passwordForm = document.querySelector('form')
let generatedPassword = document.getElementById('password')

function chooseVerb() {
    let chosenVerb = verbs[Math.floor(Math.random() * Math.floor(verbs.length))]
    return chosenVerb.charAt(0).toUpperCase() + chosenVerb.slice(1);
}

function chooseAdverb() {
    return adverbs[Math.floor(Math.random() * Math.floor(adverbs.length))]
}

function chooseDigits() {
    const numOfDigits = 2
    let chosenNum = [] 
    
    for (let i = 0; i < numOfDigits; i++) {
        //Get random number between 0-9
        chosenNum.push(Math.floor(Math.random() * Math.floor(10)))    
    }
    return chosenNum.join('')
}

function generatePassword(characterName, verb, adverb, digits) {
    return characterName + verb + adverb + digits
}

passwordForm.addEventListener('submit', e => {
    e.preventDefault()

    let characterName = document.getElementById('character-name').value
    characterName = characterName.charAt(0).toUpperCase() + characterName.slice(1);

    generatedPassword.innerText = generatePassword(characterName, chooseVerb(), chooseAdverb(), chooseDigits())
})