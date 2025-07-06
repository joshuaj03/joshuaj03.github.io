// Hamburger menu toggle functionality
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
};

// Typed.js setup for dynamic text
document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-text", {
    strings: ["Coder", "Gamers", "Tech Enthusiast", "Game Developer", "Engineer", "B.Tech CSE"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    cursorChar: "|",
    showCursor: true,
    // startDelay: 500,
    // backDelay: 1000
  });
});

// TagCloud Setup
document.addEventListener("DOMContentLoaded", function () {
  if ($("#tagCanvas").length) {
    try {
      $("#tagCanvas").tagcanvas({
        textColour: "black",
        textFont: "Poppins, sans-serif",
        outlineColour: "#a3a3a3",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        initial: [0.1, -0.1],
        wheelZoom: true,
        weight: true
      }, "tagList");
    } catch (e) {
      console.log("Canvas error: " + e);
      document.getElementById("tagCanvasContainer").style.display = "none";
    }
  }
});
    