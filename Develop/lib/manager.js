//Importing Employee constructor 
const Employee = require("./Employee");

// Manager constructor extends to employee constructor
class Manager extends Employee {
  constructor (name, id, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  //Returning office number from input
  getOfficeNumber () {
    return this.officeNumber;
  }
  getRole () {
    return "Manager";
  }
};

//To be exported
module.exports = Manager;
