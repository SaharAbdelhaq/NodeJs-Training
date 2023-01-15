function getBooks(Callback){
    setTimeout(()=>{
        Callback(
            ([
                {title:'Desiging Data Intesinve Application', auther:'Martin Kleppman',},
                {title:'The Psychology of Money', auther:'Morgan Housel'},
            ])
        );
    },1000);
}

function findAuthor(bookTtile, Callback){
    getBooks((books)=>{
        const book=books.find((book)=>book.title==bookTtile);
        Callback(book.auther);
    });
}

findAuthor("The Psychology of Money",console.log);