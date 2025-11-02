// object limitation

const course1 ={name:"ph level 1"}
const course2={name:"next level"}

const obj={}

obj[course1]={courseId:"ph level 1"}    
obj[course2]={courseId:"next level"}        
// [[]er modde ja thake object ota k string kore pele ]

console.log(obj);

// ans sudu second object hobe dublicate bad diye



// ------------------------------------------------------------------

// map basic
const course3 ={name:"ph level dev"}
const course4={name:"next level dev"}


const map=new Map()

map.set (course1,{courseId:"level3"})
map.set (course2,{
    courseId:"level4"
})
console.log(map);

// ans map(2) {
//    {name:"ph leveldev"}  =>{courseId:"level3"},
//    {name:"next level dev"} =>{courseId:"level4"} 
// }

// 2 takei key value hisebe deya jay ja cash er jonno use kora jay