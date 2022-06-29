// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(results) {
    console.log("genMark resultsObj" + results.license)
    const contact = () => {
        if (results.emailAdd !== null) {
            return `for questions please contact ${results.github} at ${results.emailAdd}.`;
        } else {
            return `for questions please contact ${results.github}.`;
        }
    }
    return `
    # ${results.projectName}.

    ![license badge](https://img.shields.io/static/v1?label=license&message=${encodeURI(results.license)}&color=brightgreen)

    ### Description
    ${results.description}

        ${results.motivation}

        ${results.solution}

        ${results.learn}

    ### Table of Contents

    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Tests](#tests)
    *[Contributing](#contributing)
    *[Questions](#questions)

    ### Installation
    <a name="installation"/>

    \`\`\`
    ${results.installation}
    \`\`\`

    ### Usage
    <a name="usage"/>
    ${results.usage}

    ### License
    <a name="license"/>
    ${results.license}

    ### Tests
    <a name="tests"/>

    \`\`\`
    ${results.tests}
    \`\`\`

    ### Contributing
    <a name="contributing"/>
    ${results.github} is the primary contributor.
    ${results.contributors}

    ### Questions
    <a name="questions"/>
    ${contact()}
`;
}

export default generateMarkdown;
