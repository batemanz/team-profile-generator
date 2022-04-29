const inquirer = require('inquirer');
const fs = require('fs');
const HTMLmarkdown = require("./src/HTMLmarkdown");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

let emnployee = [];
let managersArray = [];
let engineersArray = [];
let internsArray = [];

const questions = [
    {
        type: "list",
        name: "title",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "Manager",
          "Finished adding employees"
        ]
    }
]
// function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  }
  // function to initialize app
  function init() {
    inquirer.prompt(questions).then((data) => {
      console.log("this is the one ", data);
  if(data.title === "Manager"){
      //ask questions for manager 
    askMngrQ();
  } else if(data.title === "Intern") {
    askInternQ();
  } else if(data.title === "Engineer") {
    askEngineerQ();
  } else { 
    // console.log("these are the managers", managers);

      // this will give you an array of manager cards
      const managersCards = managersArray.map(manager => {
        return `  <div class="cardContainer">
      <h1>${manager.getRole()}</h1>
      <p class="name">Name: ${manager.name}</p>
      <p class="id">ID#: ${manager.id}</p>
      <p class="email">Email: <a href="mailto:${manager.email}" target="_blank">${manager.email}</a></p>
      <p class="officeNumber">Office #: ${manager.officeNumber}</p>
    </div>`
      });
      const engineerCards = engineersArray.map(engineer => {
        return `  <div class="cardContainer">
      <h1>${engineer.getRole()}</h1>
      <p class="name">Name: ${engineer.name}</p>
      <p class="id">ID#: ${engineer.id}</p>
      <p class="email">Email: <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a></p>
      <p class="github">Github URL: <a href="${engineer.github}" target="_blank">${engineer.github}</a></p>
    </div>`
      });
      const internCards = internsArray.map(intern => {
        return `  <div class="cardContainer">
      <h1>${intern.getRole()}</h1>
      <p class="name">Name: ${intern.name}</p>
      <p class="id">ID#: ${intern.id}</p>
      <p class="email">Email: <a href="mailto:${intern.email}" target="_blank">${intern.email}</a></p>
      <p class="school">School: ${intern.school}</p>
    </div>`
      });
      const context = HTMLmarkdown(managersCards, engineerCards, internCards)
      // const context = HTMLmarkdown(managers[0]);
      console.log(context);
      writeToFile("index.html", context);
    }
});
}


  // Function call to initialize app
  init();

  function askMngrQ(){
    inquirer.prompt([
        {
            name: "name", 
            type: "input", 
            message: "Please enter Name: "
        },
        {
            name: "ID", 
            type: "input", 
            message: "Please enter id: "
        },
        {
            name: "email", 
            type: "input", 
            message: "Please enter Email: "
        },
        {
            name: "officeNumber", 
            type: "input", 
            message: "Please enter Office Number: "
        }
    ]).then((data) => {
  
      //convert the outcome using the Class object 
      const mngr = new Manager( data.name, data.ID, data.email, data.officeNumber); 
      console.log(mngr);
      managersArray.push(mngr); 

      //ask the again 
      init(); 
  });
  }

  function askInternQ(){
    inquirer.prompt([
        {
            name: "name", 
            type: "input", 
            message: "Please enter Name: "
        },
        {
            name: "ID", 
            type: "input", 
            message: "Please enter id: "
        },
        {
            name: "email", 
            type: "input", 
            message: "Please enter Email: "
        },
        {
            name: "school", 
            type: "input", 
            message: "Please enter School: "
        }
    ]).then((data) => {
      //convert the outcome using the Class object 
      const internValue = new intern(data.name, data.ID, data.email, data.school); 
      console.log(internValue);
      internsArray.push(internValue);
      //ask the again 
      init(); 
  });
  } 

  function askEngineerQ(){
    inquirer.prompt([
        {
            name: "name", 
            type: "input", 
            message: "Please enter Name: "
        },
        {
            name: "ID", 
            type: "input", 
            message: "Please enter id: "
        },
        {
            name: "email", 
            type: "input", 
            message: "Please enter Email: "
        },
        {
            name: "github", 
            type: "input", 
            message: "Please enter Github Url: "
        }
    ]).then((data) => {
    //   console.log(data);
      //convert the outcome using the Class object 
      const engineerValue = new engineer(data.name, data.ID, data.email, data.github); 
      console.log(engineerValue); 
      engineersArray.push(engineerValue);
      //ask the again 
      init(); 
  });
  } 