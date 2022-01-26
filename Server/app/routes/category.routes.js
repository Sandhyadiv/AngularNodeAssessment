
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const categoryS=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", categoryS.create);
  
    // Retrieve all Tutorials
    
    router.get("/", categoryS.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/Processor", categoryS.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", categoryS.findOne);
    // Update a Tutorial with id
    router.put("/:id", categoryS.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", categoryS.delete);
  
    // Delete all Tutorials
    router.delete("/", categoryS.deleteAll);
  
    app.use('/api/categoryss', router);
  };