const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.boxShadow = "0 20px 40px rgba(0,0,0,.2)";

});

card.addEventListener("mouseleave", () => {

card.style.boxShadow = "0 10px 25px rgba(0,0,0,.1)";

});

});