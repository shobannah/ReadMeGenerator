// TODO: Include packages needed for this application
// npm init -y
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
let apache = "[![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
let gnu = "[![GNU General Public License v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
let mit = "[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

const generateREADME = ({ title, description, installation, usage, questions, license, contributing, tests, email, ghusername, ghurl }) =>

`${license}

#  ${title}
### 💡 Description

${description}


### Table of Contents
* [Installation](#installation) 
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation
${installation}
### Usage
${usage}
### License
${title} is covered under the ${license} license.
### Contributing
${contributing}
### Tests
${tests}
### Questions
Github Username: ${questions}
Please find my profile here: [${questions}](${ghurl}) 

Please email me at ${email} with any additional questions.


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
        choices: [apache, gnu, mit]
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
        {
        type: 'input',
        name: 'questions',
        message: "What is your github username?",
        },
        {
        type: 'input',
        name: 'ghurl',
        message: "Please enter the url to your githin profile:",
        },
        {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
        },
    
    ])
    .then((answers) => {

        const readmePageContent = generateREADME(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
        
    });  
