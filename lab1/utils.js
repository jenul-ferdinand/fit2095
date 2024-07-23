function generateFleet(n) {
    let aFleet = [];

    for (let i = 0; i < n; i++) {
        let randModel = Math.round(Math.random() * 7);
        let randYear = Math.round(Math.random() * 25) + 2000;
        let aCar = {
            maker : 'BMW',
            model : `X${randModel}`,
            year : `${randYear}`
        }
        aFleet.push(aCar);
    }
    return aFleet;
}

// Export the function 
module.exports = { generateFleet };