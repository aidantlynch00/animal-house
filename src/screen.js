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
        fill(0);
        rect(50, 25, 800, 480);

        fill(255);
        let count = 0;
        for (let animal of state.deck) {
            text(animal, 55 + (count * 75), 50);
            count += 1;
        }
    }

    handleAction(action) {

    }
}
