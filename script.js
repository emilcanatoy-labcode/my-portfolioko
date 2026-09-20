// Simple welcome message
console.log("Welcome to my portfolio!");


// Smooth navigation
document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
