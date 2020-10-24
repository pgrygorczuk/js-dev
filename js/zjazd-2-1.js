let book = 
{
    title: 'LOTR',
    pages: 2745,
    hardcover: true,
    characters: ['Merry', 'Pippin'],
};

book.characters.push('Sam');

let book1 = book;

book1.title = 'Karol';

//console.log(book);
//console.log(book1);

// =====================================================================================

function show_sum(x, y)
{
    let sum = x + y;
    console.log(sum);
    return sum;
}

//show_sum(1);
//show_sum(1, 2);
//show_sum(1, 2, 3);

books = [book, book1];
books.forEach(element => {
    console.log(element);
});

let book3 = Object.assign({}, book1);
console.log(book3);
book3.title = 'xyz';
console.log(book1);
