const express = require("express");
const morgan = require("morgan");
const useRouter = require("./userRouter");
const postRouter = require("./postRouter");

const app = express();

function customeMiddleware(req, res, next) {
  // console.log("i am a log", req.url);
  // next();
  if (req.url === "/home") {
    res.send("<h2>This page block by admin</h2>");
  }
  next();
}

function tinyLogger() {
  return (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  };
}

const middleware = [customeMiddleware, tinyLogger()];

app.use(middleware);
// app.use(morgan('dev'))

app.get("/home", morgan("dev"), (req, res) => {
  // res.send("<h2>This is home page</h2>");
  res.json({
    message: "hi,abm"
  });
});

// user router end
app.use("/user", useRouter);

// post router end
app.use("/post", postRouter);

app.get("/", (req, res) => {
  res.send("<h2>I am ....</h2>");
});

app.get("*", (req, res) => {
  res.send("<h1>404 Not Found</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server running port: ${PORT}`);
});
