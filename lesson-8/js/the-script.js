/* Footer */
let year =  new Date().getFullYear();
document.getElementById("currentYear").innerHTML = year;

let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

document.getElementById("currentDate").innerHTML = new Date().toLocaleDateString("en-GB", options);


/* Nav toggle */
function toggleMenu () {
    document.getElementById("responsive-nav").classList.toggle("hide");
}


/* Form */
let slider = document.getElementById("storm-severity");
let position = document.getElementById("slider-position");
position.innerHTML = slider.value;

slider.oninput = function () {
    position.innerHTML = this.value;
}