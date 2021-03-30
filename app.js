/*

Class 5
"""
Working with Readable and Writable streams
"""
*/

const fs = require('fs');

const readStream  = fs.createReadStream('.example_copy.txt');
readStream.on('data', (chunk) =>{
    console.log(chunk)
})

/*

Class 4
"""
Working with file system module
"""
*/

// import * as fs from 'fs/promises';


// //Copying example
// import {copyFileSync, constants} from 'fs';

// copyFileSync('example.txt','example_copy.txt');
// console.log("example.txt was copied to example_copy.txt");


// deleteFolderWithFiles('tutorial');

// createMultipleFiles();

async function createMultipleFiles () {
    try {
        

      await Promise.all([createFile('tutorial','a','txt'),createFile('tutorial','b','txt')]);
      
      console.log("Success on creating files");
      
    } catch(error) {
      console.log("error", error)
    }
}



async function deleteFolderWithFiles(folder){
    try {
        await deleteFilesWithinFolder(folder);
        await deleteFolder(folder);
        console.log(`Sucess on deleting ${folder}`)

    } catch (error) {
        console.log(`Error on deleting files in the ${folder}`, error);
    }
}

async function renameFile(file,name,extension) {
    try{
        await fs.rename(file,`${name}.${extension}`);
        console.log(`Success on renaming ${file} to ${name}.${extension}`);
    } catch(error) {
        console.log("Error on renamaing", err);
    }
}


async function deleteFilesWithinFolder(folder) {
    try {
        const files = await readDirectory(folder);

        for (let file of files) {
            await deleteFile(`${folder}/${file}`);
            console.log(`Deleted ${file}`)
        }
        console.log(`Sucess on deleting files from ${folder}`);
    } catch (error) {
        console.log('Error on reading folder with files', error);
    }

}
async function readDirectory(folder) {
    try {
        const files = await fs.readdir(folder);
        // console.log(files);
        return files;
    } catch (error) {
        console.log('Error on reading a folder', error);
    }
}

async function deleteFile(file) {
    try {
        await fs.unlink(file);
        console.log("Sucesson on deleting the file");
    } catch (error) {
        console.log('Error on deleting a file', error);
    }
}

async function deleteFolder(folder) {
    try {
        await fs.rmdir(folder);
        console.log("Sucesson on deleting the folder");
    } catch (error) {
        console.log('Error on deleting a folder', error);
    }
}

async function createDirectory(name) {
    try {
        await fs.mkdir(name);
        console.log(`Sucess on creating ${name} folder`);
    } catch (error) {
        console.log('Error on creating a folder', error);
    }
}


async function createFile(folder,name,extension) {
    try{
        await fs.writeFile(`${folder}/${name}.${extension}`,'');
        console.log(`Sucess on creating ${name}.${extension} file`);
    } catch(error) {
        console.log("Error on creating", err);
    }
}

// createFolderWithFile('teste','teste','txt');

async function createFolderWithFile(folder,file,extension) {
    try {
        await fs.mkdir(folder);
        console.log(`Sucess on creating ${folder} folder`);
        try{
            await fs.writeFile(`${folder}/${file}.${extension}`,"this is an example inside a folder 1");
            console.log(`Sucess on creating ${folder}/${file}.${extension} inside ${folder}`);
        } catch(error) {
            console.log("Error on creating the file", error);
        }
    } catch (error) {
        console.log("Error on creating the folder", error);
    }
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
*/