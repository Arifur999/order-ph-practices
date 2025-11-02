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










const electronics = [
  { id: 1, name: "Smartphone", price: 25000, quantity: 10 },
  { id: 2, name: "Laptop", price: 65000, quantity: 5 },
  { id: 3, name: "Tablet", price: 18000, quantity: 8 },
  { id: 4, name: "Smart TV", price: 55000, quantity: 3 },
  { id: 5, name: "Bluetooth Speaker", price: 2200, quantity: 20 },
];
