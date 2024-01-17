import { ObjectId } from "bson";
import client from "../db/connect.js";
const database = client.db("shop");
const products = database.collection("products");
const result = await products.createIndex({ name: 1 });
console.log(`Index created: ${result}`);
// List the indexes on the collection and output them as an array
const listIndexes = await products.listIndexes().toArray();
// Print the list of indexes
console.log("Existing indexes:\n");
for(const doc in listIndexes){
    console.log(doc);
}

const ProductController = {

    async index(req, res, next){
        try {
            //const query = { }
            //const sort = { name: 1}
            //const projection = { name: 1 };
            //const existingProducts = await products.find(query).sort(sort).project(projection).toArray()
            const existingProducts = await products.find({}).toArray();
        
          if(!existingProducts){
            return res.status(404).json({ message: "no product found"});
          }
          return res.status(200).json(existingProducts);
        } catch(e){
            console.trace(e);
            return next();
        }
    },

    async store(req, res, next){

        const product = req.body;
        console.log(product);
        if(!req.body.name 
            || !req.body.description 
            || !req.body.url 
            || !req.body.quantity
            || !req.body.price
        ) {
            return next();
        }

        try {
            const newProduct = await products.insertOne(product);
            return res.status(201).json(newProduct);
        } catch(e){
            console.trace(e);
            return next();
        }
    },

    async findOneById(req, res, next){
        const { id } = req.params; 
        try {
           const product = await products.findOne({ _id:  new ObjectId(id)});
           console.log("product", product);
           if(!product){
                return res.status(404).json({ message: "product not found"});
           }
           return res.status(200).json(product);
        } catch(e){
            console.trace(e);
            return next();
        }
    },

    async sortSpecificProductsByPrice(req, res, next){

        const { type, order } = req.query;

        try {
            const cursor = products
                                .find({ type })
                                .sort({ price: Number(order)});                   
            const existingProducts = await cursor.toArray();
            if(!existingProducts.length){
                return res.status(404).json({ message: "no product found"});
            }
            return res.status(200).json(existingProducts);

        } catch(e){
            console.trace(e);
            return next(e);
        }
        
    },


    async findMultipleByPrice(req, res, next){
        const { min, max } = req.query;
        console.log("min", min);
        console.log("max", max);
        const query = { price: { $lte: Number(max), $gte: Number(min) } };
        try {
          
           const product = await products.findOne(query);
           console.log("product", product);
           if(!product){
                return res.status(404).json({ message: "product not found"});
           }
           return res.status(200).json(product);
        } catch(e){
            console.trace(e);
            return next();
        }
    },



    async delete(req, res, next){
        const { id } = req.params;
        try {
            const result = await products.findOneAndDelete(new ObjectId(id));
            return res.status(200).json(result);
        } catch(e){
            console.trace(e);
            return next(e);
        }
    },

   async update(req, res, next) {
        const { id } = req.params;
        const body = req.body;
        try {
            const result = await products.updateOne({_id: new ObjectId(id)}, body);
            return res.status(200).json(result);
        } catch(e){
            console.trace(e);
            return next();
        }
    }

};

export default ProductController;