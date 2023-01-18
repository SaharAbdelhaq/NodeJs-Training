function getBooks() {
    let books = [];
    // delay 1 second (1000ms)
    setTimeout(() => {
        books = [
            { title: 'Designing Data Intensive Applications', author: 'Martin Kleppmann' },
            { title: 'The Psychology of Money', author: 'Morgan Housel' },
        ];
        //console.log(findAuthor('The Psychology of Money'))
    }, 1000);

    return books;
}

// this function executed before the end of the first function because of settimeout method.....
function findAuthor(bookTitle) {
    const books = getBooks();
    const book = books.find((book) => book.title === bookTitle); // B
    return book;
}

console.log(findAuthor('The Psychology of Money'))
// should print undefined.