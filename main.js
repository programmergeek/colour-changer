const colours = [
    {
    "name": "Absolute Zero",
    "hex": "#0048BA"
    },
    {
    "name": "Acid Green",
    "hex": "#B0BF1A"
    },
    {
    "name": "Aero",
    "hex": "#7CB9E8"
    },
    {
    "name": "Aero Blue",
    "hex": "#C9FFE5"
    },
    {
    "name": "African Violet",
    "hex": "#B284BE"
    },
    {
    "name": "Air Force Blue (RAF)",
    "hex": "#5D8AA8"
    },
    {
    "name": "Air Force Blue (USAF)",
    "hex": "#00308F"
    },
    {
    "name": "Air Superiority Blue",
    "hex": "#72A0C1"
    },
    {
    "name": "Alabama Crimson",
    "hex": "#AF002A"
    },
    {
    "name": "Alabaster",
    "hex": "#F2F0E6"
    },
    {
    "name": "Alice Blue",
    "hex": "#F0F8FF"
    },
    {
    "name": "Alien Armpit",
    "hex": "#84DE02"
    }]

const button = document.getElementById("btn");
const colour = document.getElementById("colour");

button.addEventListener("click", function(){
    //A random value between 0 and 1301
    var randomInt = generateRandomInt();
    console.log(randomInt)
    document.body.style.backgroundColor = colours.colours[randomInt].hex;
    colour.textContent = colours.colours[randomInt].name;
});

function generateRandomInt(){
    var val = Math.random() * colours.colours.length;
    return val;
}