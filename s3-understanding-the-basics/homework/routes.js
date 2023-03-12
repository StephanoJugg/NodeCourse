const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write("<html>")
        res.write("<head><title>Hello Nerds and Virgins</title></head>")
        res.write("<h1>Hello Nerds and Virgins</h1>")
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write("</html>")
        return res.end();
    }

    if(url === '/users') {
        res.write("<html>")
        res.write("<ul><li>Nerd 1</li></ul>")
        res.write("</html>")
        return res.end();
    }

    if(url === "/create-user" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log(user);
        })
    }
};

module.exports = requestHandler;