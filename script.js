console.log ('Labas, Pasauli!')

document.addEventListener
("DOMContentLoaded", () => {
    const button = document.getElementById('myButton');

    button.addEventListener('click', () => {
        alert('Labas, gerasis žmogau! Džiugu, kad paspaudei, esi nuostabus, o dabar padarykim kartu, kad ir aplinka būtų nuostabi! Spausk "Gerai" ir pradedam.')
    });
})
