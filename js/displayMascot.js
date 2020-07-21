let mascot = document.getElementById('mascot')

let images = 10

function displayMascot(image) {
    let body = document.querySelector('body')
    mascot.src = `images/${image}.png`
    switch (image) {
        case 1:
            body.style.backgroundColor = '#89DE7F'
            break;
        case 2: 
            body.style.backgroundColor = '#CB3242'
            break;
        case 3: 
            body.style.backgroundColor = '#E6D3C5'
            break;
        case 4: 
            body.style.backgroundColor = '#29459B'
            break;
        case 5:
            body.style.backgroundColor = '#BD7C30'
            break;
        case 6: 
            body.style.backgroundColor = '#CC5156'
            break;
        case 7: 
            body.style.backgroundColor = '#1B0208'
            break;
        case 8: 
            body.style.backgroundColor = '#525968'
            break;
        case 9: 
            body.style.backgroundColor = '#9880BF'
            break;
        case 10: 
            body.style.backgroundColor = '#787877'
            break;
        }
}

displayMascot(Math.floor(Math.random() * Math.floor(images) + 1))