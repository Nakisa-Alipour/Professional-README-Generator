// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description for this project.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What is the application license?',
        choices: [
          "MIT License",
          "Apache License 2.0",
          "GNU General Public License (GPL)",
          "BSD 3-Clause 'New' or 'Revised' license",
          "Mozilla Public License 2.0",
          "Creative Commons License",
          "The Unlicense",
          "Eclipse Public License 2.0",
          "GNU Lesser General Public License (LGPL)",
          "Common Development and Distribution License (CDDL)"
        ],
      },
      {
        type: 'input',
        name: 'table of content',
        message: 'what is included in the table of contents?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is installation instruction?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information regarding this project',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
    ])
    .then((answers) => {
      const htmlPageContent = generateHTML(answers);
  
    

    
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
