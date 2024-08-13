// Represents a book
class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.id = Math.round(Math.random() * 1000);
    }
}

// Export the class
module.exports = Book; 