// Employee constructor
class Employee {
  constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //return inputs for name, id and email
  getName () {
    return this.name;
  } 
  getId () {
    return this.id;
  }
  getEmail () {
    return this.email
  }
  getRole () {
    return "Employee";
  }
};
// to be exported
module.exports = Employee;