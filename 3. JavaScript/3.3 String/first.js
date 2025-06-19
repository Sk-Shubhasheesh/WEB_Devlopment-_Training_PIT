
// Creating String
let str1 = "Hello Coder";  // 1st way
console.log(str1);
let str2 = 'I am Happy'; // 2nd way
console.log(str2);
let str3 =  `Hello ji mai mast hu`;  // 3rd way
console.log(str3);

// String concatentaion
let s1 = "Heelo";
let s2 =  " Coder";
console.log(s1+s2);

// String length
console.log(s2.length);

// Want to print - "Hello Coder"
console.log('"Hello Coder"');

// Next Line in String - \n
let msg = "Hello I am from Jaunpur. \nMyself Sk";
console.log(msg);

// If want toprint \n in Output then we use escape character
let comment = "You are not a good boy. \\nGet out from class."
console.log(comment);

let special = "Rohit";
console.log(special[4]);
console.log(special.charAt(3));


// to lowercase
// to uppercase
console.log(special.toLowerCase());
let strtemp = special.toUpperCase();
console.log(strtemp);
console.log(special);

let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder"));
console.log(hero.lastIndexOf("Coder"));
console.log(hero.indexOf("coder"));
console.log(hero.includes("Coder"));
               //0123456  
let newstring = "HeloDon";
            //  -7-6-5-4-3 -2-1 
console.log(newstring.slice(1,3));
// slice can take negative index also;
console.log(newstring.substring(0,3));
console.log(newstring.slice(-6,5));
console.log(newstring.slice(-2,4));

let str10 = "Hello Ji Kaise ho Ji";
console.log(str10.replace("Ji","Money"));
console.log(str10.replaceAll("Ji","Money"));

let str11 = "Money! honey! sunny! funny";
console.log(str11.split("! "));

let str12 = " hello ji ";
console.log(str12.length);
console.log(str12.trim().length);


// New way to create string
let lasteststring = new String("Hello Coder Army");
console.log(lasteststring);
console.log(typeof lasteststring);