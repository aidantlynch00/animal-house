const CUTE_MAX = 65;
const CASH_MAX = 30;

class GameState {
    turnsLeft;
    cuteness;
    cash;
    capacity;
    deck;

    constructor() {
        this.turnsLeft = 25;
        this.cuteness = 0;
        this.cash = 0;
        this.capacity = 5;
        this.deck = [
            new Array(4).fill("hamster"),
            new Array(2).fill("fish"),
            new Array(4).fill("cow"),
        ].flat();
    }
}
