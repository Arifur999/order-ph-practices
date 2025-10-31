// order of n

const startTime = performance.now();

for ((let) => (i = 0); i <= 5000; i++) {
  console.log(i);
}
const endTime = performance.now();

console.log(`code${endTime - startTime} ms`);

// -----------------------------------------

// order of

const firstArray = [];
const secondArray = [];

for (let i = 0; i < 6000; i++) {
  if (i < 3000) {
    firstArray.push(i);
  }
  secondArray.push(i);
}

console.log(firstArray.length);
console.log(secondArray.length);

console.time(map1);
const firstList = firstArray.map((number) => ({ number }));
console.endTime(map1);

console.time(map2);
const secondList = secondArray.map((number) => ({ number }));
console.endTime(map2);

// --------------------------------------

console.time(find);

const list = secondList.find((list) => list.listId === 4000);

console.endTime(find);

// time ekhane dubble lagbe


// -------------------------------------------------------


const list = secondList[4000]
console.time(list);


// sov smy ektime e pabe karon ata index niye dora hoise