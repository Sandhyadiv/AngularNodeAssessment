const { Product } = require("../models/index.js");
 
module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", products.create);
  
    // Retrieve all Tutorials
    router.get("/", products.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/P_Name", products.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", products.findOne);
    // Update a Tutorial with id
    router.put("/:id", products.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", products.delete);
  
    // Delete all Tutorials
    router.delete("/", products.deleteAll);
  
    app.use('/api/productss', router);
  };