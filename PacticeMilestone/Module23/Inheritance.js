class Parent{
    constructor(){
        this.fatherName = "Abul Sarder"
    }
}

class Child extends Parent {
    constructor(name){
        super();
this.name = name;
this.fatherName;
    }
    getFatherAndChildName() {
        return this.name + ", " + this.fatherName
    }
}

const babay = new Child('swapnil')
const babay2 = new Child('Ritu Borana')

console.log(babay.getFatherAndChildName());
console.log(babay2.getFatherAndChildName());