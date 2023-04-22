// const names = require("./n.js");
// const say = require("./m.js");
// setInterval(() => {
//   say.sayHello(names.peta);
// }, 2000);
// console.log(__dirname);

const http = require("http");
http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.setHeader("Content-type", "text/html");
      res.write(
        `<h3>Welcome I am not Michael Reeves</h3><h4><a href = '/about'>Who Am I<a> then?</h4>`
      );
      res.end();
    }
    if (req.url == "/about") {
      res.setHeader("Content-type", "text/html");
      res.write("<h4>I will be as good as or better than him</h4>");
      res.end();
    }
  })
  .listen(5000);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Welcome to NHK");
//     return;
//   }
//   if (req.url === "/about") {
//     res.end("About");
//     return;
//   }
//   res.setHeader("Content-Type", "text/html");
//   res.end(`
//     <h2>Error</h2>
//     <h4>Page not found!</h4>
//     <a href = '/'>Back Home</a>`);
//   return;
// });
// server.listen(5000);

// const amount = 8;
// let i = 0;
// let lyrics = ["Bikramm", "Naayagan", "Meendum", "Varraar"];
// if (amount < 10) {
//   console.log("Small Number");
// } else {
//   console.log("Large Number");
// }
// const bikram = (lyrics) => {
//   if (i > lyrics.length) {
//     i = 0;
//   }
//   console.log(lyrics[i]);
//   i++;
// };
// setInterval(() => {
//   console.log("Vikramm");
//   console.log("Bikramm");
// }, 600);

// const os = require("os");
// const user = os.totalmem();
// console.log(user);
// const user1 = os.freemem();
// console.log(user1);
// const uptime = os.uptime();
// console.log(uptime);

// const path = require("path");
// console.log(path.join("/content/", "subfolder", "test.txt"));

// const { log } = require("console");

//fs
// const fs = require("fs");

//fs-sync

// const first = fs.readFileSync("./content/first.txt", "utf8");
// const second = fs.readFileSync("./content/second.txt", "utf8");
// fs.writeFileSync(
//   "./content/result.txt",
//   `Here is the Content\n${first}\n${second}`
// );

//fs-async

// fs.readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const firstS = result;
//   fs.readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const secondS = result;
//     fs.writeFile(
//       "./content/result-async.txt",
//       `This was written by Async\n${firstS}\n${secondS}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });

//modules
