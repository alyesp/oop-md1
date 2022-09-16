// Importing Employee constructor
const Employee = require("./Employee");

// Intern constructor extend to Employee constructor 
class Intern extends Employee {
  constructor (name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // Returning school from input
  getSchool () {
    return this.school;
  }

  getRole () {
    return "Intern";
  }
};

//To be exported 
module.exports = Intern;