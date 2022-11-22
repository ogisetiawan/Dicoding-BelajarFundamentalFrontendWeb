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

//@ Asyncrounous
//? task yang kecil akan selesai duluan
console.log('Selamat datang!');//? ext 1
 
setTimeout(() => { //? with settimeout we can promize other script can run early
  console.log('Terimakasih sudah mampir, silakan datang kembali!')
}, 3000); //? ext 3
 
console.log('Ada yang bisa dibantu?'); //? ext 2


//@ Callback
//? prosess async untuk mendapatkan nilai setelah script async
const orderCoffee = callback  => {
  let coffee = null;
  console.log("Sedang membuat kopi, silakan tunggu...");
  //? Async
  setTimeout(() => {
      coffee = "Kopi sudah jadi!";
      callback(coffee) //? if not use callback, coffe still null
  }, 3000);

  // return coffee;
}

orderCoffee(kopi => { //? param kopi is callback
  console.log(kopi); 
});

//@ Promise
//? prosses async
const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = false;
  if (isCoffeeMakerReady) {
    resolve('Kopi berhasil dibuat'); //? if value true
  } else {
    reject('Mesin Kopi tidak bisa digunakan!');
  }
};

//? function hanlder
const handlerSuccess = resolvedValue => { //? handler function pada param promise
  console.log(resolvedValue);
}

const handlerRejected = rejectionReason => {
  console.log(rejectionReason) //? return param dari object promise
};
 
const makeCoffee = new Promise(executorFunction);
makeCoffee.then(handlerSuccess).catch(handlerRejected); //? then and catch

//@ promiseAll
const arabicaOrder = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Kopi arabika selesai!');
    }, 4000);
  });
};
 
const robustaOrder = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Kopi robusta selesai!');
    }, 2000);
  });
};
 
const libericaOrder = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Kopi liberica selesai!');
    }, 3000);
  });
};
 
//? function handler
const handlerSuccess = resolvedValue => { //? handler function pada param promise
  console.log(resolvedValue);
}

const handlerRejected = rejectionReason => {
  console.log(rejectionReason) //? return param dari object promise
};
 

const promises = [arabicaOrder(), robustaOrder(), libericaOrder()]; //? set into object array to call promise
Promise.all(promises).then(handlerSuccess).catch(handlerRejected); //? call promise and handler

//@ Async await
const getCoffee = () => { //? object promise
  return new Promise((resolve, reject) => {
      const seeds = 11;
      setTimeout(() => {
          if (seeds >= 10) {
              resolve("Kopi didapatkan!");
          } else {
              reject("Biji kopi habis!");
          }
      }, 1000);
  })
}

async function makeCoffee() { //? tell that makecoffe as async
  // getCoffee().then(coffee => { //? promise getCoffe()
  //     console.log(coffee);
  // });
  //? call object promise async wait
  try {
    const coffee = await getCoffee(); //? await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve
    console.log(coffee);
  }catch(reject){
    console.log(reject);
  }
}

makeCoffee();