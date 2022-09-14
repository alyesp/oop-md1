const generateManager = function (manager) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3 class="name">${manager.name}</h3>
              <h4> Manager </h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="office-number">Office Number: ${manager.officeNumber}</p>
          </div>
         
      </div>
  </div>
  `;
}

// Create Engineer card
const generateEngineer = function (engineer) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3 class="name">${engineer.name}</h3>
              <h4 class="role">Engineer</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="github">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
          </div>
         
      </div>
  </div>
  `
}

// Create Intern card
const generateIntern = function (intern) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3 class="name">${intern.name}</h3>
              <h4 class="role">Intern</h4>
          </div>
          <div class="card-body">
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>
          </div>
         
      </div>
  </div>
  `
};


// Push array to page
generateHTML = (data) => {

  // Array for cards
  pageArray = [];

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole();

      if (role === "Manager") {
          const managerCard = generateManager(employee);

          pageArray.push(managerCard);
      }

      if (role === "Engineer") {
          const engineerCard = generateEngineer(employee);

          pageArray.push(engineerCard);
      }

      if (role === "Intern") {
          const internCard = generateIntern(employee);

          pageArray.push(internCard);
      }
  }

  const employeeCards = pageArray.join('')

  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
}

// Generate HTML page
const generateTeamPage = function (employeeCards) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel ="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
      <nav class="navbar" id="navbar">
          <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
      </nav>
  </header>
  <main>
      <div class="container">
          <div class="row justify-content-center" id="employee-cards">
              
          <!-- Employee Cards -->
              ${employeeCards}
              
          </div>
      </div>
  </main>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
</html>
</html>
`;

}


// Export to index
module.exports = generateHTML;