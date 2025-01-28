

interface IAnimal {
    name: string;
    color: string;
    feet?: number;
}

class Animal implements IAnimal {
    name: string;
    color: string;
    feet?: number;

    constructor(json: any) {
        this.name = json['name'];
        this.color = json['color'];
        this.feet = json['feet'];
    }
}

class BipedAnimal extends Animal {
    constructor(json: any) {
        super(json);
        this.feet = 2
    }
}


var animal = new Animal({ name: 'Pig', color: 'pink', feet: 4, });
var biped = new BipedAnimal({ name: 'Monkey', color: 'brown' })


console.log(animal);
console.log(biped);
