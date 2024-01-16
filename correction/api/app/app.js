import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { router as productRoutes } from "./routers/product.js"
import errorHandler from "./middlewares/errorHandler.js";
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import client from "./db/connect.js"
import { router as seederRoutes } from "./routers/seeder.js"


// connexion à mongo 

try {
    await client.connect()
    console.log('connected to mongoDB');
} catch(e){
    console.trace(e);
}


const app = express();
// file system constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json({ limit:'16mb' }));
app.use(express.urlencoded({ extended: true, limit: '16mb'}));
app.use(cors());
//const swaggerDocument = YAML.load(__dirname + "/api.yaml");


//route-handlers

//app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
//app.use('/api/products', productRoutes);
app.use('/api/seeder', seederRoutes);
app.use(errorHandler);

app.set('port', process.env.PORT);
app.set('host', process.env.HOST);

export default app