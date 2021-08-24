const Instruction = require("../models/instruction.model.js");


// Retrieve all Tutors from the database.
exports.findAll = (req, res) => {
    Instruction.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving students."
        });
      else res.send(data);
    });
};
  
// Find a single Tutor with a tutorID
exports.findOneByStudent = (req, res) => {
    Instruction.findByStudent(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutor with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Tutor with id " + req.params.id
          });
        }
      } else res.send(data);
    });
};  
// Find a single Tutor with a tutorID
exports.findOnebyTutor1 = (req, res) => {
    Instruction.findByTutor(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutor with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Tutor with id " + req.params.id
          });
        }
      } else res.send(data);
    });
};  