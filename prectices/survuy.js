const survuyResponse = [
  "A",
  "B",
  "A",
  "C",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
  "C",
  "B",
  "D",
  "A",
  "C",
  "B",
];

const survuy = survuyResponse.reduce((table, response) => {
  //   if (table[response]) {
  //     table[response] = table[response] + 1;
  //   } else {
  //     table[response] = 1;
  //   }

  //---------------------------------- or-------------------------------

  table[response] = (table[response] || 0) + 1;

  return table;
}, {});
// --------------------------------------------------------------

// has table----------------------------------

const items = [
  {
    id: 1,
    item: "Wireless Mouse",
    price: 850,
    quantity: 25,
    category: "Electronics",
  },
  {
    id: 2,
    item: "Notebook",
    price: 120,
    quantity: 60,
    category: "Stationery",
  },
  {
    id: 3,
    item: "Water Bottle",
    price: 250,
    quantity: 40,
    category: "Accessories",
  },
  {
    id: 4,
    item: "T-Shirt",
    price: 750,
    quantity: 30,
    category: "Clothing",
  },
  {
    id: 5,
    item: "Coffee Mug",
    price: 300,
    quantity: 45,
    category: "Home & Kitchen",
  },
  {
    id: 6,
    item: "USB Flash Drive 32GB",
    price: 700,
    quantity: 50,
    category: "Electronics",
  },
  {
    id: 7,
    item: "Sunglasses",
    price: 950,
    quantity: 20,
    category: "Fashion",
  },
  {
    id: 8,
    item: "Backpack",
    price: 1250,
    quantity: 15,
    category: "Bags",
  },
  {
    id: 9,
    item: "LED Desk Lamp",
    price: 1100,
    quantity: 10,
    category: "Home & Decor",
  },
  {
    id: 10,
    item: "Wireless Earbuds",
    price: 2200,
    quantity: 18,
    category: "Electronics",
  },
];

const seelsByCategory = items.reduce((productTable, seels) => {
  const { category, price, quantity } = items;

  if (!table[category]) {
    table[category] = {
      totalPrice: 0,
      totalQuantity: 0,
    };
  }
  table[category].totalPrice += price * quantity;
  table[category].totalQuantity += quantity;

  return table;
}, {});
