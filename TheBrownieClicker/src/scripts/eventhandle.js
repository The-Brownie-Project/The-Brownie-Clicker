/* All the usefull functions the program needs */
import Init from "./Init.js";

/* IT IS IMPORTANT THAT ALL FUNCTIONS AND CLASS ARE PLACED BELOW */

export default class EventHandler extends Init{
    constructor(
        brownie,
        scoreDisplay,
        score,
        autoClickButton,
        multiplier,
        bonus,
        
        priceAC,
        numofAC,
        ACHandle,
        
        multipling,
        priceMul,
        multiplingDisplay,
        
        openMenuBtn,
        bottomMenu, 
        subMenu,
        
        userBrowniePerSec,
        clickSpeed,
        
        browniesClickedSessionDisplay,
        usrClickThisSession,
        
        amountOfReset,
        resetButton,
        resetDisplay,
        
        browniesPerClickDisplay,
        
        upgradesButton,
        bonusButton,
        skinsButton,
        optionsButton,

        upgradesList,
        bonusList,
        skinsList,
        optionsList
        )
        {
        /* Init method variables */    
        super(
            brownie,
            scoreDisplay,
            score,
            autoClickButton,
            multiplier,
            bonus,
            priceAC,
            numofAC,
            ACHandle,
            multipling,
            priceMul,
            multiplingDisplay,
            openMenuBtn,
            bottomMenu, 
            subMenu,
            userBrowniePerSec,
            clickSpeed,
            browniesClickedSessionDisplay,
            resetButton,
            resetDisplay,
            browniesPerClickDisplay,
            );
            /*###*/

            /* Public Variables */
            this.usrClickThisSession = usrClickThisSession;
            this.amountOfReset = amountOfReset;

            this.upgradesButton = upgradesButton;
            this.bonusButton = bonusButton;
            this.skinsButton = skinsButton;
            this.optionsButton = optionsButton;

            this.upgradesList = upgradesList;
            this.bonusList = bonusList;
            this.skinsList = skinsList;
            this.optionsList = optionsList;

            /*###*/

            /* Private Variables */
            var timeSpent = 0;
            var timeBeforeCPSReset = 0;
            var tmpBrowniePerClick = 1;
            let tmpListsPointer;
            
            this.upgradesList = upgradesList;
            this.bonusList = bonusList;
            this.skinsList = skinsList;
            this.optionsList = optionsList;
            this.timeSpent = timeSpent;
            this.timeBeforeCPSReset = timeBeforeCPSReset;
            this.tmpBrowniePerClick = tmpBrowniePerClick;
            this.localStorage = localStorage;
            this.tmpListsPointer = tmpListsPointer;

            /*###*/

    /*######*/

        let that = this
        that.Scoring = that.Scoring.bind(that);
        that.AutoClick = that.AutoClick.bind(that);
        that.Multipling = that.Multipling.bind(that);
        that.MenuButton = that.MenuButton.bind(that);
        that.GetUserBrowniePerSec = that.GetUserBrowniePerSec.bind(that);
        that.UserClicksHandler = that.UserClicksHandler.bind(that);
        that.UserReset = that.UserReset.bind(that);
        that.BrowniePerClick = that.BrowniePerClick.bind(that);

        that.brownie.addEventListener("click",that.Scoring);
        that.brownie.addEventListener("click",that.UserClicksHandler);

        that.autoClickButton.addEventListener("click",that.AutoClick);
        
        that.multipling.addEventListener("click",that.Multipling);
        that.multipling.addEventListener("click",that.BrowniePerClick);

        that.openMenuBtn.addEventListener("click",that.MenuButton);
        
        that.clickSpeed.addEventListener("click",that.GetUserBrowniePerSec);
        
        that.resetButton.addEventListener("click",that.UserReset);

        that.upgradesButton.addEventListener("click",that.UpgradeButton);

        that.bonusButton.addEventListener("click",that.BonusButton);

        that.skinsButton.addEventListener("click",that.SkinsButton);

        that.optionsButton.addEventListener("click",that.OptionsButton);

        
        that.clickSpeed.innerHTML = setInterval(this.GetUserBrowniePerSec,1000);
        that.scoreDisplay.innerHTML  = this.score;
        that.multiplingDisplay.innerHTML = this.multiplier;
        that.browniesClickedSessionDisplay.innerHTML = this.usrClickThisSession;
        that.resetDisplay.innerHTML = this.amountOfReset;

        that.browniesPerClickDisplay.innerHTML = this.tmpBrowniePerClick;

        that.upgradesList.style.height = '0px';
        that.bonusList.style.height = '0px';
        that.skinsList.style.height = '0px';
        that.optionsList.style.height = '0px';
        openMenuBtn.style.border = 'solid 1px var(--textReverse)'

        that.tmpListsPointers = this.upgradesList;

        console.log("Event Handler Started");
    };

