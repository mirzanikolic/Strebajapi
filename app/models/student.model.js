const sql = require("./db.js");

// constructor
const Student = function(student) {
  this.firstName = student.firstName;
  this.lastName = student.lastName;
  this.email = student.email;
  this.city = student.city;
  this.phoneNumber = student.phoneNumber;
  this.school = student.school;
  this.active = student.active;
  this.type = student.type;
};

Student.findById = (studentId, result) => {
    sql.query(`SELECT * FROM students WHERE students.id = ${studentId}`, (err, res) => {
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
Student.getAll = result => {
    sql.query("SELECT * FROM students", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("students: ", res);
      result(null, res);
    });
};

module.exports = Student;
  