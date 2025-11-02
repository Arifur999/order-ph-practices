const set=new set()

set.add("arif");
set.add("sakib");


console.log(set);

// ---------------------------------------------------


const arr = ["mengo" , "banana", ]
const set =new set(arr);
const test =Array.form(arr);
console.log(test);




// arry diye new ekta object return kore 



const chack= set.has("mango")


// set.has diye kno kisu ase naki oita chack kora hoy


const delete =set.delete("arif")

// kno kisu delete korar jonno set.delete use hoy bulian valu dey and delete kore day


// --------------------------------------------------
// brutforce

const arr =["shadw","safi","hamza"]

const removeItem =(arr)=>{
const newArr=[]
arr.forEach(element => {
    
    if (!newArr.includes(element)) {
        newArr.push(element);
    }
});

    return arr;
}


// set diye


// set implementation

const arr =["shadw","safi","hamza"]

const removeItem =(arr)=>{
 const set= new set (arr)
return Array.form(set)

}

console.log(removeItem(arr));


// ------------------------------------------------------------
