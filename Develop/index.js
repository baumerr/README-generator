// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your Project?', 'What is your project description?', 'Please explain your application installation:',
    'Provide instructions and examples for use:', 'What license do you want to use?', 'How would you like people to contribute to this project?', 'How can this application be tested?', 'What is your GitHub username?'
];

function promptUser () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'description', 
            message: questions[1]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'exampleOfUse',
            message: questions[3]
        },
        {
            type: 'list',
            name: 'license',
            messaage: questions[4],
            choices: [
                'GNU AGPLv3', 
                'GNU GPLv3', 
                'GNU LGPLv3',
                'Mozilla Piblic License 2.0',
                'Apache License 2.0',
                'MIT License',
                'Boost Software License 1.0',
                'The Unlicense',
                'NO LICENSE'
            ]
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'test',
            message: questions[6]
        },
        {
            type: 'input',
            name: 'github',
            message: questions[7]
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = 'README.md',
    promptUser()
      .then((data) => {
          fs.writeFile(fileName, generateMarkdown(data), (err) => {
              if (err) {
                  reject(err);
                  return;
              } else {
                  console.log("File created!");
              }
          })
      });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}
// Function call to initialize app
init();

// remember to switch to develop