import dotenv from "dotenv"; 
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();
import redisClient from "./database/redis-connection.js";
import bcrypt from "bcrypt";
import mongoClient from "./database/mongoose-connection.js";
import userRoutes from "./routes/user.js"
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json({ extended: true, limit: "16mb"}));
app.use(express.urlencoded({ extended: true, limit: "16mb"}));
app.use(cors());
const swaggerDocument = YAML.load(__dirname + "/api.yaml");


await mongoClient().then(console.log);


app.use("/api/users", userRoutes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
/* set up swagger in the root */




app.set("port", process.env.MONGO_API_PORT);
app.set("host", process.env.HOST);

export default app;
