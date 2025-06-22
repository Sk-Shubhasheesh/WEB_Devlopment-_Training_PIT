// let obj1 = {
//     a:1,
//     b:2
// }


// shallow copy
// let obj2 = obj1;
// console.log("Object 2", obj2);

// // changing in value effect both object 
// obj2.a=10;
// console.log(obj2, obj1);

// //  deep copy 
// let obj3 = structuredClone(obj1);
// console.log("Object 3", obj3);

// // changing in value not effect both  object 
// obj3.a = 20;
// console.log(obj3, obj1);


 // Nested object
const user = {
    name:"Rohit",
    balance: 420,
    address: {
        pincode: 246149,
        city: "kotdwar"
    }
}

// console.log(user.address.pincode);


//  structureclone
const user2 = Object.assign({},user);
// console.log(user2);
user2.address.pincode = 321314;
// console.log(user.address.pincode);

//  Destructruing of an object
// let obj = {
//     name: "Rohit",
//     money: 430,
//     balance: 30,
//     age: 20,
//     aadhar: "hfdsiohsai"
// };

// const {name, balance, age} = obj;
// console.log(name, balance, age);

// const {name:full_name , balance: amount, age:Umar} = obj;
// console.log(full_name, amount, Umar);

// const {name, age,...obj1} = obj;
// console.log(name, age);
// console.log(obj1);


const arr = [3,2,1,5,10];

// const [first,second, ,third] = arr;
// console.log(first, second, third);

// const [first,second,...third] = arr;
// console.log(first, second);
// console.log(third);



let obj = {
        name: "Rohit",
        age: 20,
        arr: [90,40,60,80],
        address: {
            pincode:246149,
            city:"Kotdwar",
            state: "uk"
        }


};

const {address:{pincode, city}} = obj;
console.log(pincode,city);

// const {arr: [first]} = obj;
// console.log(first);

// let user = {
//     name: "Rohit",
//     amount: 420,
//     greet: function(){
//         console.log("Hello COder Army");
//     },
//     meet: function(){
//         return 20;
//     }
// }

// console.log(user.greet());
// console.log(user.meet());

// let obj = {
//     name:"Rohit",
//     amount:420,
//     greet: function(){
//         return 10;
//     }
// }


// console.log(obj.toString())
// // arr is an object
// let arr = [2,3,1,8];
// arr.push(10);






