class FlashLamp{
    constructor(status, battery) {
        this.status = status;
        this.battery = battery;
    }
    setBattery(){
        this.battery.getEnery();
    }
    getBatteryInfor(){
        return this.battery.getEnery();
    }
    light(){
        if (this.status){
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }

}