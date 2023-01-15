function getBooks(){
    return new Promise((resolve, reject)=>{
        let books=[];
        setTimeout(()=>{
            books=[
                {title:'Desiging Data Intesinve Application', auther:'Martin Kleppman',},
                {title:'The Psychology of Money', auther:'Morgan Housel'},
            ];
            resolve(books);
        },1000);
    });
}

function findAuthor(bookTitle){
    getBooks().then((books)=>{
        const book=books.find((book)=> book.title==bookTitle);
        console.log(book.auther);
    });
}
findAuthor('The Psychology of Money');