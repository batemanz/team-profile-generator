const inquirer = require('inquirer');
const fs = require('fs');
const HTMLmarkdown = require("./src/HTMLmarkdown");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

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
  
      // format the dat in readme friendly way
      const context = HTMLMarkdown(data);
      console.log(context);
      writeToFile("index.html", context);
    });
  }
  
  // Function call to initialize app
  init();