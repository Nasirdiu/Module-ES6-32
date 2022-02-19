const number=[11,111,2,3,4,6,7,5443,2,221,33,22,11,44,5];

const total=number.filter(x=>x>20);
const total2=number.filter(x=>x<20);
// console.log(total,total2);


//filter 

const company=[
    {name:'laptop', price:5006300, color:'black',location:'Dhaka'},
    {name:'Phone', price:50000, color:'black',location:'Dhaka'},
    {name:'Watch', price:5004400, color:'green',location:'Dhaka'},
    {name:'Bike', price:5001100, color:'yellow',location:'Dhaka'},
    {name:'Iphone', price:50444000, color:'red',location:'Dhaka'}
];
const output =company.filter(x=>x.color=='red');
console.log(output);

const result =company.find(x=>x.color=='red');
console.log(result);