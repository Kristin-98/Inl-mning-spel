//Kör main funtionen när domen är laddad.
window.addEventListener("DOMContentLoaded", main);

function main(){
    console.log();

}

function startGame() {
    document.querySelector(".start").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    
}