const colours = require("./colours");

const button = document.getElementById("btn");
const colour = document.getElementById("colour");

button.addEventListener("click", function(){
    //A random value between 0 and 1301
    var randomInt = generateRandomInt();
    document.body.style.backgroundColor = colours.colours[randomInt].hex;
    colour.textContent = colours.colours[randomInt].name;
})

function generateRandomInt(){
    var val = Math.random() * 1301;
    return val;
}