var i = 0;
var txt = "Rogger's Web Page"; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
function typerWebPageTitle() {


    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typerWebPageTitle, speed);
    }
}
typerWebPageTitle()