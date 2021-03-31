import { createReadStream, createWriteStream } from 'fs';
import * as zlib from 'zlib';
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
const readStream  = createReadStream('./example_stream.txt.gz');
const writeStream = createWriteStream('./example_unziped.txt');
readStream.pipe(gunzip).pipe(writeStream);
