import * as http from 'http';

const server = http.createServer((req,res) =>{

    if(req.url === '/'){
        res.write('Hello world from nodejs');
        res.end();
    } else {
        res.write('Wrong way buddy');
        res.end();   
    }
});    

server.listen('3000');