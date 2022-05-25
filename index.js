const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title',
},
{
    type: 'input',
    message: 'Please enter a description for the project.',
    name: 'description',
},
{
    type: 'input',
    message: 'What are the installation instructions for this project?',
    name: 'install',
},
{
    type: 'input',
    message: 'In what ways can this project be used?',
    name: 'usage',
},
{
    type: 'input',
    message: 'Who contributed to creating this project?',
    name: 'credits',
},
{
    type: 'input',
    message: 'What are the test instructions',
    name: 'instructions',
},
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
},
])
.then((response) => {
    fs.writeFile("README.md",`
# ${response.title}

# Table of contents:
- [Description](#description)
- [Installation](#install)
- [Usage](#usage)
- [Credits](#credits)
- [Instructions](#instructions)
- [Github](#github)
- [Email](#email)

## Description:

${response.description}
## Installation:

${response.install}
## Usage:

${response.usage}
## Credits:

The following project has been done by: ${response.credits}
## Instructions:

${response.instructions}.
## Github:

-[View the Github profile here](https://github.com/${response.github})
## Email:

for additional questions you can email me at ${response.email}.

view the video walkthrough here:

https://drive.google.com/file/d/1Iypj1BjQQ1syqy39PLYqcIyIaxtJEq4_/view?usp=sharing



    `,(err) => console.log("error displaying"))
    console.log(response)
})

