const http = require('http');

const server = http.createServer(function(req, res) {
    if (req.url === '/about' || req.url === '/About') {
        res.write("Hello From About Us");
    } else {
        res.write("Hello From Home Page");
    }
    res.end();
});

server.listen(8000, () => {
    console.log("Server Running On Port Number 8000");
});



