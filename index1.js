const fs = require('fs');
const inquirer = require('inquirer');
const path = ('path');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML.js');
const Employee = require('./Develop/lib/Employee');

const managerQuestions = [{
  type: 'input',
  name: 'name',
  message: 'What is the managers name?',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      return false;
    }
  }
},
{
  type: "input",
  name:"id",
  message:"Whats id the manager's employee ID?",
  validate: nameInput => {
    if (nameInput) {
      return true;
    }else {
      return false;
    }
  }
},
{
  type:"input",
  name:"email",
  message:"What is the managers email address?",
  validate: email => {
    valid = 'sjkskjdn@gmail.com'
    if (valid) {
      return true;
    }else {
      console.log("Please enter valid email address.")
      return false;
    }
  }
},
{
  type:"input",
  name:"officeNumber",
  message:"what is the managers office number?",
  validate: nameInput => {
    if(isNaN(nameInput)) {
      return true;
    }else {
      console.log("please enter the managers valid office number.")
      return false;
    }
  }
}]
.then(managerInput => {
  const {name, id, email, officeNumber} = managerInput;
  const manager = new Manager(name, id, email, officeNumber);

  teamArray.push(manager);
  console.log(manager);
  addEmployee();
});

managerQuestions();

//when team member is added, user is prompted to add then engineer or an intern
async function addEmployee() {
  const answer = await inquirer.prompt([{
    type:"list",
    name:"role",
    message:"Please add a team member or finish building your team.",
    choices:["Engineer", "Intern", "Finish Building my team"],
  }, 
]);
switch(answer.role) {
  case "Engineer":
    engineerQuestions();
    break;
  case "Intern":
    internQuestions()
    break;
  default:
    finishBuild();
  }
};

const engineerQuestions = [{
  type: 'input',
  name:'name',
  message:'What is the engineers name?',
  validate: nameInput => {
    if (nameInput) {
      return true;
    }else {
      return false;
    }
  }
},
{
  type:"input",
  name: "id",
  message:"what is the engineers employee ID?",
  validate: idInput => {
    if (idInput) {
      return true;
    }
    else {
      return false;
    }
  }
},
{
  type:"input",
  name:"email",
  message:"what is the engineers email address?",
  validate: email => {
    valid = 'sjkskjdn@gmail.com'
    if (valid) {
      return true;
    }else {
      console.log("Please enter a vail email address.");
      return false;
    }
  }
},
{
  type:"input",
  name:"github",
  message:"What is your GitHub username?",
  validate: githubInput => {
    if (githubInput) {
      return true;
    }else {
      console.log("Please enter valid username.");
      return false;
    }
  }
}];

const {name, id, email, github} = engineerInput;
const engineer = new Engineer(name, id, email, github);
teamArray.push(engineer);
console.log(engineer);
addEmployee();

const internQuestions = [{
  type:'input',
  name:'name',
  message:'What is the interns name?',
  validate:(nameInput) => {
    if (nameInput) {
      return true;
    } else {
      return false;
    }
  }
},
{
  type: "input",
  name:"email",
  message:"What is the interns email address?",
  validate: email =>  {
    valid = 'sjkskjdn@gmail.com'
    if (valid) {
      return true;
    }else {
      console.log ("You must enter a valid email address.");
      return false;
    }
  }
},
{
  type:"input",
  name:"school",
  message: "please enter interns school.",
  validate: nameInput => {
    if(nameInput) {
      return true;
    }else {
      console.log("please enter the interns school");
      return false;
    }
  }
}]

.then((internInput) => {
  const{ name, id, email, school} = internInput;
  const intern = new Intern(name, id, email, school);
  teamArray.push(intern);
  console.log(intern);
  addInternQuestions();
});

internQuestions();

function finishBuild () {
  fs.writeFileSync(
    path.join(Path.resolve(__dirname, 'dist'), 'index.html'),
    generateHTML(teamArray),
    console.log(teamArray),
    console.log("your team is complete")
  )
};

finishBuild();

