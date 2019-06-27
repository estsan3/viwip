const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

// Db connection
const { mongoose } = require("./database");

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/device", require("./routes/device.routes"));
app.use("/api/asset", require("./routes/asset.routes"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/user", require("./routes/user.routes"));

// Static Files
console.log("DIR:" + __dirname);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/public/js")));

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

app.use(express.static(__dirname + "/public"));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname + "/public/index.html"))
);
