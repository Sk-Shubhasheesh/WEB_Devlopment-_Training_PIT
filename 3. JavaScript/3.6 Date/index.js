const d = new Date();

console.log(d.toDateString());
console.log(d.toString());
console.log(d.toISOString());

console.log(d.getDate());
// Sun, Mon, Tue, Wed, Thu ,fri, Sat
// // 0, 1,2 ,3,4,5,6
console.log(d.getDay());

// Jan/feb/Mar
// 0/1/2/3
console.log(d.getMonth());

console.log(d.getFullYear());
console.log(d.getMilliseconds());
console.log(d.getMinutes());
console.log(d.getTime());
const now = Date.now();
console.log(now);


// Number: 0 based start honge
// String: 1 based start honge

const d1 = new Date("2022-10-20");
console.log(d1);
console.log(d1.toString());


// // year / Month / Date / Hour / Minute / second / millisecond
// const date = new Date(2024,5,28, 10, 12,45, 231);
// console.log(date.toString());


const d2 = new Date();
d2.setDate(20);
d2.setFullYear(2021);
d2.setMonth(3);
console.log(d2.toString());

console.log(d2.toLocaleString());

//  Date calculation

// const date1 = new Date();
// const date2 = new Date("2025-04-21");

// console.log(date2-date1);  //  difference between date is in millisecond


//  Countdown Timer for olympics
// Days , hour, minute , second

const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");
const date = date2-date1;
// console.log(date);
const days = Math.floor(date/(1000*60*60*24));

const hour = Math.floor((date/(1000*60*60))%24);

const minute = Math.floor((date/(1000*60))%60);
const second = Math.floor((date/(1000))%60);

console.log(`Olympics CountDownTime: Days:${days} hour:${hour} minute:${minute} second:${second}`);








