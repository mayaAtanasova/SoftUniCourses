class Laptop {
    constructor(info, quality) {
        this.info = {...info}
        this.quality = quality;
        this.isOn = false;
        this.price = 0;
    }
    turnOn = () => {
        if(!this.isOn){
            this.isOn = true;
            this.quality -= 1;
            this.getPrice();
        }
    };
    turnOff = () => {
        if(this.isOn){
            this.isOn = false;
            this.quality -= 1;
            this.getPrice();
        }
    };
    showInfo = () => {
        let text = JSON.stringify(this.info);
        return text;
    }
    getPrice = () => {
        this.price = 800 - this.info.age * 2 + this.quality * 0.5;
    }
    
}

let info = {
    producer: "Dell",
    age: 2,
    brand: "XPS"
}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)