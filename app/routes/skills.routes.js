module.exports = app => {
    const skills = require("../controllers/skills.controller.js");
  
  
    // Retrieve all Tutors
    app.get("/skills", skills.findAll);
  
    // Retrieve a single Skill with id
    app.get("/skills/:id", skills.findOne);

    // Retrieve a list of skills by type of education
    app.get("/skills/ed_type/:id", skills.findType);
  };