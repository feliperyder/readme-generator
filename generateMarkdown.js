// generate the README content
function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ![License Badge](assets/licenses/${data.license}.svg)
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions, please contact me:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
    `;
  }
  
  module.exports = generateMarkdown;
  