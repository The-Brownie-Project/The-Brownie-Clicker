/* All the usefull functions the program needs */
import Init from "./Init";

/* IT IS IMPORTANT THAT ALL FUNCTIONS AND CLASS ARE PLACED BELOW */

export default class EventHandler extends Init{
    constructor(brownie,scoreDisplay,score,autoClickButton,multiplier,bonus,priceAC,numofAC,ACHandle,multipling,priceMul,multiplingDisplay){
        super(brownie,scoreDisplay,score,autoClickButton,multiplier,bonus,priceAC,numofAC,ACHandle,multipling, priceMul,multiplingDisplay);

        let that = this
        that.Scoring = that.Scoring.bind(that);
        that.AutoClick = that.AutoClick.bind(that)
        that.Multipling = that.Multipling.bind(that)
        that.brownie.addEventListener("click",that.Scoring)
        that.autoClickButton.addEventListener("click",that.AutoClick)
        that.multipling.addEventListener("click",that.Multipling)
        that.scoreDisplay.innerHTML  = this.score;
        this.multiplingDisplay.innerHTML = this.multiplier;
        console.log("Event Handler Started");
    };

    Scoring = () => {
        try {
            this.score = this.score + 1*this.multiplier*this.bonus;
            this.scoreDisplay.innerHTML = this.score;
        }
        finally{
            console.log("called score");
        }
    }

    AutoClick = () => {
        if (this.score >= this.priceAC) {
            try {
                clearInterval(this.ACHandle);
                console.log("AutoClick diabled")
            }finally {
                this.score = this.score - this.priceAC;
                this.priceAC = this.priceAC*2;
                console.log("next AutoClick upgrade: "+this.priceAC);
                this.ACHandle = setInterval(this.Scoring,Math.floor(1000/this.numofAC)); 
                this.numofAC = this.numofAC+1; 
                console.log("AutoClick is ON");
            }
        }
    }

    Multipling = () => {
        try {   
            if (this.score < this.priceMul) {
                console.log("not enough to buy multiplying");
            }
        }finally {
            if (this.score >= this.priceMul){
                this.score = this.score - this.priceMul;
                this.priceMul = Math.floor(this.priceMul*(Math.log(this.multiplier*10)*1.5));
                console.log("next Multiplier upgrade: "+this.priceMul);
                this.multiplier = this.multiplier+1;
                this.multiplingDisplay.innerHTML = this.multiplier;
                console.log("added to mutlipling");
            }
        }
    }
}