/*

Class 4
"""
Working with file system module
"""
*/

import * as fs from 'fs/promises';
import { copyFileSync } from 'fs';

// copyFile('.','class1','js');

// deleteFolderWithFiles('tutorial');

// createMultipleFiles();

// createFolderWithFile('teste','teste','txt');


function copyFile (path,file,extension) {
    copyFileSync(`${path}/${file}.${extension}`,`${path}/${file}_copy.${extension}`);
    console.log(`${file}.${extension} was copied to ${file}_copy.${extension}`);
}

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

