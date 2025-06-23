let obj = {
    name: "rohan",
    age:23,
    gender:"male",
    city:"kotdwar"
};

// for in loop I can iterate over keys in an object

for(let key in obj)
    console.log(key);

// for in loop , we can use to print values

for(let key in obj)
{
    console.log(key, obj[key]);
}

// // Object.keys(obj)
console.log(Object.keys(obj));


// lets find difference between for in loop & Object.keys(obj)

let obj2 = Object.create(obj);
obj2.money = 420;
obj2.id = "Roh";
console.log(obj2);
console.log(Object.keys(obj2));
for(let key in obj2)
{
    console.log(key);
}
