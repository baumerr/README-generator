// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your Project?', 'What is your project description?', 'Add your Table of Contents', 'Please explain your application installation',
    'Provide instructions and examples for use', 'What license do you want to use?', 'How would you like people to contribute to this project?', 'How can this application be tested?', 'What is your GitHub username?'
];

function promptUser () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser()
      .then((answer) => {
          fs.writeFile('README.md', generateMarkdown(answer), (err) => {
              if (err) {
                  reject(err);
                  return;
              } else {
                  console.log("File created!");
              }
          })
      });
}
// Function call to initialize app
init();
