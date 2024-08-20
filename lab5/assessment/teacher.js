function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Teacher {
    constructor (tName, tSalary, tRank) {
        this.id = parseInt(`${getRandomInt(10)}${getRandomInt(10)}${getRandomInt(10)}${getRandomInt(10)}${getRandomInt(10)}`)
        this.tName = tName
        this.tSalary = tSalary
        this.tRank = tRank
    }
}

module.exports = Teacher