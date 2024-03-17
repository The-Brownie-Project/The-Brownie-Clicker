/* All the usefull functions the program needs */

/* IT IS IMPORTANT THAT ALL FUNCTIONS AND CLASS ARE PLACED BELOW */

export default class Init{
    constructor(brownies,scoreDisplay,autoClickButton,score) {
        this.brownies = brownies;
        this.scoreDisplay = scoreDisplay;
        this.autoClickButton = autoClickButton;
        this.score = score;
        
    }
    
    constructor(brownies,scoreDisplay,score){
        this.brownies = brownies;
        this.scoreDisplay = scoreDisplay;
        this.score = score;
    }
};