    MenuButton = () => {
        console.log('Menu')
        if (this.upgradesList.style.height == '0px' &&
            this.bonusList.style.height == '0px' &&
            this.skinsList.style.height == '0px' &&
            this.optionsList.style.height == '0px'){
                this.OpenSubMenu()
            } 
            else {
                this.CloseSubMenu()
            }
        }

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
                this.ACHandle = setInterval(this.Scoring,Math.floor(1000/(this.numofAC+1))); 
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

    GetUserBrowniePerSec = () => {
        clearInterval(tempInterval);
        this.timeSpent = this.timeSpent + 1;
        try{
            if (this.timeBeforeCPSReset == this.userBrowniePerSec)
            {
                this.clickSpeed.innerHTML = 0;
                this.userBrowniePerSec = 0;
            }
            if (this.userBrowniePerSec == 0){
                this.timeSpent = 1
            }
        }finally{
            var tempInterval = setInterval(() => {
                console.log(this.userBrowniePerSec);
                this.clickSpeed.innerHTML = Math.floor(this.multiplier*((this.userBrowniePerSec/this.timeSpent) + this.numofAC));
            },300);
            this.timeBeforeCPSReset = this.userBrowniePerSec;
        }
    }

    UserClicksHandler = () => {
        console.log("User Clicked");
        this.userBrowniePerSec =  this.userBrowniePerSec + 1;
        this.usrClickThisSession = this.usrClickThisSession + 1;
        this.browniesClickedSessionDisplay.innerHTML = this.usrClickThisSession;
    }

    UserReset = () => {
        this.score = 0;
        this.multiplier = 1;
        this.numofAC = 0;
        this.priceAC = 10;
        this.priceMul = 50;

        clearInterval(this.ACHandle);
        this.amountOfReset = this.amountOfReset + 1;
        this.resetDisplay.innerHTML = this.amountOfReset;
        this.scoreDisplay.innerHTML  = this.score;
        this.multiplingDisplay.innerHTML = this.multiplier;
    }

    BrowniePerClick = () => {
        this.tmpBrowniePerClick = 1*this.multiplier*this.bonus
        this.browniesPerClickDisplay.innerHTML = this.tmpBrowniePerClick
    }

    /*_____________*/
    UpgradeButton = () => {
        console.log('UpgradeButton')
        if (this.upgradesList.style.height == '0px'){
            this.CloseSubMenu()
            this.tmpListsPointers = this.upgradesList
            this.OpenSubMenu()
        } else {
            this.CloseSubMenu()
        }
    }

    BonusButton = () => {
        console.log('BonusButton')
        if (this.bonusList.style.height == '0px'){
            this.CloseSubMenu()
            this.tmpListsPointers = this.bonusList
            this.OpenSubMenu()
        } else {
            this.CloseSubMenu()
        }
    }

    SkinsButton = () => {
        console.log('SkinsButton')
        if (this.skinsList.style.height == '0px'){
            this.CloseSubMenu()
            this.tmpListsPointers = this.skinsList
            this.OpenSubMenu()
        } else {
            this.CloseSubMenu()
        }
    }

    OptionsButton = () => {
        console.log('OptionsButton')
        if (this.optionsList.style.height == '0px'){
            this.CloseSubMenu()
            this.tmpListsPointers = this.optionsList
            this.OpenSubMenu()
        } else {
            this.CloseSubMenu()
        }
    }
    /*_____________*/

    OpenSubMenu = () => {
        console.log('Open Sub Menu')        
        if (this.tmpListsPointers.style.height == '0px') {
            if (window.innerWidth < '1200'){
                this.tmpListsPointers.style.animation = '0.3s deploySubmenu'
                this.tmpListsPointers.style.height = '16.55rem'
            } else {
                this.tmpListsPointers.style.animation = ' 0.3s deploySubmenuDesktop'
                this.tmpListsPointers.style.height = '100%'
            }
            this.openMenuBtn.style.border = 'solid 1px var(--text)'
        }
    }

    CloseSubMenu(){
        console.log('Close Sub Menu')
        if (this.tmpListsPointers === null){
            return
        }
        if (window.innerWidth < '1200'){
            this.tmpListsPointers.style.animation = '0.3s retractSubmenu'
        } else {
            this.tmpListsPointers.style.animation = '0.3s retractSubmenuDesktop'
        }
        this.tmpListsPointers.style.height = '0px'
        this.openMenuBtn.style.border = 'solid 1px var(--textReverse)'
    }

    /* Get a specific value from this object
    
    ###################################################
    #                                                 #
    #   Make sure you put return Methods under here   #
    #                                                 #
    ###################################################    

    */
    GetUserClickThisSession = () => {
        return this.usrClickThisSession;
    }

    GetThisMultiplier = () => {
        return this.multiplier;
    }

    GetThisScore = () => {
        return this.score;
    }

    GetnumofAC = () => {
        return this.numofAC;
    }
}