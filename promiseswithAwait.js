function getBooks() {
    return new Promise((resolve, reject) => {
        let books = [];
        // delay 1 second (1000ms)
        setTimeout(() => {
            books = [
                { title: 'Designing Data Intensive Applications', author: 'Martin Kleppmann' },
                { title: 'The Psychology of Money', author: 'Morgan Housel' },
            ];
            resolve(books);
        }, 1000);

    });
}

async function findAuthor(bookTitle) {
    const books = await getBooks();
    return books.find((book) => book.title === bookTitle)?.author;
}

console.log(await findAuthor('The Psychology of Money'))
