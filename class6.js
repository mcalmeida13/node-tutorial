/*

Class 6
"""
Why using streams
"""
*/
import * as fs from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';

readLargeFileOld('.','largeText','txt');
async function readLargeFileOld(path,file,extension) {
    try{
        let openFile = await fs.readFile(`${path}/${file}.${extension}`,'utf-8');
        console.log(openFile);
    } catch(error) {
        console.log("Error", error);
    }

}


// const readStream  = createReadStream('./example_copy.txt','utf-8');
// const writeStream = createWriteStream('./example2.txt');
// readStream.on('data', (chunk) =>{
//     // console.log(chunk);
//     writeStream.write(chunk);
// });

