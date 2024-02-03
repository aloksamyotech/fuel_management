import express from "express";
import "dotenv/config";
import { Dbconnection } from "./src/config/db_connection.js";
import router from "./src/router/routes.js";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUi from "swagger-ui-express";
import { generateSwaggerDocs } from "./src/docs/config.js";
Dbconnection();

const app = express(); // calling express js

const swaggerDocs = generateSwaggerDocs();
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));
app.use(cors()); // bypass cors policy
app.use(express.json());
app.use(router); // invoke router

var port = process.env.PORT;
app.listen(port, () => {
  console.log("server is running at port " + port);
});
