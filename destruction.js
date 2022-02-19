// const fish={id:01,name:'hangor',price:2500,address:'dhaka',phone:'phone number 01714771225',};

// const {id,name,price,address,phone}=fish;
// console.log(id,name,address,price,phone);


//object
const company = {
  name: "germents",
  it: { id: 12, name: "computer dep", slary: 25000, position: "IT enginner" },
  qulaity: {
    id: 20,
    name: "kapor",
    dep: "textile",
    salary: 15000,
    textile: {
      address: "Dhaka Gazipur",
      allkormi: 100,
      allcost: 2500000,
      textile: 20,
      ceo: "nasir",
    },
  },
};

const { id, name, salary, position } = company.it;
const { dep } = company.qulaity;
const { address, ceo } = company.qulaity.textile;
console.log(id, name, salary, position, dep, address, ceo);
