// Importing Employee constructor
const Employee = require('./Employee');

//Engineer constructor extends employee constructor
class Engineer extends Employee {
  constructor (name, id, github) {
    super(name, id, email);
    this.github = github;
  }

  //Return GitHub from input
  getGitHub () {
    return this.github;
  }

  //Override employee role to engineer
  getRole () {
    return "Engineer"
  }
};

// To be exported
module.exports = Engineer; 