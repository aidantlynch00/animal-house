let padding = 20;
let roundedRadius = 5;
let state = new GameState();
let screens = {
    "house": new HouseScreen(state)
}

let currentScreen = "house";

function setup() {
    let canvas = document.getElementById("game");
    let width = window.innerWidth-50;
    let height = window.innerHeight;
    createCanvas(width, height, canvas);
}

function draw() {
    background(0);

    //Title
    stroke(255);
    fill(0);
    rect(padding, padding, width/4*3-(padding), height/6-(padding*2), roundedRadius);
    fill(255);
    stroke(0);
    text("title", padding+10, padding+30);
    

    //gameState
    stroke(255);
    fill(0);
    rect(padding, (height/6), width/4*3-(padding), height/6*5-(padding), roundedRadius);
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
    button.position(window.innerWidth-50, 50);
    button.mousePressed(addAnimal);

    //To-do buttons: settings, up, left, right, down, select

    let screen = screens[currentScreen];
    screen.render(padding, (height/6), width/4*3-(padding), height/6*5-(padding), padding, roundedRadius);
}

function changeColor() {
    bg = color(random(255));
}

function addAnimal() {
    state.deck.push(new Turtle());
}
