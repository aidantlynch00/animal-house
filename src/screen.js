class Screen {
    state;

    constructor(state) {
        this.state = state;
    }

    render(x, y, width, height, padding, roundedRadius) {}
    handleAction(action) {}
}

/*
HOUSE SCREEN
displays the house

TODO:    
*/
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

        if(state.party.length > 0){
            for (let animal of state.party) {
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
        
    }

    handleAction(action) {

    }
}

/*
SHOP SCREEN
displays the shop

TODO:    
*/
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

/*
ROLEDEX SCREEN
displays your deck

TODO:    
*/
class RoledexScreen extends Screen {

}

//Displays the Name of the Main Screen (shop, house, roledex) that is on display
class TitleScreen extends Screen {

}

//Displays important information
class TextScreen extends Screen {

}

//Displays turns left, current cuteness, and current cash
class EconomyScreen extends Screen {
    constructor(state) {
        super(state);
    }

    render(x, y, width, height, padding, roundedRadius) {
        this.renderEconomy(x, y, width, height, padding, roundedRadius);
    }

    renderEconomy(x, y, width, height, padding, roundedRadius) {
        let renderHeight = height/3;
        let renderWidth = width/4;

        //Turns
        stroke(255);
        fill(0);
        rect(x+padding, y+padding, renderWidth, renderHeight-(padding), roundedRadius);
        rect(x+padding*2+renderWidth, y+padding, renderWidth*3-padding*3, renderHeight-(padding), roundedRadius);
        noStroke();
        fill(255);
        text("Turns", x+padding+5, y+padding+20);
        text(`${state.turnsLeft}`, x+padding*2+renderWidth+5, y+padding+20);

        //Cuteness
        stroke(255);
        fill(0);
        rect(x+padding, y+renderHeight+padding, renderWidth, renderHeight-(padding), roundedRadius);
        rect(x+padding*2+renderWidth, y+renderHeight+padding, renderWidth*3-padding*3, renderHeight-(padding), roundedRadius);
        noStroke();
        fill(255);
        text("Cuteness", x+padding+5, y+renderHeight+padding+20);
        text(`${state.cuteness} / ${CUTE_MAX}`, x+padding*2+renderWidth+5, y+renderHeight+padding+20);

        //Cash
        stroke(255);
        fill(0);
        rect(x+padding, y+renderHeight*2+(padding), renderWidth, renderHeight-padding, roundedRadius);
        rect(x+padding*2+renderWidth, y+renderHeight*2+(padding), renderWidth*3-padding*3, renderHeight-padding, roundedRadius);
        noStroke();
        fill(255);
        text("Cash", x+padding+5, y+renderHeight*2+padding+20);
        text(`${state.cash} / ${CASH_MAX}`, x+padding*2+renderWidth+5, y+renderHeight*2+padding+20);
        
    }

    handleAction(action) {

    }

}

//Displays how many stars you need to win, and how much wildness is currently activated. (3 to lose)
class ConditionsScreen extends Screen {
    constructor(state) {
        super(state);
    }

    render(x, y, width, height, padding, roundedRadius) {
        this.renderConditions(x, y, width, height, padding, roundedRadius);
    }

    renderConditions(x, y, width, height, padding, roundedRadius) {
        // let renderHeight = height/2;
        // let renderWidth = width;

        // //Stars
        // stroke(255);
        // fill(0);
        // rect(x+padding, y+padding, renderWidth, renderHeight-(padding), roundedRadius);

        // //Wildness
        // stroke(255);
        // fill(0);
        // rect(x+padding, y+renderHeight+padding, renderWidth, renderHeight-(padding), roundedRadius);
        
    }

    handleAction(action) {

    }

}
