const Ability = Object.freeze({
    None: 0,
    Fetch: 1,
    Boot: 2,
    Peek: 3,
    Full: 4,
    Combo: 5,
    Guest: 6,
    Trouble: 7,
    ReduceTrouble: 8,
    CancelTrouble: 9,
});

class Animal {

    constructor(id, name, canBuy, cost, cuteness, cash, ability, stars) {
        this.id = id;
        this.name = name;
        this.canBuy = canBuy;
        this.cost = cost;
        this.cuteness = cuteness;
        this.cash = cash;
        this.ability = ability;
        this.stars = stars;
    }

    render(x, y) { }
}

class Cow extends Animal {
    constructor() {
        super("cow", "Cow", false, 0, 2, 0, Ability.Trouble, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Cow", x, y);
        text("2", x, y+50);
    }
}

class Hamster extends Animal {
    constructor() {
        super("hamster", "Hamster", true, 2, 1, 0, Ability.None, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Hamster", x, y);
        text("1", x, y+50);
    }
}

class Fish extends Animal {
    constructor() {
        super("fish", "Fish", true, 3, 0, 1, Ability.None, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Fish", x, y);
        text("0", x, y+50);
    }
}

class Golden extends Animal {
    constructor() {
        super("golden", "Golden Retriever", true, 3, 0, 0, Ability.Fetch, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Golden Retriever", x, y);
        text("0", x, y+50);
    }
}

class Snake extends Animal {
    constructor() {
        super("snake", "Snake", true, 3, 4, 0, Ability.Trouble, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Snake", x, y);
        text("4", x, y+50);
    }
}

class Horse extends Animal {
    constructor() {
        super("horse", "Horse", true, 4, 0, 0, Ability.Boot, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Horse", x, y);
        text("0", x, y+50);
    }
}

class Pig extends Animal {
    constructor() {
        super("pig", "Pig", true, 4, -1, 2, Ability.None, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Pig", x, y);
        text("-1", x, y+50);
    }
}
class BlackCat extends Animal {
    constructor() {
        super("black_cat", "Black Cat", true, 4, 2, 0, Ability.Peek, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Black Cat", x, y);
        text("2", x, y+50);
    }
}

class Turtle extends Animal {
    constructor() {
        super("turtle", "Turtle", true, 4, 1, 0, Ability.ReduceTrouble, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Turtle", x, y);
        text("1", x, y+50);
    }
}

class Parrot extends Animal {
    constructor() {
        super("parrot", "Parrot", true, 5, 3, 2, Ability.Trouble, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Parrot", x, y);
        text("3", x, y+50);
    }
}

class Mouse extends Animal {
    constructor() {
        super("mouse", "Mouse", true, 5, 0, -1, Ability.Full, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Mouse", x, y);
        text("0", x, y+50);
    }
}

class Rabbit extends Animal {
    constructor() {
        super("rabbit", "Rabbit", true, 5, 4, -1, Ability.None, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Rabbit", x, y);
        text("4", x, y+50);
    }
}

class Sheep extends Animal {
    constructor() {
        super("sheep", "Sheep", true, 5, 3, 0, Ability.Guest, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Sheep", x, y);
        text("3", x, y+50);
    }
}

class Bee extends Animal {
    constructor() {
        super("bee", "Honey Bee", true, 7, 0, 0, Ability.Combo, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Honey Bee", x, y);
        text("0", x, y+50);
    }
}

class Chicken extends Animal {
    constructor() {
        super("chicken", "Chicken", true, 9, 0, 3, Ability.None, 0);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Chicken", x, y);
        text("0", x, y+50);
    }
}

class Alpaca extends Animal {
    constructor() {
        super("alpaca", "Alpaca", true, 40, 0, 0, Ability.None, 1);
    }

    render(x, y) {
        fill(255);
        noStroke();
        text("Alpaca", x, y);
        text("1 star", x, y+50);
    }
}
