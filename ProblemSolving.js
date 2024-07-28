// 1. ES6 Destructuring
// Problem: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.


let person = {
    name: 'Joy',
    age: 21,
  };

let { name,age } = person;

console.log(name); 
console.log(age);



// 2. ES6 Module
// Problem: Create a module that exports a function to calculate the area of a circle and import it into another file.

import { info } from "./Module.js";

console.log(info);



// 3. ES6 Classes
// Problem: Create a class Rectangle with properties width and height and a method to calculate the area.


class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

  }

  const number1 = new Rectangle ( 50 , 60 )

  console.log(number1)


//  4. Getter and Setter in ES6
// Problem: Create a class Person with a getter and setter for the fullName property.




const person2={
    name:"Joy",
    year:21,

    get age(){
        return this.year;
    },

    set FullName (fullName){
        this.name= fullName
    }
};

person2.FullName= "Joy ShutraDhar"

console.log(person2)


// 5. Class Expressions
// Problem: Create a class expression for a Circle with a method to calculate the circumference.

const Circle = class {
    constructor(radius) {
      this.radius = radius;
    }
  
    calculateCircumference() {
      return 2 * Math.PI * this.radius;
    }
  };
  const myCircle = new Circle(11);

  const circumference = myCircle.calculateCircumference();

  console.log(`The circumference of the circle is ${circumference}`);



//   6. JavaScript Computed Properties
// Problem: Create an object with computed property names based on variables.

let propName = 'Name';

const person3 = {
  [propName]: "Joy",
  Age:21,
};

console.log(person3);



// 7. Inheritance
// Problem: Create a base class Animal and a derived class Dog that inherits from Animal.

class Animal {
  constructor(Dog) {
    this.Dog = Dog;
  }
  present() {
    return 'I have a ' + this.Dog;
  }
}

class Dog extends Animal {
  constructor(name, Breed) {
    super(name);
    this.Breed = Breed;
  }
  show() {
    return this.present() + ', it is a ' + this.name;
  }
}
const Mydog = new Dog('Rex', 'German Shepherd');

console.log(Mydog)




// 8. New Target Operators
// Problem: Use new.target to create an abstract class Shape that cannot be instantiated directly.


function Shape (name) {
    if (!new.target) {
        throw "Cannot instantiate abstract class Shape directly";
    }
    this.name = name;
}

let newshape = new Shape ("Rectangle")

console.log(newshape)




// 9. Static Methods
// Problem: Create a class MathUtil with a static method square to calculate the square of a number.


class MathUtil {
    constructor(square) {
      this.square = square;
    }
    static number() {
      return "number * number";
    }
  }
  
  const number = 5;
  const squared = MathUtil.square(number);

  console.log(number);
  console.log(squared);


//   10. Symbol
// Problem: Create an object with a symbol as a property key and demonstrate accessing it.


const uniqueSymbol = Symbol('uniqueKey');

const obj = {
  [uniqueSymbol]: 'This is a unique value'
};

console.log(obj[uniqueSymbol]); 




  

