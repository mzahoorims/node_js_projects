const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <h1>Hello World!</h1>
                <p>Welcome to my Node.js application.</p>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});