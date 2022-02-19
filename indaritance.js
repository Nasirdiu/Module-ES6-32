class member {
  name;
 
  address;
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class Support extends member {
    role = "support wen dev";
  timeGenerator;
  constructor(name, address, time) {
    super(name, address);
    this.timeGenerator = time;
  }
  startSesstion() {
    console.log(this.name, "start a support sesstion");
  }
}

class SupportCare extends member {
    role = "support wen dev";
  start(student) {
    console.log(this.name, "start a support student", student);
  }
}

class app extends member {
    role = "support wen dev";
  codeEdtor;
  constructor(name, address, editor) {
    super(name, address);
    this.codeEdtor = editor;
  }
  startApp(version) {
    console.log(this.name, "app vertion app", version);
  }
}

const amir = new Support("amir khan", "BD", "time 1.00");
const salman = new Support("salman khan", "DHAKA");

const alivatka = new SupportCare("aliya vatka", "dubui");

const apps = new app("vatka relase", "bangladesh", "vs code");

const appsRelase = new app("vatka relase", "bangladesh", "vs code");
appsRelase.startApp("1.245.10");

console.log(amir, alivatka, apps);
