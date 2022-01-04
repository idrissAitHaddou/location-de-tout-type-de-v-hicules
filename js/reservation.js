
// **--------------------- CONSTANTS ---------------------------

const duree = document.getElementById("duree");
const carburant = document.getElementById("carburant");
const selectType = document.getElementById("type");
const selectVetess = document.getElementById("vitesse");
const showErrors = document.getElementById("showErrors");
const btnSubmit = document.getElementById("btnSubmit");

// **--------------------- WHEN WINDOW LOADING ---------------------------

window.onload = function () {
    if (window.innerWidth <= 780) {
        this.document.querySelector("header").style.backgroundColor = "#40A92F";
    }
}


// **--------------------- OBJETS ---------------------------

const carburants = {
    essence: ["citadin", "compact", "enginChantier", "sedan", "moto"],
    diesel: ["citadin", "compact", "utilitaire", "enginChantier", "sedan", "camion"],
    electrique: ["citadin", "moto"],
    hybride: ["citadin", "compact", "sedan"]
}

const vitesse = new Array(
    {
        manuelle: {
            typeCars: [
                "citadin",
                "compact",
                "utilitaire",
                "enginChantier"
            ]
        },
        automatique: {
            typeCars: [
                "sedan",
                "camion"
            ]
        },
        autre: {
            typeCars: [
                "moto"
            ]
        }
    }
);





// **--------------- SELECT VETESS  -----------------------------


selectVetess.onchange = function () {
    carburant.innerHTML="";
    carburant.disabled=true;
    duree.value=0;
    duree.disabled=true;
    var val = selectVetess.value;
    const lengthAuter = Object.getOwnPropertyNames(vitesse[0].autre.typeCars);
    const lengthAuto = Object.getOwnPropertyNames(vitesse[0].automatique.typeCars);
    const lengthManu = Object.getOwnPropertyNames(vitesse[0].manuelle.typeCars);
    if (val == "manuelle") {
        selectType.removeAttribute("disabled");
        selectType.innerHTML = "<option value='' selected disabled>select type</option>";
        for (let i = 0; i < lengthManu.length - 1; i++) {
            selectType.innerHTML += "<option value='" + vitesse[0].manuelle.typeCars[i] + "'>" + vitesse[0].manuelle.typeCars[i] + "</option>";
        }
    }
    else if (val == "automatique") {
        selectType.removeAttribute("disabled");
        selectType.innerHTML = "<option value='' selected disabled>select type</option>";
        for (let i = 0; i < lengthAuto.length - 1; i++) {
            selectType.innerHTML += "<option value='" + vitesse[0].automatique.typeCars[i] + "'>" + vitesse[0].automatique.typeCars[i] + "</option>";
        }
    }
    else if (val == "autre") {
        selectType.removeAttribute("disabled");
        selectType.innerHTML = "<option value='' selected disabled>select type</option>";
        for (let i = 0; i < lengthAuter.length - 1; i++) {
            selectType.innerHTML += "<option value='" + vitesse[0].autre.typeCars[i] + "'>" + vitesse[0].autre.typeCars[i] + "</option>";
        }
    }


}



// **--------------- SELECT TYPE  -----------------------------


selectType.onchange = function () {
    var valType = selectType.value;
    carburant.removeAttribute("disabled");
    carburant.innerHTML = "<option value='' selected disabled>select carburant</option>";

    var res = carburants.essence.find(item => item === valType)
    if (res) { carburant.innerHTML += "<option value='essence'>essence</option>"; }

    var res = carburants.diesel.find(item => item === valType)
    if (res) { carburant.innerHTML += "<option value='diesel'>diesel</option>"; }

    var res = carburants.electrique.find(item => item === valType)
    if (res) { carburant.innerHTML += "<option value='electrique'>electrique</option>"; }

    var res = carburants.hybride.find(item => item === valType)
    if (res) { carburant.innerHTML += "<option value='hybride'>hybride</option>"; }

}

// **--------------- SELECT CARBURANT  -----------------------------

carburant.onchange = function () {
    duree.removeAttribute("disabled");
}


// **--------------------- RESERVATION ---------------------------

function reserver() {
    var prixTotal = 0;
    dureeV = duree.value;
    carburantV = carburant.value;
    selectTypeV = selectType.value;
    selectVetessV = selectVetess.value;
    btnText = btnSubmit.textContent;
   
    if (btnText === "reserver") {
        if (parseInt(dureeV)<=0 || dureeV=="") {
            showErrors.innerHTML = "<span style='color:red;'>voter durée de réservation est vide</span>";
        } else {

            if (selectVetessV === "automatique") { prixTotal += 0.19 }
            switch (carburantV) {
                case "essence": prixTotal += 14 / 100; break;
                case "diesel": prixTotal += 21 / 100; break;
                case "electrique": prixTotal += 5 / 100; break;
                case "hybride": prixTotal += 9 / 100; break;
                default: break;
            }
            switch (selectTypeV) {
                case "citadin": prixTotal += 12; break;
                case "compact": prixTotal += 14; break;
                case "enginChantier": prixTotal += 900; break;
                case "sedan": prixTotal += 20; break;
                case "moto": prixTotal += 10; break;
                case "utilitaire": prixTotal += 16; break;
                case "camion": prixTotal += 250; break;
                default: break;
            }
            prixTotal *= dureeV;
            showErrors.innerHTML = "<span style='color:green;'>voter reservation est enregistrer,merci</span><br><br>";
            showErrors.innerHTML += "<span style='color:green;'>le prix est : " + parseFloat(prixTotal).toFixed(2) + "$</span>";
            btnSubmit.textContent = "valider";
        }
    } else if(btnText === "valider"){
          
        document.querySelector(".model").style.display="block";
        btnSubmit.textContent = "reserver";
    }

}


// **--------------------- HIDE MODEL OF VALIDATION RESERVATION ---------------------------

function hideModel(){
    document.querySelector(".model").style.display="none";
    window.location="../component/Réservation.html";
}





// **--------------------- TOP SCROLL ON BODY ---------------------------


function tuUp() {
    window.scrollTo(0, 0);
}



var cheack = 0;
//** function to show menu
function showMenu() {
    document.querySelector("nav").style.display = "block";
    cheack = 1;
}
//** function to hide menu
function hideMenu() {
    document.querySelector("nav").style.display = "none";
    cheack = 0;
}
//** function to hide or show menu
function Menu() {

    if (cheack == 0) {
        showMenu();
    }
    else {
        hideMenu();
    }
}

