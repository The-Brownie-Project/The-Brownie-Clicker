/* All the usefull functions the program needs */

/* IT IS IMPORTANT THAT ALL FUNCTIONS AND CLASS ARE PLACED BELOW */

export default class Init{
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
        
        multiplying,
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

        autoClickPrice,
        multiplyingPrice,
        resetButtonPrice
        ){
        this.brownie = brownie;
        this.scoreDisplay = scoreDisplay;
        this.score = score;
        this.autoClickButton = autoClickButton;
        this.multiplier = multiplier;
        this.bonus = bonus;
        
        this.priceAC = priceAC;
        this.numofAC = numofAC;
        this.ACHandle = ACHandle;
        
        this.multiplying = multiplying;
        this.priceMul = priceMul;
        this.multiplingDisplay = multiplingDisplay;
        
        this.openMenuBtn = openMenuBtn;
        this.bottomMenu = bottomMenu;
        this.subMenu = subMenu;
        
        this.userBrowniePerSec = userBrowniePerSec;
        this.clickSpeed = clickSpeed;
        
        this.browniesClickedSessionDisplay = browniesClickedSessionDisplay;
        
        this.resetButton = resetButton;
        this.resetDisplay = resetDisplay;
        this.browniesPerClickDisplay = browniesPerClickDisplay;

        this.autoClickPrice = autoClickPrice;
        this.multiplyingPrice = multiplyingPrice;
        this.resetButtonPrice = resetButtonPrice;
    }
};