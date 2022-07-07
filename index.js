// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import axiosAPI from "./utils/githubAPI.js"
import fs from "fs";

const descriptionPhoto = [];

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your gihub username?"
    },
    {
        type: "input",
        name: "emailAdd",
        message: "What is your contact email?"
    },
    {
        type: "confirm",
        name: "confirmImg",
        message: "Would you like to add an image to your contact section?",
        default: false,
    },  
    {
        type: "input",
        name: "contactImg",
        message: "Provide the file path for your desired image.",
        when: function(answers) {
            return !!answers.confirmImg
        },
    },
    {
        type: "input",
        name: "projectName",
        message: "What is the name of your project/repo?"
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
        message: "Talk about anything you may have learned from developing this project."
    },
    {
        type: "confirm",
        name: "confirmDescriptionImg",
        message: "Would you like to add an image or screenshot to your description section?",
        default: false
    },
    {
        type: "input",
        name: "descriptionImg",
        message: "Provide the file path for your desired image.",
        when: function(answers) {
            return !!answers.confirmDescriptionImg
        },
    },    
    {
        type: "confirm",
        name: "additionalDescriptionImg",
        message: "Would you like to add an additional image or screenshot to your description section?",
        default: false
    },
    {
        type: "input",
        name: "descriptionImg2",
        message: "Provide the file path for your desired image.",
        when: function(answers) {
            return !!answers.additionalDescriptionImg
        },
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
        type: "confirm",
        name: "confirmUsageImg",
        message: "Would you like to add an image or screenshot to your Usage section?",
        default: false
    },
    {
        type: "input",
        name: "usageImg",
        message: "Provide the file path for your desired image.",
        when: function(answers) {
            return !!answers.confirmUsageImg
        },
    },    
    {
        type: "confirm",
        name: "additionalUsageImg",
        message: "Would you like to add an additional image or screenshot to your Usage section?",
        default: false
    },
    {
        type: "input",
        name: "usageImg2",
        message: "Provide the file path for your desired image.",
        when: function(answers) {
            return !!answers.additionalUsageImg
        },
    },
    {
        type: "input",
        name: "contributors",
        message: "Who else is contributing to this repo?"
    }
];

// write README file
function writeToFile(results, data) {
    fs.writeFile(`README.md`, generateMarkdown({...results, ...data}), (err) => {
        if (err) {
            throw err;
        }
        console.log("success");
    });
};

// function to initialize app
function init() {
    inquirer.prompt(questions).then(results => {
        console.log(results)
        axiosAPI(results.github).then(({data}) => {
            console.log(data);

            writeToFile(results, data)
        })
    })
};

// call to initialize app
init();
