/* use this to test out your function */
window.onload = function() {
 	changeColor("au", "000000");
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
    document.getElementById(id).style.fill = color
}
