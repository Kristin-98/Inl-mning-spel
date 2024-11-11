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
    container.className = "secondScene";

    const button1 = document.createElement("button");
    button1.textContent = "Plocka Blommor";
    button1.onclick = loadThirdScene;

    const button2 = document.createElement("button");
    button2.textContent = "Plantera Blommor";
    button2.onclick = loadFourthScene;

    const image2 = document.createElement("img");
    image2.src = "Skärmbild (131).png";
    image2.alt = "Garden";
    image2.className = "second-image";

    container.append(button1, button2);
}

function loadThirdScene() {
    container.innerHTML= "";
    container.className = "thirdScene";

    const button3 = document.createElement("button");
    button3.textContent = "Tillbaka";
    button3.onclick = loadSecondScene;

    const image5 = document.createElement("img");
    image5.src = "Skärmbild (130)1.png";
    image5.alt = "Flower";
    image5.dataset.toggled = "false";

    image5.onclick = function() {
        if (image5.dataset.toggled === "false") {
            image5.src = "Skärmbild (130)4.png";
            image5.dataset.toggled = "true";
        } else {
            image5.src = "Skärmbild (130)1.png";
            image5.dataset.toggled = "false";
        }
    };

    const image6 = document.createElement("img");
    image6.src = "Skärmbild (130)2.png";
    image6.alt = "Flower";

    const image7 = document.createElement("img");
    image7.src = "Skärmbild (130)3.png";
    image7.alt = "Flower";

    const image8 = document.createElement("img");
    image8.src = "Skärmbild (130).png";
    image8.alt = "Flower";

    const image3 = document.createElement("img");
    image3.src = "Skärmbild (132).png";
    image3.alt = "Garden";
    
    container.append(button3, image5, image6, image7, image8)
}

function loadFourthScene() {
    container.innerHTML= "";
    container.className = "fourthScene";

    const button4 = document.createElement("button");
    button4.textContent = "Tillbaka";
    button4.onclick = loadSecondScene;

    const image4 = document.createElement("img");
    image4.src = "Skärmbild (133).png";
    image4.alt = "Garden";
    
    container.append(button4)
}