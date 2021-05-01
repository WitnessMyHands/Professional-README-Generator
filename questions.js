// Array of Questions
const questions = [
    { 
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
    },
    { 
        type: 'input',
        name: 'description',
        message: 'Describe the project.',
        validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
    },
    { 
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for the installation.',
        validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
    },
    { 
        type: 'input',
        name: 'usage',
        message: 'What is this project used for?',
        validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
    },
    { 
        type: 'input',
        name: 'license',
        message: 'Provide the license for the application.',
        validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
    },
    { 
        type: 'input',
        name: 'contributing',
        message: 'What are the project guidelines?',
        validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
    },
    { 
        type: 'input',
        name: 'tests',
        message: 'Provide project tests.',
        validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
    },
    { 
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',
        validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
    },
    { 
        type: 'input',
        name: 'repo',
        message: 'Provide a link to your repository:',
        validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
    },
];

module.exports = {
    questions
};