let http = require("http");
let fs = require("fs");

const server =
    http.createServer((req, res) => {
        var url = req.url;

        if (url === "/about") {
            fs.readFile("about.html", (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            })
        }
        else if (url === "/contact") {
            fs.readFile("contact.html", (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            })
        }
        else if (url === "/home") {
            fs.readFile("index.html", (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            })
        }
        else {
            fs.readFile("index.html", (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            })
        }

    });
server.listen(4000, "localhost");
console.log("Server listening at port 4000");