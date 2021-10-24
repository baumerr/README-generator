// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'GNU AGPLv3') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  } else if (license === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'GNU LGPLv3') {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
  } else if (license === 'Mozilla Piblic License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Boost Software License 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === 'The Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else if (license === 'NO LICENSE') {
    return ''; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'GNU AGPLv3') {
    return 'https://spdx.org/licenses/AGPL-3.0-or-later.html';
  } else if (license === 'GNU GPLv3') {
    return 'https://spdx.org/licenses/GPL-3.0-or-later.html';
  } else if (license === 'GNU LGPLv3') {
    return 'https://spdx.org/licenses/LGPL-3.0-or-later.html';
  } else if (license === 'Mozilla Public License 2.0') {
    return 'https://spdx.org/licenses/MPL-2.0.html';
  } else if (license === 'Apache License 2.0') {
    return 'https://spdx.org/licenses/Apache-2.0.html';
  } else if (license === 'MIT License') {
    return 'https://spdx.org/licenses/MIT.html';
  } else if (license === 'Boost Software License 1.0') {
    return 'https://spdx.org/licenses/BSL-1.0.html';
  } else if (license === 'The Unlicense') {
    return 'https://spdx.org/licenses/Unlicense.html';
  } else if (license === 'NO LICENSE') {
    return ''; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return`
  \n${license}.
  \nLink: ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  \n\n## Table of Contents
\n*[Description](#description)
\n*[Installation](#installation)
\n*[Instructions](#instructions)
\n*[License](#lincense)
\n*[Contribution](#contribution)
\n*[Testing](#testing)
\n*[GitHub](#github)
\n\n## Description
\n${data.description}
\n\n## Installation
\n${data.installation}
\n\n## Instructions
\n${data.exampleOfUse}
\n\n## License${renderLicenseSection(data.license)}
\n\n## Contribution
\n${data.contribution}
\n\n## Testing
\n${data.test}
\n\n## GitHub
\nhttps://github.com/${data.github}
`;
}

module.exports = generateMarkdown;