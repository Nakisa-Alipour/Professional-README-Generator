# Professional-README-Generator

## Description
This is a command-line application that generates a professional README.md file for a new project. The application uses the Inquirer package to prompt the user for information about their project repository and dynamically generates a README file based on their input.


## User Story
As a developer, I want a README generator so that I can quickly create a professional README for a new project.


## Acceptance Criteria
- The application accepts user input through the command line
- The generated README contains a title of the project and sections for Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- The project title is displayed as the title of the README
- The Description, Installation, Usage, Contributing, and Tests sections are populated with the user's input
- The License section includes a badge for the selected license and a notice explaining which license the application is covered under
- The Questions section includes the user's GitHub username with a link to their profile and their email address with instructions on how to contact them with additional questions
- Clicking on the links in the Table of Contents takes the user to the corresponding section of the README


## Installation
To use this application, you will need to have Node.js installed on your computer.

- Clone the repository to your local machine
- Open the terminal and navigate to the root directory of the cloned repository
- Run npm init, and then npm install inquirer@8.2.4 to install the required dependencies


## Usage
To generate a README file for your project:

- In the terminal, navigate to the root directory of the cloned repository
- Run node index.js
- Follow the prompts and enter the requested information about your project
- Once you have completed all the prompts, a README file will be generated in the dist folder



## Link to Application
Here's a link to a walkthrough video demonstrating the functionality of the application:



## Contributing
If you would like to contribute to this project, please follow these guidelines:

- Fork the repository
- Create a new branch for your changes
- Make your changes and commit them with a descriptive message
- Push your changes to your forked repository
- Create a pull request to merge your changes into the main repository


## Tests
To run tests for this application, use the following command in the terminal: npm test
