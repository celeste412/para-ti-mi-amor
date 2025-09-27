// 🎨 Lista de pinturas con frases románticas
const artworks = [
    {
        src: "https://media.admagazine.com/photos/618a648c938f88774ad53f26/master/w_960,c_limit/75326.jpg",
        title: "El beso - Gustav Klimt",
        phrase: "Amarte es perderme en un dorado infinito."
    },
    {
        src: "https://media.admagazine.com/photos/618a7dbcac089e092dcc0c7a/master/w_960,c_limit/43883.jpg",
        title: "La noche estrellada - Vincent van Gogh",
        phrase: "Nuestro amor brilla entre la oscuridad, como un cielo de sueños."
    },
    {
        src: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvY2xhdWRlX21vbmV0X2ltcHJlc3Npb25fc29sZWlsX2xldmFudF8xODcyLmpwZyIsInJlc2l6ZSw4MDAiXX0.3zVJiMH6IcfJ8fJz_4NrRgBxqPC6eekNBVE15FcEPY8.jpg",
        title: "Impresión, sol naciente - Claude Monet",
        phrase: "Eres mi amanecer, pintado en calma y fuego."
    },
    {
        src: "https://www.researchgate.net/publication/385589430/figure/fig1/AS:11431281288914296@1730910814062/Figura-1-Los-amantes-Nota-Por-Rene-Magritte-1928-pintura-oleo-sobre-tela-ubicada.png",
        title: "Los amantes - René Magritte",
        phrase: "Aunque el mundo no nos vea, nuestros corazones se reconocen."
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/El_Beso_%28Pinacoteca_de_Brera%2C_Mil%C3%A1n%2C_1859%29.jpg/963px-El_Beso_%28Pinacoteca_de_Brera%2C_Mil%C3%A1n%2C_1859%29.jpg",
        title: "El beso - Francesco Hayez",
        phrase: "Entre tus labios, hallé mi destino."
    }
];

function PlayAudio() {
    document.getElementById("musical").play();
}

let current = 0;
const gallery = document.getElementById("gallery");
const endText = document.getElementById("endText");

// ❤️ Cada clic revela una nueva pintura
document.body.addEventListener("click", () => {
    if (current >= artworks.length) return;

    const art = artworks[current];

    // 🎁 Crear bloque de pintura
    const block = document.createElement("div");
    block.classList.add("painting-block");

    const img = document.createElement("img");
    img.src = art.src;
    img.alt = art.title;

    const title = document.createElement("h2");
    title.textContent = art.title;

    const phrase = document.createElement("p");
    phrase.textContent = art.phrase;

    // 💞 Añadir elementos
    block.appendChild(img);
    block.appendChild(title);
    block.appendChild(phrase);

    // 💖 Corazones flotantes
    for (let side of ["left", "right"]) {
        const heart = document.createElement("span");
        heart.textContent = "💖";
        heart.classList.add("heart", side);
        heart.style.top = `${Math.random() * 40 + 10}px`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        block.appendChild(heart);
    }

    // 📌 Agregar al DOM
    gallery.appendChild(block);

    // 💬 Mensajes personalizados tipo burbuja
    const mensajes = [
        "💬 Amor, sigue haciendo click ❤️",
        "💬 Aún hay más para ti ❤️",
        "💬 Ya falta poco mi amor ❤️",
        "💬 Ya casi llegas al final ❤️"
    ];

    if (current < mensajes.length) {
        showBubbleMessage(mensajes[current]);
    }

    current++;

    // 🌙 Mostrar mensaje final
    if (current === artworks.length) {
        setTimeout(() => {
            endText.classList.remove("hidden");
        }, 1500);
    }
});

// ✨ Función para mostrar burbujitas
function showBubbleMessage(text) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble-message");
    bubble.textContent = text;

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.classList.add("show");
    }, 100);

    setTimeout(() => {
        bubble.classList.remove("show");
        setTimeout(() => bubble.remove(), 500);
    }, 2500);
}