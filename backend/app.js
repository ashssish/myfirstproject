const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
var cors = require("cors");
const connectionDB = require("./db/connection");
const webroute = require("./router/web");
const app = express();
const port = process.env.PORT;
const database_url = process.env.DATABASE_URL;
app.use(cors());
connectionDB(database_url);
app.use(express.json());

app.use("/user", webroute);

app.listen(port, () => {
  console.log(
    `mongodb server:${database_url}, listening on port http://localhost:${port}`
  );
});
