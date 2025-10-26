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
            for(var i = state.party.length-1; i >= 0; i--){
                let animal = state.party[i];
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

/*
    CONDITIONS SCREEN
    Displays key game information for the round
        1. How many stars you need/have (4)
        2. How many wild charges you have/can have in total (3)
        3. Abilities and available actions
*/
class ConditionsScreen extends Screen {
    constructor(state) {
        super(state);
    }

    render(x, y, width, height, padding, roundedRadius) {
        this.renderConditions(x, y, width, height, padding, roundedRadius);
    }

    renderConditions(x, y, width, height, padding, roundedRadius) {

        let renderWidth = width/2 - padding*1.5;
        let renderHeight = height - padding*2;
        let renderY = y + padding;
        
        //Side One
        let sideOneX = x + padding;
        let sideOneHeight = renderHeight/2 - padding/2;
        let boxTwoY = y + sideOneHeight + padding*2;

        //Side Two
        let sideTwoX = sideOneX + renderWidth + padding;

        //Grid Layout
        stroke(255);
        fill(0);
        rect(sideOneX, renderY, renderWidth, sideOneHeight, roundedRadius); //Side One Box One
        rect(sideOneX, boxTwoY, renderWidth, sideOneHeight, roundedRadius); //Side One Box Two
        rect(sideTwoX, renderY, renderWidth, renderHeight, roundedRadius); //Side Two

        /* 
            TODO: Showcase Information 
            1. Stars - 4 stars, same size, centered in Side One Box One
                a. state.stars
                b. DIM: if they are not used
                c. BRIGHT: if there are stars in the party
            2. Wild - 3 X's, same size, centered in Side One Box Two
                a. state.wild
                b. DIM: if they are not used
                c. BRIGHT: for every wild character that isn't canceled out
            3. Abilities - show a list of abilities that haven't been used yet
                a. They will go away once used
                b. Maybe shows if there are still actions left
        */

    }

    handleAction(action) {}

}
