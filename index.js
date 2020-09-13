const { sayHello, calculateVat } = require('./utils');
sayHello();
const vat7 = calculateVat(1000, 7);

// console.log("dir name > ", __dirname)
// console.log("file name > ", __filename)

const path = require('path')
// console.log("path base name >> ", path.basename(__filename))
// console.log("path dir name >> ", path.dirname(__filename))
// console.log("path ext name >> ", path.extname(__filename))

const fs = require('fs')
// fs.writeFile(path.join(__dirname, 'tdata.txt'), 'Hello Aphiwit! ', () => {
//     console.log("wirte file successful!")
// })
const read_file_async = fs.readFileSync(path.join(__dirname, 'tdata.txt'), 'utf-8')
console.log(read_file_async)

// const os = require('os')
// console.log(os.cpus());
// console.log(os.homedir());
// console.log(os.uptime());


const events = require('events')
const EventEmitter = events.EventEmitter;
const connect = new EventEmitter();

connect.on('online', () => {
    console.log("server is running .....")
})
// connect.emit('online')
// connect.emit('online')
// connect.emit('online')

const http = require('http')

function getPage(page) {
    const filePath = path.join(__dirname, page);
    return fs.readFileSync(filePath);
}
http.createServer((req, res) => {
    const fileType = path.extname(req.url) || '.html';

    if (fileType == '.html') {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        if (req.url == '/') {
            res.write(getPage('index.html'));
        } else {
            res.write(getPage(`${req.url}.html`));
        }
        res.end();
    } else if (fileType == '.css') {
        res.setHeader('Content-Type', 'text/css');
        res.writeHead(200);
        res.write(getPage(req.url));
        res.end()
    } else {
        res.writeHead(404)
        res.end();
    }

}).listen(3000);


