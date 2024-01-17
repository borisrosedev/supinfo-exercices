/* eslint-disable */
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
db = connect(process.env.MONGO_URL);
db.products.insertMany([
    {
        "name":"Brioche de Papi Loulou",
        "description": "brioche faite avec amour",
        "type":"brioche",
        "price": 20,
        "quantity":10,
        "url":"https://cdn.pixabay.com/photo/2015/01/10/16/01/galette-des-rois-595438_1280.jpg"
    }
]);


const document = db.products.findOne();
fs.writeFileSync("products.json", JSON.stringify(document));
