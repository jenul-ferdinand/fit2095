class Car {
    constructor(maker, model, year) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.price = -1;
    }

    /**
     * Calculates the price of the car based on the a given discount and the year
     * of the car.
     * @param {Float} discount 
     */
    calcPrice(discount) {
        let basePrice = 7500;
        let oldPrice = (2024 - this.year) * 10;
        this.price = basePrice - oldPrice;
        this.price = this.price * discount;
    }
}

let car1 = new Car('Toyota', 'Camry', 2011);
console.log(car1);
car1.calcPrice(0.5);
console.log(car1);


