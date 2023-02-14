class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity === this.books.length) {
            throw Error("Not enough space in the collection.");
        }
        this.books.push({
            bookName,
            bookAuthor,
            paid: false,
        });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        for (const book of this.books) {
            if (book.bookName === bookName) {
                if (book.paid) {
                    throw Error(`${bookName} has already been paid.`);
                } else {
                    book.paid = true;
                    return `${bookName} has been successfully paid.`;
                }
            }
        }
        throw Error(`${bookName} is not in the collection.`);
    }

    removeBook(bookName) {
        for (const book of this.books) {
            if (book.bookName === bookName) {
                if (!book.paid) {
                    throw Error(
                        `${bookName} need to be paid before removing from the collection.`
                    );
                } else {
                    this.books.splice(1, 1);
                    return `${bookName} remove from the collection.`;
                }
            }
        }
        throw Error("The book, you're looking for, is not found.");
    }

    getStatistics(bookAuthor) {
        if (bookAuthor === undefined) {
            let result = `The book collection has ${
                this.capacity - this.books.length
            } empty spots left.`;
            let sortedBooks = this.books.sort((a, b) =>
                a.bookName.localeCompare(b.bookName)
            );
            for (const book of sortedBooks) {
                result += `\n${book.bookName} == ${book.bookAuthor} - ${
                    book.paid ? "Has Paid" : "Not Paid"
                }.`;
            }
            return result;
        }
        let result = [];
        for (const book of this.books) {
            if (book.bookAuthor === bookAuthor) {
                result.push(
                    `${book.bookName} == ${book.bookAuthor} - ${
                        book.paid ? "Has Paid" : "Not Paid"
                    }.`
                );
            }
            return result.join("n");
        }
        throw Error(`${bookAuthor} is not in the collection.`);
    }
}

// const library = new LibraryCollection(2);
// console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
// console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
// console.log(library.addBook("Ulysses", "James Joyce"));

// The In Search of Lost Time, with an author Marcel Proust, collect.
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Not enough space in the collection

// library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// // In Search of Lost Time has been successfully paid.
// // Don Quixote is not in the collection

// const library = new LibraryCollection(2);
// library.addBook("In Search of Lost Time", "Marcel Proust");
// library.addBook("Don Quixote", "Miguel de Cervantes");
// library.payBook("Don Quixote");
// console.log(library.removeBook("Don Quixote"));
// console.log(library.removeBook("In Search of Lost Time"));

// // Don Quixote remove from the collection.
// // In Search of Lost Time need to be paid before removing from the
// // collection.

// library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

// // The Don Quixote, with an author Miguel de Cervantes, collect.
// // Don Quixote == Miguel de Cervantes - Not Paid

library = new LibraryCollection(5);
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics());

// // The book collection has 2 empty spots left.
// // Don Quixote == Miguel de Cervantes - Has Paid.
// // In Search of Lost Time == Marcel Proust - Not Paid.
// // Ulysses == James Joyce - Not Paid.
