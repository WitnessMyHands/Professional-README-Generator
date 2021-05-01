// Select License and Badge
function renderLicenseBadge(license) {
  if(license === 'mit') return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  if(license === 'mpl') return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  if(license === 'epl') return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.title}**

  ## Description

  ${data.description}

  ## Table of Contents
  
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [Questions](#Questions)
  - [User](#User)
  - [Repository](#Repository)
  - [Badges](#Badges)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  
  ## License

  ${renderLicenseBadge(data.license)}

  ## Contributors

  ${data.contributors}

  ## Tests

  ${data.tests}

  ## Questions
  *Please contact ${data.user} via GitHub with any questions or concerns.*

  ### User
  - ${data.user}
  ### Repository
  - ${data.repo}

  ### Badges

  ${data.badge}
`;
}

module.exports = generateMarkdown;