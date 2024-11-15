//Kör main funtionen när domen är laddad.
window.addEventListener("DOMContentLoaded", main);

function main() {
    loadStartScene();
    loadPickedFlowersFromStorage();
}

/**
 * Laddar startscenen och visar introduktionstext och startknapp.
 * @param {string} welcomeText - Välkomstmeddelande som visas för användaren.
 * @param {string} buttonText - Text på startknappen.
 */
function loadStartScene() {
    container.innerHTML = "";
    container.className = "start-scene";

    const text = document.createElement("h1");
    text.textContent = "Välkommen till Garden Game! Drömmer du om att skapa och sköta din egen trädgård? I Garden Game får du göra just det! Plantera vackra blommor, ta hand om växterna och upptäck hemligheter i din gröna oas. Låt kreativiteten flöda och bygg din drömträdgård – en plats där varje val formar ditt gröna paradis. Klicka på Börja spela för att ge dig ut på ditt trädgårdsäventyr!";
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

/**
 * Laddar den andra scenen där användaren kan välja att antingen plantera eller plocka blommor.
 */
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

const pickedFlowers = [];

/**
 * Sparar de plockade blommorna i webbläsarens localStorage.
 */
function savePickedFlowersToStorage() {
    localStorage.setItem("pickedFlowers", JSON.stringify(pickedFlowers));
}

/**
 * Hämtar de tidigare plockade blommorna från localStorage och lägger till dem i listan av plockade blommor.
 */
function loadPickedFlowersFromStorage() {
    const savedFlowers = JSON.parse(localStorage.getItem("pickedFlowers"));
    if (savedFlowers) {
        pickedFlowers.push(...savedFlowers);
    }
}

/**
 * Laddar den tredje scenen där användaren kan välja att plocka valfria blommor.
 */
function loadThirdScene() {
    container.innerHTML = "";
    container.className = "thirdScene";

    const imagesContainer = document.createElement("div");
    imagesContainer.className = "images-container";

    const text = document.createElement("h2");
    text.textContent = "Tryck på valfri blomma och ta med den till Plantera Blommor";
    text.className = "Options";

    const button3 = document.createElement("button");
    button3.textContent = "Tillbaka";
    button3.onclick = loadSecondScene;

    /**
    * Array.
    */
    const images = [
        { src: "Skärmbild (130)1.png", alt: "Flower", toggledSrc: "Skärmbild (130)7.png" },
        { src: "Skärmbild (130)2.png", alt: "Flower", toggledSrc: "Skärmbild (130)7.png" },
        { src: "Skärmbild (130)3.png", alt: "Flower", toggledSrc: "Skärmbild (130)7.png" },
        { src: "Skärmbild (130).png", alt: "Flower", toggledSrc: "Skärmbild (130)7.png" }
    ];

    /**
    * Laddar och visar tillgängliga blommor som kan plockas av användaren.
    * Varje blomma är klickbar och kan togglas mellan ett "plockat" och "inte plockat" läge.
    */
    images.forEach((imgData) => {
        const image = document.createElement("img");
        image.src = imgData.src;
        image.alt = imgData.alt;
        image.dataset.toggled = "false";

        /**
        * Hanterar händelser för klick på blomman.
        * Om blomman är "oplockad" (toggled=false), plockas den och läggs till i "pickedFlowers".
        * Om blomman redan är plockad (toggled=true), släpps den och tas bort från "pickedFlowers".
        */
        image.onclick = function() {
            if (image.dataset.toggled === "false") {
                image.src = imgData.toggledSrc;
                image.dataset.toggled = "true";
                pickedFlowers.push(imgData.src);
                savePickedFlowersToStorage();
            } else {
                image.src = imgData.src;
                image.dataset.toggled = "false";
                const index = pickedFlowers.indexOf(imgData.src);
                if (index > -1) {
                    pickedFlowers.splice(index, 1);
                    savePickedFlowersToStorage();
                }
            }
        };

        // container.appendChild(image);
        imagesContainer.appendChild(image);
    });

    container.append(imagesContainer, text, button3);
}

/**
 * Laddar den fjärde scenen där användaren kan välja att plantera sina blommor som den plockat.
 */
function loadFourthScene() {
    container.innerHTML= "";
    container.className = "fourthScene";

    const imagesContainer = document.createElement("div");
    imagesContainer.className = "images-container";

    const button4 = document.createElement("button");
    button4.textContent = "Tillbaka";
    button4.onclick = loadSecondScene;

    const text = document.createElement("h3");
    text.textContent = "Tryck på valfri kruka för att plantera dina blommor!";
    text.className = "";

    const image4 = document.createElement("img");
    image4.src = "Skärmbild (133).png";
    image4.alt = "Garden";

    let plantedFlowersCount = 0;

    /**
    * Skapar en rad med tomma krukor där användaren kan plantera blommor.
    * När användaren klickar på en kruka och har plockade blommor, 
    * planteras en blomma i krukan och krukan blir inaktiv.
    * Om alla blommor är planterade, visas ett meddelande.
    */
    for (let i = 0; i < 4; i++) {
        const emptyPotImage = document.createElement("img");
        emptyPotImage.src = "Skärmbild (130)7.png";
        emptyPotImage.alt = "Empty pot" + (i + 1);
        emptyPotImage.className = "pot";

        emptyPotImage.onclick = function() {
            if (pickedFlowers.length > 0) {
                const flowerToPlant = pickedFlowers.shift();
                emptyPotImage.src = flowerToPlant;
                emptyPotImage.onclick = null;
                plantedFlowersCount++;
                savePickedFlowersToStorage();
                if (plantedFlowersCount === 4) {
                    alert("Bra jobbat, du har nu planterat alla blommor!");
                }
            } else {
                alert("Du måste plocka minst en blomma för att kunna plantera något");
            }
        };
        // container.append(emptyPotImage);
        imagesContainer.appendChild(emptyPotImage);
    }
    container.append(imagesContainer, text, button4);
}