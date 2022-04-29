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
      <p class="name">${manager.name}</p>
      <p class="id">${manager.id}</p>
      <p class="email">${manager.email}</p>
      <p class="officeNumber">${manager.officeNumber}</p>
    </div>`
      });
      const engineerCards = engineersArray.map(engineer => {
        return `  <div class="cardContainer">
      <p class="name">${engineer.name}</p>
      <p class="id">${engineer.id}</p>
      <p class="email">${engineer.email}</p>
      <p class="github">${engineer.github}</p>
    </div>`
      });
      const internCards = internsArray.map(intern => {
        return `  <div class="cardContainer">
      <p class="name">${intern.name}</p>
      <p class="id">${intern.id}</p>
      <p class="email">${intern.email}</p>
      <p class="school">${intern.school}</p>
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