function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name + ' makes a noise');
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed; 
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(this.name + ' barks');
};

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak();
myDog.bark();
