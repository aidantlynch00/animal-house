const CUTE_MAX = 65;
const CASH_MAX = 30; 
const MAX_TURNS = 25

class GameState {
    turnsLeft;
    cuteness;
    cash;
    capacity;
    wild;
    stars;
    deck;
    gameDeck;
    party;

    constructor() {
        this.turnsLeft = MAX_TURNS;
        this.cuteness = 0;
        this.cash = 0;
        this.capacity = 5;
        this.wild = 0;
        this.stars = 0;
        this.deck = [
            new Array(4).fill(new Cow()),
            new Array(2).fill(new Fish()),
            new Array(4).fill(new Hamster()),
        ].flat();
        this.gameDeck = this.deck.slice();
        this.party = new Array(0);
    }
}


/* Creating functions and I don't know where they go */

function startRound() {
    console.log(`Party List:`);
    console.log(state.party);
    console.log(`Deck:`);
    console.log(state.deck);
    console.log(`Game Deck:`);
    console.log(state.gameDeck);
    state.gameDeck = state.deck.slice();
    console.log(state.gameDeck)
    shuffleGameDeck();
}

function shuffleGameDeck() {
    console.log("shuffling");
    state.gameDeck.sort( () => Math.random() - 0.5);
    console.log(`Game Deck:`)
    console.log(state.gameDeck);
}

//Adding to Party Deck //////////////////////
function openDoor() {
    console.log("inviting animal");
    let invitee = state.gameDeck.pop();
    state.party.push(invitee);
    checkCapacity();
    //check ability
    checkWild(invitee)
    checkStars(invitee);
}

function checkCapacity() {
    console.log("checking capacity");
    if(state.party.length > state.capacity) {
        state.party.splice(0, state.party.length);
        state.gameDeck = state.deck.splice();
        console.log("over capacity - arrays cleared");
        //TODO: Create Police
    }
    else if(state.party.length == state.capacity){
        console.log("capacity reached.")
        endRound();
    }
}

function checkStars(animal) {
    state.stars += animal.stars;
    console.log(`stars: ${state.stars}`);
    //if stars = 4 WIN
}

function checkWild(animal) {
    if(animal.ability == Ability.Trouble) {
        state.wild += 1;
    }
    console.log(`wild: ${state.wild}`);
    //if wild = 3 END ROUND
}

function endRound() {
    console.log("Round Ending...");
    countCuteness();
    console.log(`Total Cuteness: ${state.cuteness}`);
    countCash();
    console.log(`Total Cash: ${state.cash}`);
    state.turnsLeft -= 1;
    state.stars = 0;
    state.wild = 0;
    // state.party.splice(0, state.party.length);
    //TODO - Turn Screen to shop
}

function countCuteness() {
    console.log("Counting Cuteness...");
    for(let animal of state.party) {
        if((state.cuteness+animal.cuteness) >= CUTE_MAX) {
            state.cuteness = CUTE_MAX;
            break;
        } else {
            state.cuteness += animal.cuteness;
        }
    }
}

function countCash() {
    console.log("Counting Cash...");
    for(let animal of state.party) {
        if((state.cash+animal.cash) >= CASH_MAX) {
            state.cash = CASH_MAX;
            break;
        } else {
            state.cash += animal.cash;
        }
    }
}




//Met either when the player ends the round early or when capacity is full/no actions
function roundEnded() {
    //IF stars = 4 : WIN
    for(let animal of state.party) {
        state.cuteness += animal.cuteness();
        state.cash += animal.cash();
        state.turnsLeft -= 1;
    }
}

//Checks for capacity
function capacity() {
    //if capacity is not reached, continue
    //if capacity is reached, end
    //if capacity is over, policeeeeeee
}



/*SOME PSEUDO CODE FOR A MOMENT
- Start the Game
- create the draw deck out of current deck
- [Open Door Button]
    - Add random animal to the playstate
        - if star add to counter
        - if rudeness add to counter
    - add counter to current capacity
- [Select an animal]
    - if ability, do ability
    - else nothing
- [Capacity Hit or over capacity or endgame early] 
    - check for stars
        - if = 4 or more ->  WINNER
        - else continue
    - count points
        - go through playdeck and add to cash and cuteness until
        max is reached
- [Check Turns]
    - turns -1
    - if = 0 GAME OVER
    - else continue
- [go to shop]

*/