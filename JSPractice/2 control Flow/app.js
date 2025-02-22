// const fruit = [
//   "apple",
//   "banana",
//   "cherry",
//   "date",
//   "elderberry", 
//   "fig",
// ];
// fruit.push("grape");


// const  pl = ["javascript", "on", "ruby", "php", "java", "c"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(pl.includes("javascript"));
// console.log(pl.join("-"));

// console.log(typeof fruit);
// const arr = [];
// console.log(typeof arr);

// const greeting = function (user) {
//   console.log(`Hello, ${user}`);
// }


// const person = {
//   name: "John",
//   age: 25,
//   greet: function () {
//     console.log(`Hello, ${person.name}`);
//   }
// }
// person.greet();

// //json
// const person2 = {
//   "name": "John",
//   "age": 25,
//   "email": "js@gmail.com",
//   "isSubscribed": true,
//   "hobbies": ["reading", "coding", "gaming"],
//   "address": {
//     "street": "123 main st",
//     "city": "New York"
//   }
// }


// const jsonString = JSON.stringify(person2)
// const parsedObject = JSON.parse(jsonString);

// console.log(jsonString);
// console.log(parsedObject);

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();  
// const day = date.getDate(); 
// const hours = date.getHours();

// console.log(`Date: ${year}, Date: ${month}, Date: ${day}, Date: ${hours}`);

// const date2 = new Date();

// console.log(date2.toDateString());
// console.log(date2.toISOString())

// setInterval(() => {
//   console.log(`This function runs every 2 seconds`);
// }, 2000);

// const intervalId = setInterval(function () {
//   console.log(`this function is being executed at the interval`)
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);


setTimeout( () => {
  console.log("hello");
  setTimeout( () => {
    console.log("world");
    setTimeout(() =>{
      console.log("namaste");
      setTimeout(() => {
        console.log("salam");
      }, 2000)
    }, 2000)
  }, 2000)
}, 2000)

const strNums = ["one", "two", "three", "four", "five"];
const moreStrNums = ["six", "seven", "eight", "nine", "ten"];

const concat = [...strNums, ...moreStrNums];
console.log(concat);

let peoples = ['huxn', 'john', 'doe', 'jane', 'smith'];
console.log('kumar', ...peoples);

let person = {
  name: 'john',
  age: 25,
  email: 'john.gmail.com'
}

const clone = {...person, works: "Programmer", location: 'locations'};
console.log(clone);

 function sum(a, b, ...hobbies) {
   console.log(a, b, hobbies);
 }
 sum('a', 'b', 'c', 'd', 'e', 'f', 'g');

 const foo = ["one", "two", "three", "four", "five"];

 const [three] = foo;
 console.log(three);

 function f() {
    return [1, 2, 3];
 }

 let a, b 
 [a, b] = f()

 function person(firstName, lastName, ...hobbies) {
   console.log(firstName, lastName, hobbies);
 }
 person('john', 'doe', 'reading', 'coding', 'gaming');

//  complete learing

typeof person;