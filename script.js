const fs = require('fs');
const inquirer = require('inquirer')


inquirer
    prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this particular project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write the usage for your project?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who all are the contributors for your project?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Which particular license did you use in this project?',
        choices: ''
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your username on GitHub?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },

])
.then((data) =>{
    let chosenLicense = data.license;
    let modifyLicense = chosenLicense[0];
    modifyLicense = modifyLicense.replace(/ /g, "_");
    modifyLicense = modifyLicense.replace(/-/g, "_");

    console.log(modifyLicense);

    let fileText = `
    # ${data.title}
    ![License](https://img.shields.io/badge/License-${modifyLicense}-blue.svg)

    ## Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Contributors](#contributors)
    5. [LIcense](#license)
    6. [Questions](#questions)

    ## Description
    ${data.description}

    ## Installation
    ${data.installtion}

    ## Usage
    ${data.usage}

    ## Contributors
    ${data.contributors}

    ## License
    This particular project is covered under the following license: ${data.license}

    ## Questions
    My GitHub Repository: https://github.com/${data.username}

    If you have any follow-up questions about this particular project do not hesitate to email me ${data.email}
    `;
        fs.writerFile('generateReadMe.md', fileText, (err) =>
        err ? console.log(err) : console.log('File is Now Live!')
        )

});  