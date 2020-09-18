// Person constructor
// Constructor names start with a capital letter
function Person(name, dob) {
  //This refers to the current function scope
  this.name = name;
  //   this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// //This refers to the current window object as it is in the global scope
// console.log(this);
// //This refers to the current window object as it is in the global scope
// this.alert(1);

// //instantiate an object
// const brad = new Person('brad', 30);
// const john = new Person('john', 40);
// console.log(brad);

const john = new Person('john', '1992,10,12');
console.log(john.calculateAge());
