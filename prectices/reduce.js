const groceries = [
  { id: 1, name: "Rice (5kg)", price: 450, quantity: 25 },
  { id: 2, name: "Cooking Oil (1L)", price: 180, quantity: 40 },
  { id: 3, name: "Flour (2kg)", price: 120, quantity: 30 },
  { id: 4, name: "Sugar (1kg)", price: 110, quantity: 50 },
  { id: 5, name: "Salt (1kg)", price: 35, quantity: 60 },
];

const subTotal = groceries.reduce((subTotal, product) => {
  return subTotal + product.price * product.quantity;
}, 0);



// ------------------------------------------------------


const electronics = [
  { id: 1, name: "Smartphone", price: 25000, rating: 10 },
  { id: 2, name: "Laptop", price: 65000, rating: 5 },
  { id: 3, name: "Tablet", price: 18000, rating: 8 },
  { id: 4, name: "Smart TV", price: 55000, rating: 3 },
  { id: 5, name: "Bluetooth Speaker", price: 2200, rating: 20 },
];


const bestRating=electronics.reduce((top,rate)=>{

    if (top.rating>rate.rating) {
        return top
    }
    return rate

},electronics[0])


console.log(bestRating);

// ans Bluetooth Speaker


// ----------------------------------------------------

// lookup table


const books = [
  { id: 1, author: "J.K. Rowling", title: "Harry Potter and the Sorcerer's Stone" },
  { id: 2, author: "George R.R. Martin", title: "A Game of Thrones" },
  { id: 3, author: "J.R.R. Tolkien", title: "The Lord of the Rings" },
  { id: 4, author: "Harper Lee", title: "To Kill a Mockingbird" },
  { id: 5, author: "F. Scott Fitzgerald", title: "The Great Gatsby" },
];


const lookupTable=books.reduce((table,book)=>{
    table[book.id]=book
},{})


const book=lookupTable[5]

// lookup korle kno kisu onk taratari khuje pawa jay constant tim a tai ata k order of n(1) bole




 console.log(lookupTable);