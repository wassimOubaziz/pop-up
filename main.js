let buttonEl = document.querySelectorAll(".button-el");
console.log(buttonEl);
let all = document.querySelector(".all");
let remove = document.querySelector(".remove");
let flourEl = document.querySelector(".flour-el");

for (let i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", function() {
        all.style.display = "block";
    });
}

remove.addEventListener("click", function() {
    all.style.display = "none";
});

flourEl.addEventListener("click", function() {
    all.style.display = "none";
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && all.style.display === "block") {
        all.style.display = "none";
    }
});