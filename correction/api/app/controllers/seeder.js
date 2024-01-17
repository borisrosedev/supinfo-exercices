import client from "../db/connect.js";
import seederProducts from "../db/seeder/01_products.js";
const database = client.db("shop");
const products = database.collection("products");



const SeederController = {

    async init(req, res, next){

        try {
   
            await products.deleteMany({});
            const newProducts = await products.insertMany(seederProducts);
            return res.status(200).json(newProducts);
            
        } catch(e){
            console.trace(e);
            return next(e);
        }
      
    }

};

export default SeederController;