const http = require("http");
const PORT = 3000;
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("King of the Code!");
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write("<p>What else am I capable of?</p>");
    res.end();
  })
  .listen(3002, () => {
    console.log(`server running on port:${PORT}`);
  });
//claimed a port 3000 and started the server//