import express from "express";
import "dotenv/config";
import { Dbconnection } from "./src/config/db_connection.js";
import router from "./src/router/routes.js";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUi from "swagger-ui-express";
import winston, { createLogger, transports } from "winston";
import { generateSwaggerDocs } from "./src/docs/config.js";
import { format } from "winston";
import DailyRotateFile from 'winston-daily-rotate-file'
Dbconnection();

const app = express(); // calling express js

const swaggerDocs = generateSwaggerDocs();
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));
app.use(cors()); // bypass cors policy
app.use(express.json());
app.use(router); // invoke router

export const logger = createLogger({
  transports: [
    new transports.DailyRotateFile({
      // %DATE will be replaced by the current date
      filename: `logs/%DATE%-error.log`,
      level: 'error',
      format: format.combine(
        format.cli(),
        format.splat(),
        format.timestamp(),
        format.printf((info) => {
          const d = new Date(info.timestamp);
          const dateTime = `${d.getFullYear()}-${d.getMonth() + 1
            }-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
          return `${dateTime}: ${info.message}`;
        }),
      ),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false, 
      maxFiles: '7d', 
      handleExceptions: true 
    }),
  ],
});


var port = process.env.PORT;
app.listen(port, () => {
  console.log("server is running at port " + port);
});
