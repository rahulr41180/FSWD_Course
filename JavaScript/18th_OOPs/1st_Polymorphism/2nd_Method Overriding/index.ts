
/*
In JavaScript, a child class can provide a specific implementation of a method that is already defined in its parent class. This is known as method overriding.
*/

class Animal {
    makeSound(): void {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {

    makeSound(): void {
        console.log("Bark! Bark!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow! Meow!");
    }
}

let animals: Animal[] = [new Animal(), new Dog(), new Cat()];

animals.forEach((animal: Animal) => animal.makeSound());