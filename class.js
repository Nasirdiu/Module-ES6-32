class Support{
    name;
    role='support wen dev';
    address;
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
    startSesstion(){
        console.log(this.name,'start a support sesstion');
    }
}

const amir=new Support('amir khan','BD');
const salman=new Support('salman khan',"DHAKA");
// console.log(amir,salman);

amir.startSesstion();
salman.startSesstion();

console.log(amir,salman);