class Plant {
    constructor (plantName, plantPrice, plantFamily) {
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.plantName = plantName;
        this.plantPrice = plantPrice;
        this.plantFamily = plantFamily;
    }
}

module.exports = Plant;