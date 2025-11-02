// object limitation

const course1 = { name: "ph level 1" };
const course2 = { name: "next level" };

const obj = {};

obj[course1] = { courseId: "ph level 1" };
obj[course2] = { courseId: "next level" };
// [[]er modde ja thake object ota k string kore pele ]

console.log(obj);

// ans sudu second object hobe dublicate bad diye

// ------------------------------------------------------------------

// map basic
const course3 = { name: "ph level dev" };
const course4 = { name: "next level dev" };

const map = new Map();

map.set(course1, { courseId: "level3" });
map.set(course2, {
  courseId: "level4",
});
console.log(map);
// 2 takei key value hisebe deya jay ja cash er jonno use kora jay

// ans map(2) {
//    {name:"ph leveldev"}  =>{courseId:"level3"},
//    {name:"next level dev"} =>{courseId:"level4"}
// }

map.clear;
// map.clear diye sov clear kora jay

map.size;

// map . size diye map er bitorer koyta ace tar size dekha jay

map.delete(course1);

// map.delete diye ekta key pass korle oi key delet kore dey

map.has(course1);

// map.has diye amra chack korte pari aie element ta ace naki nai

// map loop sudu foreach e ace

map.forEach((value, key) => console.log("value:", value, "key:", key));


// 2 ta alada alada dibe


// kno key er name change korte
map.forEach((value, key) => (key.name= "sohoz sorl" + key.name));


console.log(map);

// kno key er nam aie bhabe change kora  jay

map.key()
console.log([...map.key()]);


// map.key diye koyta ki ace dekha jey...spred kore nile arre of object akare return kore