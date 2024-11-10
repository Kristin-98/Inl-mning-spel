//Kör main funtionen när domen är laddad.
window.addEventListener("DOMContentLoaded", main);

function main() {
    loadStartScene();
}

function loadStartScene() {
    container.innerHTML = "";

    const text = document.createElement("p");
    text.textContent = "startDescription";
    text.className = "start";

    const button = document.createElement("button");
    button.textContent = "Börja Spela";
    button.onclick = loadSecondScene;

    const image1 = document.createElement("img");
    image1.src = "Skärmbild (127).png";
    image1.alt = "Garden";
    image1.className = "start-image";

    container.append(image1, text, button);
}









// function startGame() {
//     document.querySelector(".start").style.display = "none";
//     document.getElementById("gameScreen").style.display = "block";
    
// }

// function plantFlowers() {
//     console.log();
// }

// function loadStartScene() {
//     const text = document.createElement("p");
//     text.textContent
// }

