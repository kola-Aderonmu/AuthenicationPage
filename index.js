const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
// const port = process.env.PORT || 5000; //geneting  anew port
const port = 5000;

//---------------------------------------------------------

// app.use(express.json()); //use to access object
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(morgan("combined")); //use to get info on all info of a path


// middleware
// const timeLogger = (req, res, next) => {
//     const name ="kola";
//     console.log(`"request Time:" ${Date.now()}`);
//     if (name !== "yomi") {
//         res.send("not authorised!")
//     } else {
//         next();
//     }
// };

// app.use(req, res) => {
//     console.log("Time:", Date.now());
//     next()
// }

//first route

app.get("/", (req, res) => {
//   console.log(path.resolve(__dirname, "login/login.html"));
  res.sendFile(path.resolve(__dirname, "login/login.html"));
});

app.get("/about", (req, res) => {
  res.send("Welcome to my About Page");
});

app.listen(port, () => console.log(`Listening on ${port}`));
