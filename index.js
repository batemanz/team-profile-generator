const inquirer = require('inquirer');
const fs = require('fs');
const HTMLmarkdown = require("./src/HTMLmarkdown");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");


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
      console.log(data);
  if(data.title === "Manager"){
      //ask questions for manager 
    askMngrQ();
  } else if(data.title === "Intern") {
    askInternQ();
  } else if(data.title === "Engineer") {
    askEngineerQ();
  } else { 
      const context = HTMLmarkdown(data);
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
    //   console.log(data);
      //convert the outcome using the Class object 
      const mngr = new Manager( data.name, data.ID, data.email, data.officeNumber); 
      console.log(mngr); 

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
    //   console.log(data);
      //convert the outcome using the Class object 
      const internValue = new intern(data.name, data.ID, data.email, data.school); 
      console.log(internValue);

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

      //ask the again 
      init(); 
  });
  } 