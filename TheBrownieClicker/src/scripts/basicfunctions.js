export default class DefaultFunction{

    constructor(second,minute,hour,Timelost,timeLostDisplay){
        this.second = second;
        this.minute = minute;
        this.hour = hour;
        this.Timelost = Timelost;
        this.timeLostDisplay = timeLostDisplay;

        let that = this
        that.TimeLost = that.TimeLost.bind(that);
        this.second = this.second+1;
        Timelost = setInterval(this.TimeLost,1000);
        console.log("basic functions ON")
        
    }

    TimeLost = () => {
        let currentTime = `${this.hour}h ${this.minute}min ${this.second}sec`
        this.second = this.second+1;
        if (this.second == 60){
            this.second = 0;
            this.minute = this.minute+1;
        }
        if (this.minute == 60){
            this.minute = 0;
            this.hour= this.hour+1;
        }
        this.timeLostDisplay.innerHTML = currentTime
    }
}