class Unit {
    constructor (name, code, numStudents, isActive) {
        // String
        this.name = name
        // Random 4 digit number
        this.code = code
        // Number
        this.numStudents = numStudents 
        // Boolean
        this.isActive = isActive ? true : false
    }
}

module.exports = Unit