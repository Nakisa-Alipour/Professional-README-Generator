// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



const generateREADME = ({github, email, title, description, license, installation, 
    tests, usage, contributing}) =>
    `# ${title}

    ## Description
    ${description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Contributing
    ${contributing}

    ## Tests
    ${tests}

    ## License
    ![License](https://img.shields.io/badge/License-${license}-blue.svg)

    This project is licensed under the ${license} license.

    ## Questions
    If you have any questions, please contact me at ${email}. You can also check out my GitHub profile at https://github.com/${github}.
`;


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
        message: 'Please write a short description of your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the application license?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is the instruction or commend line to be used for installation?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What is commend line to run tests?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information regarding this project',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What is the contribution to the repo?',
      },
    ])
    .then((answers) => {
        const readmePageContent = generateREADME(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md file!')
        )
    });
  
    

    
  
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
