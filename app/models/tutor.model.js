const sql = require("./db.js");

// constructor
const Tutor = function(tutor) {
  this.firstName = tutor.firstName;
  this.lastName = tutor.lastName;
  this.email = tutor.email;
  this.city = tutor.city;
  this.phoneNumber = tutor.phoneNumber;
  this.skills = tutor.skills;
  this.active = tutor.active;
  
};




Tutor.create = (newTutor, result) => {
  sql.query("INSERT INTO tutors SET ?", newTutor, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tutor: ", { id: res.insertId, ...newTutor });
    result(null, { id: res.insertId, ...newTutor });
  });
};

Tutor.findById = (tutorID, result) => {
  sql.query(`SELECT * FROM tutors WHERE tutors.id = ${tutorID}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutor: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutor with the id
    result({ kind: "not_found" }, null);
  });
};

Tutor.getAll = result => {
  sql.query("SELECT * FROM tutors", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tutors: ", res);
    result(null,res)
  });

};


Tutor.updateById = (id, tutor, result) => {
  sql.query(
    "UPDATE tutors SET firstName = ?, lastName = ?, email = ?, city = ?, phoneNumber = ?, skills = ?, active = ? WHERE id = ?",
    [tutor.firstName, tutor.lastName, tutor.email, tutor.city, tutor.phoneNumber, tutor.skills, tutor.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutor with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated tutor: ", { id: id, ...tutor });
      result(null, { id: id, ...tutor });
    }
  );
};

Tutor.remove = (id, result) => {
  sql.query("DELETE FROM tutors WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutor with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutor with id: ", id);
    result(null, res);
  });
};

Tutor.removeAll = result => {
  sql.query("DELETE FROM tutors", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} tutors`);
    result(null, res);
  });
};

module.exports = Tutor;
