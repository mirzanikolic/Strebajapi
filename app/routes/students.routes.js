module.exports = app => {
    const students = require("../controllers/students.controller.js");
  
  
    // Retrieve all Tutors
    app.get("/students", students.findAll);
  
    // Retrieve a single Tutor with tutorId
    app.get("/students/:studentId", students.findOne);
  };