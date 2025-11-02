const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    stock: 25,
    rating: 4.5,
    category: "Audio",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 1899,
    stock: 40,
    rating: 4.3,
    category: "Audio",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 4999,
    stock: 15,
    rating: 4.7,
    category: "Wearable",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 1200,
    stock: 60,
    rating: 4.2,
    category: "Accessories",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 3200,
    stock: 30,
    rating: 4.6,
    category: "Accessories",
  },
  {
    id: 6,
    name: "USB-C Charger",
    price: 850,
    stock: 100,
    rating: 4.4,
    category: "Power",
  },
  {
    id: 7,
    name: "LED Monitor 24-inch",
    price: 12500,
    stock: 10,
    rating: 4.8,
    category: "Display",
  },
  {
    id: 8,
    name: "External Hard Drive 1TB",
    price: 6999,
    stock: 22,
    rating: 4.5,
    category: "Storage",
  },
  {
    id: 9,
    name: "Laptop Stand",
    price: 1450,
    stock: 45,
    rating: 4.1,
    category: "Accessories",
  },
  {
    id: 10,
    name: "Webcam HD",
    price: 2750,
    stock: 18,
    rating: 4.3,
    category: "Camera",
  },
];

const topProducts = products
  .filter((item) => item.category === "Audio")
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3)
  .map((item) => {
    return { name: item.name };
  });

console.log(topProducts);

// -------------------------------------------------------

const food = ["apple", "Banana", "mango"];
food.sort((a, b) => {
  a.localeCompare(b);
});

// jodi amra sudu sort kpri tahole age capital leter er gula by defult bhabe ase sort er
//  -------------ata bad deyar jonno amra localeCompare () use kore tahke jate kno case sensitive na hoy a-z a sort kora jay

// ---------------------------------------------------

// flate arry



const number =[1,2,3,4,5 ,[6,7,8,9]]
const flatArray=number.flat()
console.log(flatArray);


// const flatArray=number.flat(Infinity)


// onk besi nested hole amra to ata gone kora possible na tokhon amra infinite diye ata solve korte pari

// flat diye kno nasted array k ekta array te niye asa jay ex [1,2,3,4,5,6,7,8,9]

const number2 =[1,2,3,4,5 ,[6,3,8,1]]

const removeDub=[...new set(number2.flat())]
// atar maddome duplicate sorano jay


// -----------------------------------------------------------
// some

const odd=[1,2,3,4,5,6]
const oddNumber=odd.some((number)=>number % 2===0)

// ans true

// -------------------------------------
// role with some

const role1=["user","editor"]
const role2=['admin','manager']

const currentRole=role1.some((role)=>role2.includes(role))

// ans false
const role3=["user","editor","admin"]
const role4=['admin','manager']

const currentRole2=role3.some((role)=>role4.includes(role))

// ans true

