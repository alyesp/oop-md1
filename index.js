const inquirer = require("inquirer");
const fs = require("fs");
const path = ("path");

const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateHTML = require("./generateHTML.js");

// Array for team member input
const teamArray = [];
 //application is init, Team manager prompts start
function managerQuestions() {
  return (
    inquirer.prompt([{
      type:"input",
      name:"name",
      message:"What is the managers name?",
      validate: nameInput =>{
        if (nameInput) {
          return true;
        }else {
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
      },
    },
  ])
  // add new team member info and push it to team array
  .then(managerInput => {
    const {
      name,
      id,
      email,
      officeNumber
    } = managerInput;
    const manager = new Manager(name, id, email, officeNumber);

    teamArray.push(manager);
    console.log(manager);
    addEmployee()
  })
  );
}
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

//prompts for engineer
async function engineerQuestions() {
  const engineerInput = await inquirer.prompt([{
    type: "input",
    name: "name",
    message:"What is the engineers name?",
    validate: nameInput_1 => {
      if (nameInput_1) {
        console.log("hello")
        return true;
      }
      else {
        return false;
      }
    },
    a:{
      type:"input",
      name: "name",
      message:"what is the engineers employee ID?",
      validate: nameInput_3 => {
        if (nameInput_3) {
          return true;
        }
        else {
          return false;
        }
      }
    },
    b:{
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
    c:{
      type:"input",
      name:"github",
      message:"What is your GitHub username?",
      validate: nameInput_7 => {
        if (nameInput_7) {
          return true;
        }else {
          console.log("Please enter valid username.");
          return false;
        }
      }
    },
  }
]);

const {
    name,
    id,
    email,
    github
  } = engineerInput;
  const engineer = new Engineer(name, id, email, github);
  teamArray.push(engineer);
  console.log(engineer);
  addEmployee();
}

//prompts for intern
function internQuestions() {
  return (
    inquirer.prompt([{
      type:"input",
      name: "name",
      message:"What is the intern's name?",
      validate:(nameInput) => {
        if (nameInput) {
          return true;
        }else {
          console.log ("please enter interns name?");
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
    },
  ])
  //add new intern info and push it to the tram array
  .then((internInput) => {
    const {
      name, 
      id, 
      email, 
      school
    } = internInput;
    const intern = new Intern(name, id, email, school);
    teamArray.push(intern);
    console.log(intern);
  })

  );
}

//when done, you will exit the app and the html will generate
function finishBuild() {
  fs.writeFileSync(
    path.join(path.resolve(__dirname, "dist"), "index.html"),
    generateHTML(teamArray),
    Console.log("Your team is completed.")
  );
}