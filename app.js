/*

Class 4
"""
Working with file system module
"""
*/

const fs = require('fs');

// Create a file

// 1st argument: name of the file
// 2nd argument: what is written on the file
// 3rd arugment: callback function in case of any error on the application
fs.writeFile('example.txt',"this is an example", (err) => {
    if (err){
        console.log("Error", err);
    } else {
        console.log("Sucess on creating the file");
    }
})

/*

Class 3
"""
ReadLine Module
"""
*/
/*
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
                          output: process.stdout});

let num1 = Math.floor((Math.random()*10) + 1);
let num2 = Math.floor((Math.random()*10) + 1);

let answer = num1 + num2;

rl.question(`What is ${ num1 } + ${ num2 }? \n`,
(userInput) =>{
    inputFunction(userInput,answer);
});

const inputFunction = function(userInput,answer) {
    if(userInput.trim() == answer){
        rl.close();
    } else{
        rl.setPrompt('Wrong answer! Try again \n')
        rl.prompt();
        rl.on('line',(c) => {
            inputFunction(c,answer);
        })
    }
}

rl.on('close', () =>{
    console.log("Correct!!");
});
 */
/*

Class 2
"""
Event class
"""
*/
/*
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
let manuela = new Person('Manuela');
pedro.on('name', ()=>{
    console.log('my name is' + pedro.name);
});

manuela.on('name', ()=>{
    console.log('my name is ' + manuela.name);
});

pedro.emit("name");
manuela.emit("name");
 */

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