// main application logic
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'README.md');

inquirer
  .prompt([
    // Questions for the user here
  ])
  .then((data) => {
    // Generate markdown based on user input
    const markdownContent = generateMarkdown(data);

    // Write the README file
    fs.writeFileSync(outputPath, markdownContent);

    console.log('README.md successfully generated!');
  })
  .catch((err) => console.error(err));
