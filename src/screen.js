class Screen {
    state;

    constructor(state) {
        this.state = state;
    }

    render() {}
    handleAction(action) {}
}

class HouseScreen extends Screen {
    constructor(state) {
        super(state);
    }

    render() {
        this.renderHouse();
    }

    renderHouse() {
        noStroke();
        fill(255);
        let count = 0;
        for (let animal of state.deck) {
            text(animal, 55 + (count * 75), 50);
            text(animals[animal].cuteness, 55+ (count*75), 100);
            count += 1;
        }
    }

    handleAction(action) {

    }
}

class ShopScreen extends Screen {
    //the item name
    //the item ability if there are any
    //how many are available
    //how much it costs
    constructor(state) {
        super(state);
    }

    render() {
        this.renderShop();
    }

    renderShop() {

    }

    handleAction(action) {

    }
}
