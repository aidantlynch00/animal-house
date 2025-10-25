const CUTE_MAX = 65;
const CASH_MAX = 30; 
const MAX_TURNS = 25

class GameState {
    turnsLeft;
    cuteness;
    cash;
    capacity;
    stars;
    deck;
    


    constructor() {
        this.turnsLeft = MAX_TURNS;
        this.cuteness = 0;
        this.cash = 0;
        this.capacity = 5;
        this.stars = 0;
        this.deck = [
            new Array(4).fill("hamster"),
            new Array(2).fill("fish"),
            new Array(4).fill("cow"),
        ].flat();
    }
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