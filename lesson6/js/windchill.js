var t = parseFloat(document.getElementById('temp').innerText);
var w = parseFloat(document.getElementById('wind').innerText);
var chillfactor = (35.74 + (0.6215 * t) - (35.75 * Math.pow(w, 0.16)) + ((0.4275 * t) * Math.pow(w, 0.16)));

if (t <= 50 && w >= 3.0) {
    document.getElementById('chill').innerHTML = chillfactor.toFixed(2);
} else {
    document.getElementById('chill').innerHTML = "N/A";
}   