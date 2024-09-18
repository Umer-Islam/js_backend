const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan"); // where there is a request it shows in console
const exphbs = require("express-handlebars");
const passport = require("passport");
const path = require("path");
const session = require("express-session");
// const { default: mongoose } = require("mongoose");
const MongoStore = require("connect-mongo")(session);
dotenv.config({ path: "./config/config.env" });
require("./config/passport")(passport);
connectDB();

const app = express();
//morgan logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//handlebars
app.engine(".hbs", exphbs.engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", ".hbs");
//express-session middleware
app.use(
  session({
    secret: "hehe",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    // cookie: { secure: true }, /* requires https */
  })
);
//passport middle ware
app.use(passport.initialize());
app.use(passport.session());
//staticFolder
app.use(express.static(path.join(__dirname + "/public")));
//port
const PORT = process.env.PORT || 2121;
//routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/stories", require("./routes/stories"));

//port listening
app.listen(PORT, () => {
  console.log(
    `server running on port: ${PORT} in ${process.env.NODE_ENV} mode`
  );
});
