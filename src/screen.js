class Screen {
    state;

    constructor(state) {
        this.state = state;
    }

    render(x, y, width, height, padding, roundedRadius) {}
    handleAction(action) {}
}

class HouseScreen extends Screen {
    constructor(state) {
        super(state);
    }

    render(x, y, width, height, padding, roundedRadius) {
        this.renderHouse(x, y, width, height, padding, roundedRadius);
    }

    renderHouse(x, y, width, height, padding, roundedRadius) {

        //set up each character's render box which is a proportion of the width and height of the screeen
        let renderHeight = height/4;
        let renderWidth = width/9;

        //set up variables
        let renderX = x;
        let renderY = y;
        let count = 0;

        //Roledex
        stroke(255);
        fill(20);
        rect(renderX, renderY, renderWidth, renderHeight, roundedRadius);
        renderX += renderWidth;

        //Door
        stroke(255);
        fill("tan");
        rect(renderX, renderY, renderWidth, renderHeight, roundedRadius);
        renderX += renderWidth;

        for (let animal of state.deck) {
            //set boundaries
            if(renderX >= width) {
                renderX = x;
                renderY += renderHeight;
            }

            //bounding box
            stroke(255);
            fill(0);
            rect(renderX, renderY, renderWidth, renderHeight, roundedRadius);

            animal.render(renderX+padding, renderY+padding);
            count += 1;
            renderX += renderWidth;
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
