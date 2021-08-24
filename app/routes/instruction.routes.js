module.exports = app => {
    const instruction = require("../controllers/instruction.controller.js");
  
  
    // Retrieve all Tutors
    app.get("/instructions", instruction.findAll);
  
    // Retrieve a single Tutor with tutorId
    app.get("/instructions/students/:id", instruction.findOneByStudent);

    // Retrieve a single Tutor with tutorId
    app.get("/instructions/tutors/:id", instruction.findOnebyTutor1);
  };