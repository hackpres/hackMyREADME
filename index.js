// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown";
import axiosAPI from "./utils/githubAPI"
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "author",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your gihub username?"
    },
    {
        type: "input",
        name: "name",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Briefly describe your project."
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation in developing this project?"
    },
    {
        type: "input",
        name: "solution",
        message: "What problem does this project aim to solve?"
    },
    {
        type: "input",
        name: "learn",
        message: "What, if anything, did you learn from this project?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What license are you using?",
        choices: ["MIT", "Apache", "GPLv3", "GPLv2", "ISC", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What method is required for installation?",
        default: "npm i"
    },
    {
        type: "input",
        name: "tests",
        message: "What method is required for testing?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What info does a user need to know to effectively utilize this repo?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who else is contributing to this repo?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, results, data) {
    fs.writeFile(`README${fileName}.md`, generateMarkdown({...results, ...data}), (err) => {
        if (err) {
            throw err;
        }
        console.log("success");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(results => {
        axiosAPI(results.github).then(({data}) => {
            console.log(data);

            writeToFile(results.name, results, data)
        })
    })
};

// Function call to initialize app
init();
