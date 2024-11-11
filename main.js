//Kör main funtionen när domen är laddad.
window.addEventListener("DOMContentLoaded", main);

function main() {
    loadStartScene();
}

function loadStartScene() {
    container.innerHTML = "";
    container.className = "start-scene";

    const text = document.createElement("p");
    text.textContent = "Drömmer du om att skapa och sköta din egen trädgård? I Garden Game får du göra just det! Plantera vackra blommor, ta hand om växterna och upptäck hemligheter i din gröna oas. Låt kreativiteten flöda och bygg din drömträdgård – en plats där varje val formar ditt gröna paradis. Klicka på Börja spela för att ge dig ut på ditt trädgårdsäventyr!";
    text.className = "start";

    const button = document.createElement("button");
    button.textContent = "Börja Spela";
    button.onclick = loadSecondScene;

    const image1 = document.createElement("img");
    image1.src = "Skärmbild (127).png";
    image1.alt = "Garden";
    image1.className = "start-image";

    container.append(text, button);
}

function loadSecondScene() {
    container.innerHTML = "";

    const image2 = document.createElement("img");
    image2.src = "Skärmbild (131).png";
    image2.alt = "Garden";
    image2.className = "second-image";

    container.append(image2);
}

