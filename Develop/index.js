// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const instruction = "The NPM package required to run Readme Generator application is Inquirer";
// TODO: Create an array of questions for user input
const questions = ["What is the name of the app?", "What is the purpose of the app?", "What NPM packages and technologies does the app use?", "How do you use the app?", "Please provide contribution guidelines.", "Please provide test instructions."];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileName, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'README.md created!'
        });
      });
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log(instruction);
    return inquirer.prompt([
        {
          type: 'input',
          name: 'appName',
          message: questions[0],
          validate: appNameInput => {
            if (appNameInput) {
              return true;
            } else {
              console.log('Please enter your applcation name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: questions[1],
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please provide a description of the application!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'technology',
          message: questions[2],
          validate: technologyInput => {
            if (technologyInput) {
              return true;
            } else {
              console.log('Please provide the technologies used in the application!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'usage',
          message: questions[3],
          validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please provide instructions on how to use the application!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'guidelines',
          message: questions[4],
          validate: guidelinesInput => {
            if (guidelinesInput) {
              return true;
            } else {
              console.log('Please provide contribution guidelines for the application!');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'test',
            message: questions[5],
            validate: testInput => {
                if (testInput) {
                return true;
                } else {
                console.log('Please provide intructions for testing the functionality of the application!');
                return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licence',
            message: 'What licence does this app have? (Check one)',
            choices: ["PD", "CC0", "MIT", "Apache", "MPL", "GPL", "AGPL", "JRL", "AFPL"]
        }

        // {
        //   type: 'confirm',
        //   name: 'confirmLicence',
        //   message: 'Would you like to enter enter licencing information for the app?',
        //   default: true
        // },
        // {
        //   type: 'input',
        //   name: 'about',
        //   message: 'Provide some information about yourself:',
        //   when: ({ confirmAbout }) => confirmAbout
        // }
      ]);
}

// Function call to initialize app
init();
