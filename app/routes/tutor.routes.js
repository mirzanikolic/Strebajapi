module.exports = app => {
    const tutors = require("../controllers/tutor.controller.js");
  
    // Create a new Tutor
    app.post("/tutors", tutors.create);
  
    // Retrieve all Tutors
    app.get("/tutors", tutors.findAll);
  
    // Retrieve a single Tutor with tutorId
    app.get("/tutors/:tutorID", tutors.findOne);
  
    // Update a Tutor with customerId
    app.put("/tutors/:tutorID", tutors.update);
  
    // Delete a Tutor with customerId
    app.delete("/tutors/:tutorID", tutors.delete);
  
    // Create a new Tutor
    app.delete("/tutors", tutors.deleteAll);
  };
  