const sql = require("./db.js");

// constructor
const Instruction = function(instruction) {
  this.tutorId = instruction.tutorId;
  this.studentId = instruction.studentId;
  this.instructionName = instruction.instructionName;
  this.timeSlotId = instruction.timeSlotId;
};

Instruction.findByStudent = (id, result) => {
    sql.query(`SELECT * FROM instructions WHERE instructions.studentId = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found tutor3: ", res);
        result(null, res);
        return;
      }
  
      // not found Tutor with the id
      result({ kind: "not_found" }, null);
    });
};

Instruction.findByTutor = (id, result) => {
    sql.query(`SELECT * FROM instructions WHERE instructions.tutorId = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found tutor2: ", res.length);
        result(null, res);
        return;
      }
  
      // not found Tutor with the id
      result({ kind: "not_found" }, null);
    });
};

Instruction.getAll = result => {
    sql.query("SELECT * FROM instructions", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("students: ", res);
      result(null, res);
    });
};

module.exports = Instruction;