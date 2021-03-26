const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2) => {
    console.log("tutorial event has occurred");
    console.log(num1+num2);
})

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
pedro.on('name', ()=>{
    console.log('my name is' + pedro.name);
})
/*
"""
Primeiro video
"""
const sum = require("./tutorial");

// console.log("Node is working");
const tutorial = require('./tutorial')
// console.log(tutorial(1,1));

console.log(tutorial);
console.log(tutorial.sum(1,2));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
*/