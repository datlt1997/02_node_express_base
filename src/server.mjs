import express from "express";
import 'dotenv/config'
import { configViewEngine } from "./config/viewEngine.mjs"
import webRoutes from "./router/web.mjs"
import mysql from "mysql2" 

const app = express();

const port = process.env.PORT || 3000;
const host_name = process.env.HOST_NAME

//config template engines
configViewEngine(app)

// khai baso route
app.use('/', webRoutes);

// test connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'nodejs_base'
})

connection.query(
  'select * from Users', (err, results, fields) => {
    console.log("result", results);
    console.log("field", fields);
  }
)


app.listen(port, host_name, () => console.log(`Listen port ${port}`))