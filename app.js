/*

Class 4
"""
Working with file system module
"""
*/



// Create a file

// 1st argument: name of the file
// 2nd argument: what is written on the file
// 3rd arugment: callback function in case of any error on the application


// const fs = require('fs');

// //Callback way - creating a file
// fs.writeFile('example.txt',"this is an example", (err) => {
//     if (err){
//         console.log("Error on creating", err);
//     } else {
//         console.log("Sucess on creating the file");
//         fs.readFile('example.txt','utf8',(err,file) =>{
//             if(err){
//                 console.log("Error on reading", err);
//             } else {
//                 console.log(file);
//             }
//         })
//     }
// })

// //Copying example
// import {copyFileSync, constants} from 'fs';

// copyFileSync('example.txt','example_copy.txt');
// console.log("example.txt was copied to example_copy.txt");

//Callback way - renaming a file
// import * as fs from 'fs/promises';
// import { rename } from 'fs/promises';
// fs.rename('example.txt','example_renamed2.txt', (err) => {
//     if (err){
//         console.log("Error on renaming", err);
//     } else {
//         console.log("Sucess on renaming the file");
//         fs.readFile('example.txt','utf8',(err,file) =>{
//             if(err){
//                 console.log("Error on reading", err);
//             } else {
//                 console.log(file);
//             }
//         })
//     }
// })
//// Promise way - renaming a file
// import * as fs from 'fs/promises';
// import { rename } from 'fs/promises';

// try{
//     await fs.rename('example.txt','example_renamed_asyn.txt')
// } catch(error) {
//     console.log("Error on rename", err);
// }


// //Promise way -creating a file
// import * as fs from 'fs/promises';
// import { writeFile } from 'fs/promises';

// try{
//     await fs.writeFile('example.txt',"this is an example")
// } catch(error) {
//     console.log("Error on creating", err);
// }

// //Promise way - appending data into a file
import * as fs from 'fs/promises';
import { appendFile } from 'fs/promises';

// // Creating a folder
// try {
//     await fs.mkdir('New Folder');
// } catch (error) {
//     console.log('Error on creating a file', error);
// }

// // Deleting a folder
// try {
//     await fs.rmdir('New Folder');
//     console.log("Sucess on deleting the New Folder");
// } catch (error) {
//     console.log('Error on creating a file', error);
// }

// Create a folder with a file
try {
    await fs.mkdir('tutorial');
    console.log("Sucess on creating tutorial folder");
    try{
        await fs.writeFile('tutorial/example.txt',"this is an example inside a folder");
        console.log("Sucess on creating example inside tutorial");
    } catch(error) {
        console.log("Error on creating", err);
    }
} catch (error) {
    console.log('Error on creating a file', error);
}
// try{
//     await fs.appendFile('example_renamed_asyn.txt',"It was wrong. I wrote writeFile instead of appendFile");
// } catch(error) {
//     console.log("Error on appending data", err);
// }

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