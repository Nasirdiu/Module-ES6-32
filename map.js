/* const numbers = [2, 5, 7, 10, 9];
const output = [];

const dubol = number => number * 2;
for (const number of numbers) {
  const result = dubol(number);
  output.push(result);
}
console.log(output); */

// arrow

// const total = numbers.map(number => number * 2);
 /* const total = numbers.map(x => x * 2);
console.log(total);

const square=numbers.map(x=>x*x);
console.log(square); */

//more map

/* const friend=['tom jerry','tom police','tom nasir','tom pagle'];

const fLength=friend.map(friend=>friend.length);
console.log( fLength); */

const company=[
    {name:'laptop', price:5006300, color:'black',location:'Dhaka'},
    {name:'Phone', price:50000, color:'black',location:'Dhaka'},
    {name:'Watch', price:5004400, color:'black',location:'Dhaka'},
    {name:'Bike', price:5001100, color:'black',location:'Dhaka'},
    {name:'Iphone', price:50444000, color:'black',location:'Dhaka'}
];

const output=company.map(x => x.name);
const outputs=company.map(x => x.price);
// console.log(output,outputs);

company.map(x=> console.log(x.name));
company.forEach(x=> console.log(x.price));