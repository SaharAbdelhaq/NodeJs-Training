// here we use callbacks
// Morgan Housel is the output of this code
// as we notice: This makes the code more difficult && adds complexity to the functions with callback arguments

function getBooks(callback) {
    // delay 1 second (1000ms)
    setTimeout(() => {
        callback(
            ([
                {
                    title: "Designing Data Intensive Applications",
                    author: "Martin Kleppmann",
                },
                { title: "The Psychology of Money", author: "Morgan Housel" },
            ])
        );
    }, 1000);
}

function findAuthor(bookTitle, callback) {
    getBooks((books) => {
        const book = books.find((book) => book.title === bookTitle);
        callback(book.author);
    });
}

findAuthor("The Psychology of Money", console.log);


