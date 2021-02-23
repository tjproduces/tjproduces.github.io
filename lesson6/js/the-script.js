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

var d = new Date();
var x = d.getDay();

/* Banner for pancakes */
if (x == 5) {
    document.getElementsByClassName('banner').style.display = "block";
}
else {
   document.getElementsByClassName("banner").style.display = "none";
}