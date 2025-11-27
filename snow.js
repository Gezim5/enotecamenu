const container = document.getElementById("snow-container");
const numberOfFlakes = 70;

// Array of your snowflake images
const snowImages = [
    "images/snowflake1.png",
    "images/snowflake2.png",
    "images/snowflake3.png"
];

for (let i = 0; i < numberOfFlakes; i++) {
    const flake = document.createElement("div");
    flake.classList.add("snowflake");

    // Random snowflake image
    const img = snowImages[Math.floor(Math.random() * snowImages.length)];
    flake.style.backgroundImage = `url(${img})`;

    // Random size
    const size = Math.random() * 25 + 10; // 10px–35px
    flake.style.width = size + "px";
    flake.style.height = size + "px";

    // Random starting horizontal position
    flake.style.left = Math.random() * 100 + "vw";

    // Random falling speed
    flake.style.animationDuration = (Math.random() * 5 + 6) + "s";

    // Random delay
    flake.style.animationDelay = Math.random() * 5 + "s";

    // Random opacity
    flake.style.opacity = Math.random() * 0.7 + 0.3;

    container.appendChild(flake);
}
