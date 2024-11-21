let state = new GameState();
let screens = {
    "house": new HouseScreen(state)
}

let currentScreen = "house";

function setup() {
    let canvas = document.getElementById("game");
    let width = window.innerWidth;
    let height = window.innerHeight;
    createCanvas(width, height, canvas);
}

function draw() {
    background(255, 0, 0);

    let screen = screens[currentScreen];
    screen.render();
}
