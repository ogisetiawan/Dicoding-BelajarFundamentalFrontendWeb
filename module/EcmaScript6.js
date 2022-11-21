//@ Template Literals
//? with singlequote we can use directly with paragrah and variable
const fanArt = 'Fan Art';
const name = 'Ogi';
const description = 'Description'

const templateLiterals = `
  <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
  <div class="club-info">
    <h2>${name}</h2>
    <p>${description}</p>
  </div>
`;

console.log(templateLiterals)

//@ spread operator and rest parameter
//? we can split each element array directly without indexing array/obj
const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
const others = ['Cake', 'Pie', 'Donut'];

const allFavorites = [...favorites, ...others];

console.log(allFavorites); 

//@ arrow function
//? using function with one line as simplify code
const upperizedNames = ['Dimas', 'Widy', 'Buchori'].map(name => name.toUpperCase());
console.log(...upperizedNames);

const nama = (arg) => arg; //? arrow function stored in variable
console.log(nama(`ucup`));
['Dimas', 'Widy', 'Buchori'].forEach(name => console.log(`Nama saya ${name}`)); //? passed an argument

//~ keyword this in arrow function
function People(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}
 
//? menambahkan introMyself ke People
//? menggunkan prototype atau __proto__ agar tidak memakan memori setiap method yang dibuat
People.prototype.introMyself = function () { //? regular exp karena this akan menjadi global var
  // this -> People
  setTimeout(() => {
    // this -> People
    console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`);
    console.log(`Hobby saya adalah ${this.hobby}`);
  }, 300);
};
 
const programmer = new People('John', 18, ['Coding', 'Read book', 'Ping-pong']); //? add value to object/property
programmer.introMyself();

//@ Class ES6
class Car {
  constructor(manufacture, color, type) {
    this.manufacture = manufacture;
    this.color = color;
    this.enginesActive = false;
    this._type = type; //? with _ we cannot call as getter/setter, expect with method
  }
 
  startEngines() {
    console.log('Mobil dinyalakan...');
    this.enginesActive = true;
  }
 
  info() {
    console.log(`Manufacture: ${this.manufacture}`);
    console.log(`Color:  ${this.color}`);
    console.log(`Engines: ${this.enginesActive ? 'Active' : 'Inactive'}`);
  }
  //? getter/setter
  get type() {
    return `tipe mobil: ${this._type}`;
  }
 
  set type(value) {
    console.log(`tipe mobil diubah dari ${this._type} menjadi ${value}`);
    this._type = value;
  }
}
 
const johnCar = new Car('Honda', 'Red', 'Matic'); //? set Car instance
johnCar.startEngines(); //? method in class Car
johnCar.info();
//? Property Accessor
console.log(`Warna mobil: ${johnCar.color}`); //? get property in constructor
johnCar.color = 'RedBlue'; //? set property
console.log(`Warna mobil: ${johnCar.color}`); //? get property in constructor
//? getter/setter
console.log(johnCar.type); //? getter method
johnCar.type = 'Manual'; //? setter method 
console.log(johnCar.type); 

//~ Class Inheritance
class Mail {
  constructor(author) {
    this.from = author;
    this._contacts = [];
  }
  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this._contacts.push(to);
  }
  showAllContacts() {
    //? method di dalam class dibungkus dan bersifat privat
    return this._contacts;
  }
}

class WhatsApp extends Mail {
  constructor(author) {
    super(author); //? memanggil constructor parent dan hanya dapat digunakan di constructor
    this.username = "dicoding";
    this.isBussinessAccount = true;
  }
  myProfile() {
    return `my name ${this.username}, is ${
      this.isBussinessAccount ? "Business" : "Personal"
    }`;
  }
  static callTest(){
    console.log(124)
  }
}

const wa1 = new WhatsApp("080111000222"); //? set value super(authour) pada constructor class whastapp
console.log(wa1.myProfile()); //? call method from child class
console.log(wa1.sendMessage("pesan", "ogi")); //? call class from parent class and property from will set super(author)
console.log(wa1.showAllContacts()); //
console.log(WhatsApp.callTest());