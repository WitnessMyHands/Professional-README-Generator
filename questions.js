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
        type: 'list',
        name: 'license',
        message: 'Select the license for your application:',
        choices: ['mit','mpl','epl'],
    },
    { 
        type: 'input',
        name: 'contributors',
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
        name: 'user',
        message: 'What is your GitHub user name?',
        validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
    },
    { 
        type: 'input',
        name: 'repo',
        message: 'Provide a link to your repository:',
        validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
    },
    {
        type: 'input',
        name: 'badge',
        message: 'Provide badge link(s) here:',
        validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
    },
];

module.exports = {
    questions
};