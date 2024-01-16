// main application logic
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'README.md');

inquirer
  .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How can users install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How should users use your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPL', 'Apache', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can users contribute to your project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How can users run tests for your project?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ])
    .then((data) => {
  
    // Generate markdown based on user input
    const markdownContent = generateMarkdown(data);

    // Write the README file
    fs.writeFileSync(outputPath, markdownContent);

    console.log('README.md successfully generated!');
  })
  .catch((err) => console.error(err));
