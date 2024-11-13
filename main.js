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

const pickedFlowers = [];

function loadThirdScene() {
    container.innerHTML = "";
    container.className = "thirdScene";

    const button3 = document.createElement("button");
    button3.textContent = "Tillbaka";
    button3.onclick = loadSecondScene;

    const images = [
        { src: "Skärmbild (130)1.png", alt: "Flower", toggledSrc: "Skärmbild (130)7.png" },
        { src: "Skärmbild (130)2.png", alt: "Flower", toggledSrc: "Skärmbild (130)7.png" },
        { src: "Skärmbild (130)3.png", alt: "Flower", toggledSrc: "Skärmbild (130)7.png" },
        { src: "Skärmbild (130).png", alt: "Flower", toggledSrc: "Skärmbild (130)7.png" }
    ];

    console.log ("arrayen med biler", images);

    
    images.forEach((imgData) => {
        const image = document.createElement("img");
        image.src = imgData.src;
        image.alt = imgData.alt;
        image.dataset.toggled = "false";

        image.onclick = function() {
            if (image.dataset.toggled === "false") {
                image.src = imgData.toggledSrc;
                image.dataset.toggled = "true";
                pickedFlowers.push("flower");
            } else {
                image.src = imgData.src;
                image.dataset.toggled = "false";
                const index = pickedFlowers.indexOf("flower");
                if (index > -1) {
                    pickedFlowers.splice(index, 1);
                }
            }
        };

        container.appendChild(image);
    });

    container.append(button3);
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

    if(pickedFlowers.includes("flower")) {
        image4.onclick = loadThirdScene;
    } else {
        image4.onclick = function () {
            prompt("Du måste plocka blommor först");
        };
    }
    container.appendChild(image4);
    container.appendChild(button4);
}

// function pickUpFlowers () {
//     ObjectContainer.removeChild(button);
//     pickedFlowers.push("flower");
// }

// function loadThirdScene() {
//     container.innerHTML= "";
//     container.className = "thirdScene";

//     const button3 = document.createElement("button");
//     button3.textContent = "Tillbaka";
//     button3.onclick = loadSecondScene;

//     const image5 = document.createElement("img");
//     image5.src = "Skärmbild (130)1.png";
//     image5.alt = "Flower";
//     image5.dataset.toggled = "false";

//     image5.onclick = function() {
//         if (image5.dataset.toggled === "false") {
//             image5.src = "Skärmbild (130)7.png";
//             image5.dataset.toggled = "true";
//         } else {
//             image5.src = "Skärmbild (130)1.png";
//             image5.dataset.toggled = "false";
//         }
//     };

//     const image6 = document.createElement("img");
//     image6.src = "Skärmbild (130)2.png";
//     image6.alt = "Flower";
//     image6.dataset.toggled = "false";

//     image6.onclick = function() {
//         if (image6.dataset.toggled === "false") {
//             image6.src = "Skärmbild (130)7.png";
//             image6.dataset.toggled = "true";
//         } else {
//             image6.src = "Skärmbild (130)2.png";
//             image6.dataset.toggled = "false";
//         }
//     };

//     const image7 = document.createElement("img");
//     image7.src = "Skärmbild (130)3.png";
//     image7.alt = "Flower";
//     image7.dataset.toggled = "false";

//     image7.onclick = function() {
//         if (image7.dataset.toggled === "false") {
//             image7.src = "Skärmbild (130)7.png";
//             image7.dataset.toggled = "true";
//         } else {
//             image7.src = "Skärmbild (130)3.png";
//             image7.dataset.toggled = "false";
//         }
//     };

//     const image8 = document.createElement("img");
//     image8.src = "Skärmbild (130).png";
//     image8.alt = "Flower";
//     image8.dataset.toggled = "false";

//     image8.onclick = function() {
//         if (image8.dataset.toggled === "false") {
//             image8.src = "Skärmbild (130)7.png";
//             image8.dataset.toggled = "true";
//         } else {
//             image8.src = "Skärmbild (130).png";
//             image8.dataset.toggled = "false";
//         }
//     };

//     const image3 = document.createElement("img");
//     image3.src = "Skärmbild (132).png";
//     image3.alt = "Garden";

//     ObjectContainer.innerText = "";
//     const object1 = document.createElement("img");
    
//     container.append(button3, image5, image6, image7, image8)
// }

