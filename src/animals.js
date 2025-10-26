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

    render(x, y) { 
        fill(255);
        noStroke();
        text(`${this.name}`, x, y);
        text(`Cuteness: ${this.cuteness}`, x, y+20);
        text(`Cash: ${this.cash}`, x, y+40);
        text(`Stars: ${this.stars}`, x, y+60);
        text(`Ability: ${this.ability}`, x, y+80);
    }
}

class Cow extends Animal {
    constructor() {
        super("cow", "Cow", false, 0, 2, 0, Ability.Trouble, 0);
    }
}

class Hamster extends Animal {
    constructor() {
        super("hamster", "Hamster", true, 2, 1, 0, Ability.None, 0);
    }
}

class Fish extends Animal {
    constructor() {
        super("fish", "Fish", true, 3, 0, 1, Ability.None, 0);
    }
}

class Golden extends Animal {
    constructor() {
        super("golden", "Golden Retriever", true, 3, 0, 0, Ability.Fetch, 0);
    }
}

class Snake extends Animal {
    constructor() {
        super("snake", "Snake", true, 3, 4, 0, Ability.Trouble, 0);
    }
}

class Horse extends Animal {
    constructor() {
        super("horse", "Horse", true, 4, 0, 0, Ability.Boot, 0);
    }
}

class Pig extends Animal {
    constructor() {
        super("pig", "Pig", true, 4, -1, 2, Ability.None, 0);
    }
}
class BlackCat extends Animal {
    constructor() {
        super("black_cat", "Black Cat", true, 4, 2, 0, Ability.Peek, 0);
    }
}

class Turtle extends Animal {
    constructor() {
        super("turtle", "Turtle", true, 4, 1, 0, Ability.ReduceTrouble, 0);
    }
}

class Parrot extends Animal {
    constructor() {
        super("parrot", "Parrot", true, 5, 3, 2, Ability.Trouble, 0);
    }
}

class Mouse extends Animal {
    constructor() {
        super("mouse", "Mouse", true, 5, 0, -1, Ability.Full, 0);
    }
}

class Rabbit extends Animal {
    constructor() {
        super("rabbit", "Rabbit", true, 5, 4, -1, Ability.None, 0);
    }
}

class Sheep extends Animal {
    constructor() {
        super("sheep", "Sheep", true, 5, 3, 0, Ability.Guest, 0);
    }
}

class Bee extends Animal {
    constructor() {
        super("bee", "Honey Bee", true, 7, 0, 0, Ability.Combo, 0);
    }
}

class Chicken extends Animal {
    constructor() {
        super("chicken", "Chicken", true, 9, 0, 3, Ability.None, 0);
    }
}

class Alpaca extends Animal {
    constructor() {
        super("alpaca", "Alpaca", true, 40, 0, 0, Ability.None, 1);
    }
}
