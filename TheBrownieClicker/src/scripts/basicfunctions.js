export default class DefaultFunction{

    constructor(time){
        this.time = time
    }
    sleep(time){
        setTimeout(function(){},time)
    }
}