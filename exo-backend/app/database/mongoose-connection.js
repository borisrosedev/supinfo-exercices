// dbConfig.js
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URL;

const mongoClient = async () => {
  try {
    await mongoose.connect(mongoURI);
    return "✅ Connecté à MongoDB";
  } catch (error) {
    return `❌ Erreur de connexion à MongoDB :${error}`;
    //process.exit(1);
  }
};

export default mongoClient;