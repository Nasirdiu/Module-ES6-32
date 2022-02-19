// const [name,title]=['Nasir',369,'Hello'];

// console.log(name,title);

//2 vabe kora jai objet and array.
const {name,title}={name:'Nasir',title:369,falto:'Hello'};

 console.log(name,title);

const company = {
    name: "germents",
    it: { id: 12, name: "computer dep", slary: 25000, position: "IT enginner" },
    qul: {id: 20,name: "kapor",dep: "textiles",salary: 15000,ceoName: {address: "Dhaka Gazipur",allkormi: 100,allcost: 2500000,textilem: 20,ceo: "Nasir",
      },
    },
  };
  //jodi ami ? na use kori taile error asebe ai object name kisu nai bola.jodi ? kori taile undefined asbe.
console.log(company.qul.ceoName.ceo.back?.all);  