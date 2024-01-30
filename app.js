import express from "express";
import "dotenv/config";
import { Dbconnection } from "./src/config/db_connection.js";
import router from "./src/router/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

Dbconnection();

const app = express(); // calling express js
app.use(express.json());
app.use(router); // invoke router

app.use(cors()); // bypass cors policy
app.use(bodyParser.json()); // parse the data into body

var port = process.env.PORT;
app.listen(port, () => {
  console.log("server is running at port " + port);
});
