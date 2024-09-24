/*
    ---------------------------------------------------
    Endrar bakgrunnsfarge vha. RGB (t.d. rgb(0,244,124)
    ---------------------------------------------------
*/

function endreBakgrunnsfargeRGB() {
    let fargeRGB = tilfeldigFargeRGB();
    document.body.style.backgroundColor = fargeRGB;
}

function tilfeldigFargeRGB() {
    var R = getRandomIntInclusive(0,255);
    var G = getRandomIntInclusive(0,255);
    var B = getRandomIntInclusive(0,255);
    var rgbString = "rgb(" + R + ", " + G + ", " + B + ")";
    return rgbString;
}

/*
    --------------------------------------------------------------------------------------
    Funksjon som returnerer tilfeldige tal mellom low (lågaste tal) og high (høgaste tal).
    --------------------------------------------------------------------------------------
*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

/*
    ----------------------------------------------------------------------
    Delen av koden som får fargeendringane til å skje ved faste intervall.
    ----------------------------------------------------------------------
*/
let tidsintervall = 3000;
let fargeEndring; // Namnet på interval som endrar farge

function oppstart(tidsintervall) {
    clearInterval(fargeEndring);
    fargeEndring = setInterval(function() {
        endreBakgrunnsfargeRGB();
    }, tidsintervall);
    console.log("Endrar tidsintervall til: " + tidsintervall);
}

oppstart(tidsintervall);

/*
    ------------------------------
    Dersom du trykker på i-knappen på tastaturet, 
    skal ein promp opnast for å be deg om eit nytt intervall.
    ------------------------------
*/

document.addEventListener('keydown', function(event) {
    if (event.key === 'i' || event.key === 'I') {
        let nyttIntervall = prompt("Skriv inn nytt tidsintervall i millisekund:");
        if (nyttIntervall !== null) {
            tidsintervall = parseInt(nyttIntervall);
            if (!isNaN(tidsintervall) && tidsintervall > 0) {
                oppstart(tidsintervall);
                oppdaterTransitionTid(tidsintervall);
            } else {
                alert("Ugyldig intervall. Ver venleg å skrive inn eit positivt heiltal.");
            }
        }
    }
});

function oppdaterTransitionTid(tidsintervall) {
    // Halvparten av tidsintervallet i sekunder
    let transitionTid = (tidsintervall / 2) / 1000;
    document.body.style.transition = `background-color ${transitionTid}s ease`;
}

/*
    Fjernar informasjonsteksten om å endre tidsintervall etter 5 sekund.
*/
setTimeout(function() {
    document.querySelector(".temp").style.display = "none";
}, 5000);