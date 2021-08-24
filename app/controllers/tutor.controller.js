const Tutor = require("../models/tutor.model.js");


// Create and Save a new Tutor
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutor
  const tutor = new Tutor({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    city: req.body.city,
    phoneNumber: req.body.phoneNumber,
    skills: req.body.skills,
    active: req.body.active
  });

  // Save Tutor in the database
  Tutor.create(tutor, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutor."
      });
    else res.send(data);
  });
};

// Retrieve all Tutors from the database.
exports.findAll = (req, res) => {
  Tutor.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutors."
      });
    else res.send(data);
  });

};

// Find a single Tutor with a tutorID
exports.findOne = (req, res) => {
  Tutor.findById(req.params.tutorID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutor with id ${req.params.tutorID}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tutor with id " + req.params.tutorID
        });
      }
    } else res.send(data);
  });
};

// Update a Tutor identified by the tutorID in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Tutor.updateById(
    req.params.tutorID,
    new Tutor(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutor with id ${req.params.tutorID}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutor with id " + req.params.tutorID
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Tutor with the specified tutorID in the request
exports.delete = (req, res) => {
  Tutor.remove(req.params.tutorID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutor with id ${req.params.tutorID}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tutor with id " + req.params.tutorID
        });
      }
    } else res.send({ message: `Tutor was deleted successfully!` });
  });
};

// Delete all Tutors from the database.
exports.deleteAll = (req, res) => {
  Tutor.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutors."
      });
    else res.send({ message: `All Tutors were deleted successfully!` });
  });
};
