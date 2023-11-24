let myBat = new Battery(30);
let myLamp = new FlashLamp(true,myBat);
myLamp.setBattery(myBat);
myLamp.getBatteryInfor();