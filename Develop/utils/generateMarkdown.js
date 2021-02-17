
//const license = ["PD", "CC0", "MIT", "Apache", "MPL", "GPL", "AGPL", "JRL", "AFPL"]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "PDDL":
      return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
    case "CC0":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache":
      return "[![License Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "MPL":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "GPL":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "AGPL":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "no license":
      return "";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "PDDL":
      return "[License: PDDL](https://opendatacommons.org/licenses/pddl/)";
    case "CC0":
      return "[License: CC0](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "MIT":
      return "[License: MIT](https://opensource.org/licenses/MIT)";
    case "Apache":
      return "[License Apache](https://opensource.org/licenses/Apache-2.0)";
    case "MPL":
      return "[License: MPL](https://opensource.org/licenses/MPL-2.0)";
    case "GPL":
      return "[License: GPL](https://www.gnu.org/licenses/gpl-3.0)";
    case "AGPL":
      return "[License: AGPL](https://www.gnu.org/licenses/agpl-3.0)";
    case "no license":
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

console.log(renderLicenseBadge)
