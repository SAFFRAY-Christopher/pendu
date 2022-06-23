let numberOfClicks = 0;
const clickButtons = document.getElementsByClassName('bouton');
const current_content = document.getElementById("tentatives").innerHTML ;
// let mots = ["Bonjour", "Salut", "Bonsoir", "Hello", "Salutation"];
// let motAleatoire = mots[Math.floor(Math.random() * mots.length)].toUpperCase();
let motAleatoire = "";
let nbrLettres = motAleatoire.length;

let tableauIndices =[];
let tirets = ""


let nbrTirets = (tirets.length);


fetch("https://random-word-api.herokuapp.com/word")
.then(response =>response.json())
.then(response => {

    motAleatoire = response[0].toUpperCase();
    nbrLettres = motAleatoire.length;
    console.log(motAleatoire);
    for(let i =0 ; i<nbrLettres; i++){
        tirets = tirets +"_";
        }
        splittedTirets = tirets.split("");
    document.getElementById("mots").innerHTML = tirets;
})
.catch(error => alert("Erreur : " + error));

for(let bouton of clickButtons){
    bouton.addEventListener('click', function() {

        bouton.disabled = true;
        const lettreBouton = bouton.innerHTML;
        const placeLettre = motAleatoire.indexOf(lettreBouton);

    
        for (let k =0; k<nbrLettres; k++){
            if(lettreBouton ==motAleatoire[k]){
                tableauIndices.push(k);   
            }
        }

        if(placeLettre !=-1){
            bouton.style.backgroundColor='green';
            for(const index of tableauIndices){
                tableauIndices = []
                splittedTirets[index]=lettreBouton;
            }
            const cisco = splittedTirets.join('');
            document.getElementById("mots").innerHTML = cisco;

            if ( motAleatoire==cisco){
                document.getElementById("tentatives").innerHTML = " BRAVO !";
                document.getElementById("tentatives").style.color = 'red';
                document.getElementsByClassName("recommencer")[0].classList.remove("invisible");
            }
        }
        else{bouton.style.backgroundColor='red';
        numberOfClicks ++;
        document.getElementById("tentatives").innerHTML =  numberOfClicks + current_content ;}  
    });
}
