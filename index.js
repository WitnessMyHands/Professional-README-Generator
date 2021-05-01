const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// Array of Questions Pulled from questions.js
const { questions } = require('./questions');

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
    // Creates a README file and pulls 'data' from Questions Array
    fs.writeFile('README.md', generate(data), () => {
        console.log('README.md file written successfully');
        })
    })
};

// Function call to initialize app
init()