import express from 'express'
import 'dotenv/config'
import { Dbconnection } from './src/config/db_connection.js'
import router from './src/router/routes.js';
import cors from 'cors'
import bodyParser from 'body-parser';



Dbconnection()

const app = express()
app.use(router);

app.use(cors());
app.use(bodyParser.json());

var port = process.env.PORT
app.listen(() => {
    console.log("server is running at port " + port)
})