class Animal{
    constuctor(name){
        this.name=name;
    }
    speak(){
        console.log(this.name + 'makes a noise');
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    bark(){
        console.log(this.name + 'barks');
    }
}   
const myDog=new Dog('Buddy','Golden Retriever');
myDog.speak();
myDog.bark();