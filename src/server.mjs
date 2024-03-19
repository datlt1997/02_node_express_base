import express from "express";
import 'dotenv/config'
import { configViewEngine } from "./config/viewEngine.mjs"
import webRoutes from "./router/web.mjs"

const app = express();

const port = process.env.PORT || 3000;
const host_name = process.env.HOST_NAME

//config template engines
configViewEngine(app)

app.use('/', webRoutes);

app.listen(port, host_name, () => console.log(`Listen port ${port}`))