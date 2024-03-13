/* All the usefull functions the program needs */

/* IT IS IMPORTANT THAT ALL FUNCTIONS AND CLASSES ARE PLACED BELOW */

import * as vari from "./variables";

/*
########################################################
#                        Classes                       #
########################################################
*/

class Init{
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

class Items{
    constructor(Clickable,Collectable,Bonus,CanSpawn){
        this.Clickable = Clickable;
        this.Collectable = Collectable;
        this.Bonus = Bonus;
        this.CanSpawn = CanSpawn;
    };

    spawnable(CanSpawn){
        if (CanSpawn)
        {
            return this.Collectable = true;
        }
        else
        {
            return this.Collectable = false;
        }
    }

    collactable(Collectable,Clickable){
        //ayayaya
        var fuckyouaxel = new Array(); 

        switch (Clickable)
        {
            case true : {
                UnableOnClick = true;
                fuckyouaxel.push(UnableOnClick)
            };
            case false : {
                UnableOnClick = false;
                fuckyouaxel.push(UnableOnClick)
            };
            default : {
                UnableOnClick = null;
                fuckyouaxel.push(UnableOnClick)
            };
        }
        switch (Collectable)
        {
            case true : {
                HasBonus = true;
                fuckyouaxel.push(HasBonus);
            }
            case false : {
                HasBonus = false;
                fuckyouaxel.push(HasBonus);
            }
            default : {
                HasBonus = null;
                fuckyouaxel.push(HasBonus);
            }
        }
    return fuckyouaxel // :ok_hand:
    }
};

class EventHandler{

    Item = new Init(vari.brownie,vari.scoreDisplay,vari.autoClickButton,vari.Bonus)

    constructor(IDname,MethodInvoke){
        MethodInvoke = this.MethodInvoke
        that = this
        that.Scoring = this.Scoring.bind(that);

        MethodInvoke.addEventListener(IDname,that.Scoring,false)
    };

    Scoring(score){
        this.score = score;
        this.score++;
        vari.scoreDisplay.textContent = this.score;
    }
}



/* 
WARNING:This Class's only purpose is to serve as a placeholder for future items
        Do not use it in the main program outside of testing
*/
class DummyItem extends Items {
    constructor(Clickable,Collectable,Bonus,CanSpawn,HasBonus){
        super(Clickable,Collectable,Bonus,CanSpawn);
        this.HasBonus = HasBonus;
    }
    ItemProperties(HasBonus){
    }
};




/*
########################################################
#                         Functions                    #
########################################################
*/