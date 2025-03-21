document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully");

    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Theme toggle (Dark/Light mode)
    const body = document.body;
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "Toggle Theme";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.top = "10px";
    toggleBtn.style.right = "10px";
    toggleBtn.style.padding = "10px";
    toggleBtn.style.cursor = "pointer";
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    // Add dark mode styles
    const darkModeStyles = document.createElement("style");
    darkModeStyles.innerHTML = `
        .dark-mode {
            background-color: #333;
            color: #fff;
        }
        .dark-mode section {
            background: #444;
            color: #fff;
        }
    `;
    document.head.appendChild(darkModeStyles);

    // Show/hide project descriptions on click
    document.querySelectorAll("#projects li").forEach(item => {
        item.style.cursor = "pointer";
        item.addEventListener("click", function () {
            this.classList.toggle("expanded");
            if (this.classList.contains("expanded")) {
                this.style.background = "#cce5ff";
            } else {
                this.style.background = "#e8f0ff";
            }
        });
    });

    // Contact Form Popup
    const contactSection = document.getElementById("contact");
    const contactBtn = document.createElement("button");
    contactBtn.innerText = "Contact Me";
    contactBtn.style.display = "block";
    contactBtn.style.margin = "10px auto";
    contactBtn.style.padding = "10px 15px";
    contactBtn.style.cursor = "pointer";
    contactSection.appendChild(contactBtn);

    contactBtn.addEventListener("click", function () {
        alert("Feel free to email me at ganavisuresh8197@gmail.com!");
    });
});
