/* All the usefull functions the program needs */

/* IT IS IMPORTANT THAT ALL FUNCTIONS AND CLASS ARE PLACED BELOW */

export default class EventHandler{

    constructor(IDname){
        var that = this;
        let score = 0;
        that.Scoring = that.Scoring.bind(this);
        IDname.addEventListener("clickable-brownie",that.Scoring,false)
        IDname.innerHTML  = score;
    };

    Scoring(score,IDname){
        this.score = score;
        this.score++;
        IDname.innerHTML = this.score++
    }
}