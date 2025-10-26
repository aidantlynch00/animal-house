let padding = 20;
let roundedRadius = 5;
let state = new GameState();
let screens = {
    "house": new HouseScreen(state)
}
let infoScreens = {
    "economy": new EconomyScreen(state),
    "conditions": new ConditionsScreen(state),
}

let currentScreen = "house";

function setup() {
    let canvas = document.getElementById("game");
    let width = window.innerWidth-100;
    let height = window.innerHeight;
    createCanvas(width, height, canvas);
}

function draw() {
    shuffle(state.gameDeck);
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

    //buttons
    let button = createButton("Open Door");
    button.position(window.innerWidth-75, 50);
    button.mousePressed(openDoor);
    
    let startButton = createButton("Start Round");
    startButton.position(window.innerWidth-50, 100);
    startButton.mousePressed(startRound);

    //To-do buttons: settings, up, left, right, down, select, end round

    let screen = screens[currentScreen];
    screen.render(padding, (height/6), width/4*3-(padding), height/6*5-(padding), padding, roundedRadius);

    infoScreens["economy"].render(width/4*3+padding, height/3*2, width/4-(padding*2), height/3-(padding*1.5), padding/2, roundedRadius);
    infoScreens["conditions"].render(width/4*3+padding, height/3*1.5+padding, width/4-(padding*2), height/3*.5-(padding*2), padding/2, roundedRadius);
}

function changeColor() {
    bg = color(random(255));
}

function addAnimal() {
    let invitee = state.gameDeck.pop();
    // let invitee = random(state.gameDeck);
    console.log(invitee);
    state.party.push(invitee);
    console.log(state.party);
    console.log(state.gameDeck);
    console.log(state.deck);
}

// function shuffleDeck(array){
//     console.log("shuffling");
//     for (var i = this.array.length()-1; i > 0; i--) {
//         var num = Math.floor(Math.random() * (i+1));
//         var temp = array[i];
//         array[i] = array[num];
//         array[num] = temp;
//     }
// }