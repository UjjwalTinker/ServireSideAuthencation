const express = require("express");
const app = express();

const path = require("path");

const cookieParser = require("cookie-parser");

const { ResToLogin,restrict } = require("./authM");

const { connection } = require("./mconnect");
const userrr = require("./routes/user");
const PORT = 2000;

connection("mongodb://127.0.0.1:27017/login2")
  .then(() => console.log("MongoDbConnected"))
  .catch((err) => console.error("MongoDb connection error:", err));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(ResToLogin);

app.use("/userr" ,userrr);

app.use("/userr", restrict(["NORMAL"]), userrr);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.listen(PORT, () => {
  console.log("server started");
});

// <!-- <form action="/user/home" method="POST" >
// <label for="no1">no1</label>
// <input type="number" name="no1" >
// <label for="no2">no2</label>
// <input type="number" name="no2" >
// <button type="submit">result</button>

// </form>

// <% if (result !== null) { %>
// <h2>The result of adding <%= result.no1 %> and <%= result.no2 %> is <%= result.result %>.</h2>
// <% } %> -->
