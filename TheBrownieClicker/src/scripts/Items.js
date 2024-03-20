/* All the usefull functions the program needs */

/* IT IS IMPORTANT THAT ALL FUNCTIONS AND CLASS ARE PLACED BELOW */

/*
########################################################
#                        Class                         #
########################################################
*/
export default class Items{
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
########################################################
#                         Functions                    #
########################################################
*/