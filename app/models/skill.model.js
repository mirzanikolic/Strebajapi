const sql = require("./db.js");

// constructor
const Skill = function(student) {
  this.skillName = student.skillName;
  this.skillDesc = student.skillDesc;
  this.ed_type = student.ed_type;
  this.skill2 = Skill2
};

Skill.findById = (id, result) => {
    sql.query(`SELECT * FROM skills WHERE skills.id = ${id}`, (err, res) => {
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
Skill.findByType = (id, result) => {
    sql.query(`SELECT * FROM skills WHERE skills.ed_type = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found tutor: ", res[0]);
        result(null, res);
        return;
      }
  
      // not found Tutor with the id
      result({ kind: "not_found" }, null);
    });
};
Skill.getAll = result => {
    sql.query("SELECT * FROM skills", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("students: ", res);
      result(null, res);
    });
};

module.exports = Skill;
  