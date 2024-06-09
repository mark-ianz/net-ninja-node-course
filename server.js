const http = require("http");
const fs = require("fs");
const _ = require ('lodash');

const server = http.createServer((req, res) => {
  // loadash
  const num = _.random (10, 13)
  console.log(num);

  // set header content
  res.setHeader("Content-Type", "text/html");

  // identifying the url
  let filePath = './views/index.html';
  switch (req.url) {
    case "/":
      filePath = './views/index.html'
      res.statusCode = 200;
      break;
    case "/about":
      filePath = './views/about.html'
      res.statusCode = 200;
      break;
    // redirecting
    case "/about-us":
      res.setHeader ('Location', '/about');
      res.statusCode = 301;
      res.end();
      break;
    case "/contact":
      filePath = './views/contact.html';
      res.statusCode = 200;
      break;
    default:
      filePath = './views/404.html';
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.write (err.toString());
      res.end();
    } else {
      res.end(data);
    }

  });
});

server.listen(3000, "localhost", () => {
  console.log("listening");
});
