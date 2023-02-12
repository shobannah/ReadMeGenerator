// TODO: Include packages needed for this application
// npm init -y
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
const gnu = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

const generateREADME = ({ title, description, installation, usage, license, contributing, tests, questions }) =>

`#📖 ${title}
### 💡 Description
${description}
###Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
###Installation
${installation}
###Usage
${usage}
###🏆 License
${title} is licensed under the ${license}.
###Contributing
${contributing}
###Tests
${tests}
###💭 Questions
${questions}



Use [Google](https://www.google.com) or another search engine to research this.

---
Copyright Ⓒ 2023, Shobannah Ally `

inquirer
    .prompt([
        /* Pass your questions in here */
        {
        type: 'input',
        name: 'title',
        message: "What would you like the title of your README file to be?",
        },
        {
        type: 'input',
        name: 'description',
        message: "What would you like the description of your README file to be?",
        },  
        {
        type: 'input',
        name: 'installation',
        message: "What is your installation instructions?",
        },
        {
        type: 'input',
        name: 'usage',
        message: "What does your project do and what are some tools that will make it clearer for users to understand?",
        },  
        {
        type: 'list',
        name: 'license',
        message: "Choose a license",
        choices: ['Apache License v2.0' ,'GNU General Public License v3.0' ,'MIT License']
        }, 
        {
        type: 'input',
        name: 'contributing',
        message: "What has contributed to your project?",
        },
        {
        type: 'input',
        name: 'tests',
        message: "What are your testing instructions?",
        },
    
    ])
    .then((answers) => {

        const readmePageContent = generateREADME(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
        
    });  
