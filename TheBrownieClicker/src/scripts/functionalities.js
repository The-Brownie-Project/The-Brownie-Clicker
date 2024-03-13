/* All the usefull functions the program needs */

/* IT IS IMPORTANT THAT ALL FUNCTIONS AND CLASSES ARE PLACED BELOW */

<<<<<<< HEAD
import variables from "./variables";
=======
import * as vari from "./variables";

/*
########################################################
#                        Classes                       #
########################################################
*/
>>>>>>> 8d34b4d (JS:)

class Init{
    constructor(brownies,scoreDisplay,autoClickButton) {
        this.brownies = brownies;
        this.scoreDisplay = scoreDisplay;
        this.autoClickButton = autoClickButton;
    }
    
    constructor(brownies,scoreDisplay){
        this.brownies = brownies;
        this.scoreDisplay = scoreDisplay;
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

/* 
WARNING:This Class's only purpose is to serve as a placeholder for future items
        Do not use it in the main program outside of testing
*/
class DummyItem extends Items {
    constructor(Clickable,Collectable,Bonus,CanSpawn,HasBonus){
        super(Clickable,Collectable,Bonus,CanSpawn);
        this.HasBonus = HasBonus;
    }
<<<<<<< HEAD

    ItemProperties(HasBonus){

    }
};
=======
    ItemProperties(HasBonus){
    }
};




/*
########################################################
#                         Functions                    #
########################################################
*/
>>>>>>> 8d34b4d (JS:)
