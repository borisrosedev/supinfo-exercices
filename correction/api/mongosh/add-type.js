/* eslint-disable */
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
db = connect(process.env.MONGO_URL);

db.products.aggregate([
  {
    $match: {
      name: { $exists: true}
      // Filtre les documents sans champ 'type'
    },
  
  },{

    $addFields: {
      isAvailable: {$cond: { if: { $gt: ["$quantity", 0] }, then: true, else: false}}
    }


  },
  {
    $merge: {
      into: "products",  // Nom de la collection cible (même que la collection source ici)
      whenMatched: "merge",  // Action à effectuer pour les documents existants
      whenNotMatched: "insert"  // Action à effectuer pour les nouveaux documents
    }
  }
 
]);

// // Mise à jour effective des documents
// const result = db.products.updateOne(
//   { name : "éclair au chocolat" }, // Filtre les documents qui ont été modifiés
//   { $set: { type: "éclair" } }  // Modifie le champ 'type' pour les documents correspondants
// );
  

