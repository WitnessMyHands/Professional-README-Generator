// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.title}**

  ## Description
  ${data.description}

  ## Table of Contents
  
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[License](#License)
  -[Contributing](#Contributing)
  -[Tests](#Tests)
  -[Github](#Github)
  -[Repository](#Repo)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}

  ## Contributors
  ${data.contributing}

  ## Project Tests
  ${data.tests}

  ## Questions
  *Please contact ${data.user} via GitHub with any questions or concerns.*

  ### GitHub Contact Information
  - ${data.github}

  ### Repository
  - ${data.repo}
`;
}

module.exports = generateMarkdown;