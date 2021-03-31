import * as http from 'http';
import { createReadStream } from 'fs';


const server = http.createServer((req,response) =>{

    const readStream  = createReadStream('files/data.json');
    response.writeHead(200,{'Content-type': 'application/json'});
    readStream.pipe(response);
});    

server.listen('8000');