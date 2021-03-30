/*

Class 5
"""
Working with Readable and Writable streams
"""
*/
import * as fs from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';

const readStream  = createReadStream('./example_copy.txt','utf-8');
const writeStream = createWriteStream('./example2.txt');
readStream.on('data', (chunk) =>{
    // console.log(chunk);
    writeStream.write(chunk);
});

