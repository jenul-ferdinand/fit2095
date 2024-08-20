let randomstring = require('randomstring')

class Car { 
    constructor (maker, model) {
        this.maker = maker
        this.model = model
        this.id = randomstring.generate({ length:4, charset: 'alphabetic' })
    }
}

module.exports = Car