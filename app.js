const createError = require("http-errors");
const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const connectDatabase = require("./models/ConnectDatabase");

const accountRouter = require("./routes/account.router");
const app = express();
const role = require("./models/Role");
role;
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

connectDatabase;
app.use("/account", accountRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
