class Person {
  greet() {
    console.log("Hello, my name is Anna");
  }
}
var person1 = new Person();
person1.greet();

class Car {
  printBrand() {
    console.log("BMW");
  }
}
var car1 = new Car();
var car2 = new Car();
car1.printBrand();
car2.printBrand();

class Book {
  printTitle() {
    console.log("1984");
  }
}
var book1 = new Book();
book1.printTitle();

class Student {
  printGrade() {
    console.log(90);
  }
}
var student1 = new Student();
var student2 = new Student();
var student3 = new Student();
student1.printGrade();
student2.printGrade();
student3.printGrade();

class Animal {
  printType() {
    console.log("Dog");
  }
}
var animal1 = new Animal();
animal1.printType();

class Phone {
  checkPrice() {
    console.log("Expensive");
  }
}
var phone1 = new Phone();
var phone2 = new Phone();
phone1.checkPrice();
phone2.checkPrice();
