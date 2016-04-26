class Animal {
  constructor(species) {
    this.species = species;
  }
  
  eat() {
  console.log(this.species + " Nom Nom Nom");
  }

 speak() {
  console.log(this.species + " makes a sound" );
  }

}

class Dog extends Animal {
  constructor (name) {
    super("Dog");
    this.name = name;
    console.log(Dog.name);
  }
  speak() {
    console.log(this.name + " says Hello")  ; 
          }
}

var newAnimal = new Animal("Koala");
console.log(newAnimal.species);

newAnimal.eat();
newAnimal.speak();

var newDog = new Dog("Sol");
console.log(newDog.name);
newDog.eat();
newDog.speak();