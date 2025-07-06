// Hamburger menu toggle functionality
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
};

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
    