let padding = 20;
let roundedRadius = 5;
let state = new GameState();
let screens = {
    "house": new HouseScreen(state)
}

var bg;

let currentScreen = "house";

function setup() {
    let canvas = document.getElementById("game");
    let width = window.innerWidth;
    let height = window.innerHeight-50;
    bg = color(200);
    createCanvas(width, height, canvas);
}

function draw() {
    background(bg);

    //gameState
    stroke(255);
    fill(0);
    rect(padding, padding, width/4*3-(padding), height-(padding*2), roundedRadius);
    // fill(255);
    // stroke(0);
    // text("gamestate", padding+10, padding+30);
    
    
    //textbox
    stroke(255);
    fill(0);
    rect(width/4*3+padding, padding, width/4-(padding*2), height/3*1.5-(padding), roundedRadius);
    fill(255);
    stroke(0);
    text("textbox", width/4*3+padding+10, padding+30);

    //winstate
    stroke(255);
    fill(0);
    rect(width/4*3+padding, height/3*1.5+padding, width/4-(padding*2), height/3*.5-(padding*2), roundedRadius);

    //economy
    stroke(255);
    fill(0);
    rect(width/4*3+padding, height/3*2, width/4-(padding*2), height/3-(padding), roundedRadius);
    fill(255);
    stroke(0);
    text("economy", width/4*3+padding+10, height/3*2+30);
    text(`turns: ${state.turnsLeft}`, width/4*3+padding+10, height/3*2+50);
    text(`Cuteness: ${state.cuteness} / ${CUTE_MAX}`, width/4*3+padding+10, height/3*2+80);
    text(`Cash: ${state.cash} / ${CASH_MAX}`, width/4*3+padding+10, height/3*2+110);

    //buttons
    let button = createButton("Open Door");
    button.position(50, window.innerHeight-50);
    button.mousePressed(addAnimal);

    let screen = screens[currentScreen];
    screen.render();
}

function changeColor() {
    bg = color(random(255));
}

function addAnimal() {
    state.deck.push("turtle");
}
