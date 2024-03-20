/* All the usefull functions the program needs */

/* IT IS IMPORTANT THAT ALL FUNCTIONS AND CLASS ARE PLACED BELOW */
import Items from "./Items"

/* 
WARNING:This Class's only purpose is to serve as a placeholder for future items
        Do not use it in the main program outside of testing
*/
export default class DummyItem extends Items {
    constructor(Clickable,Collectable,Bonus,CanSpawn,HasBonus){
        super(Clickable,Collectable,Bonus,CanSpawn);
        this.HasBonus = HasBonus;
    }
    ItemProperties(HasBonus){
    }
};