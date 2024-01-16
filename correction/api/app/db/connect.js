import  dotenv from "dotenv";
dotenv.config();
import { MongoClient} from "mongodb"

// Replace the uri string with your connection string.
const uri = process.env.MONGO_URL;

const client = new MongoClient(uri);

export default client


