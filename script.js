document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".hover-button");

    buttons.forEach(button => {
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.textContent = "Call 01475 229 8311 email info@lochquarryoutdoorcentre.com";
        button.parentNode.appendChild(tooltip);

        button.addEventListener("mouseenter", () => {
            tooltip.style.display = "block";
        });

        button.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tooltip").innerHTML = "Tel:014752298311<br>Email info@lochquarry.com";
});
