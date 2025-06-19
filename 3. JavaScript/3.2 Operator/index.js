console.log("========= 1. Arithmetic Operators =========");
let ab = 10, b = 3;
console.log("a + b =", ab + b);  // Addition
console.log("a - b =", ab - b);  // Subtraction
console.log("a * b =", ab * b);  // Multiplication
console.log("a / b =", ab / b);  // Division
console.log("a % b =", ab % b);  // Modulus
console.log("a ** b =", ab ** b); // Exponentiation
console.log("++a =", ++ab);     // Pre-increment
console.log("b-- =", b--);     // Post-decrement

console.log("\n========= 2. Assignment Operators =========");
let x = 5;
x += 3;  // Same as x = x + 3
console.log("x += 3:", x);
x -= 2;
console.log("x -= 2:", x);
x *= 2;
console.log("x *= 2:", x);
x /= 2;
console.log("x /= 2:", x);
x %= 3;
console.log("x %= 3:", x);
x **= 2;
console.log("x **= 2:", x);

console.log("\n========= 3. Comparison Operators =========");
let m = 10, n = '10';
console.log("m == n:", m == n);   // true (type coercion)
console.log("m === n:", m === n); // false (strict equal)
console.log("m != n:", m != n);   // false
console.log("m !== n:", m !== n); // true
console.log("m > 5:", m > 5);
console.log("m < 5:", m < 5);
console.log("m >= 10:", m >= 10);
console.log("m <= 9:", m <= 9);

console.log("\n========= 4. Logical Operators =========");
let p = true, q = false;
console.log("p && q:", p && q); // AND
console.log("p || q:", p || q); // OR
console.log("!p:", !p);         // NOT

console.log("\n========= 5. Bitwise Operators =========");
let bit1 = 5, bit2 = 3;
console.log("bit1 & bit2:", bit1 & bit2); // AND
console.log("bit1 | bit2:", bit1 | bit2); // OR
console.log("bit1 ^ bit2:", bit1 ^ bit2); // XOR
console.log("~bit1:", ~bit1);             // NOT
console.log("bit1 << 1:", bit1 << 1);     // Left Shift
console.log("bit2 >> 1:", bit2 >> 1);     // Right Shift

console.log("\n========= 6. Ternary Operator =========");
let age = 18;
let access = (age >= 18) ? "Allowed" : "Denied";
console.log("Access:", access);

console.log("\n========= 7. Type Operators =========");
console.log("typeof 123:", typeof 123);               // number
console.log("typeof 'Hello':", typeof "Hello");       // string
console.log("typeof true:", typeof true);             // boolean
console.log("typeof undefined:", typeof undefined);   // undefined
console.log("typeof null:", typeof null);             // object (special case)
console.log("typeof {}:", typeof {});                 // object
console.log("typeof []:", typeof []);                 // object
console.log("typeof function(){}:", typeof function(){}); // function
console.log("123 instanceof Number:", 123 instanceof Number); // false
console.log("new Number(123) instanceof Number:", new Number(123) instanceof Number); // true

console.log("\n========= 8. String Operators =========");
let str1 = "Hello", str2 = "World";
console.log("Concatenation:", str1 + " " + str2);
str1 += " JavaScript";
console.log("After += :", str1);

console.log("\n========= 9. Comma Operator =========");
let result = (x = 1, y = 2, z = x + y); // Returns the last value
console.log("Comma operator result:", result);

console.log("\n========= 10. Optional Chaining Operator =========");
let user = { profile: { name: "Shubhasheesh" } };
console.log("user?.profile?.name:", user?.profile?.name); // Safe access
console.log("user?.address?.city:", user?.address?.city); // undefined (no error)

console.log("\n========= 11. Nullish Coalescing Operator (??) =========");
let username = null;
let displayName = username ?? "Guest"; // returns "Guest" if null/undefined
console.log("Display Name:", displayName);

console.log("\n========= 12. Destructuring and Spread Operators =========");
const arr = [1, 2, 3];
const [first, second] = arr;
console.log("First two elements:", first, second);

const obj = { a: 1, b: 2 };
const { a, b: renamedB } = obj;
console.log("Destructured a:", a, "Renamed b:", renamedB);

const arr2 = [...arr, 4, 5];  // Spread
console.log("New Array:", arr2);

const obj2 = { ...obj, c: 3 };
console.log("New Object:", obj2);
