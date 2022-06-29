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
    const contact = () => {
        if (results.emailAdd !== null) {
            return `for questions please contact ${results.github} at ${results.emailAdd}.`;
        } else {
            return `for questions please contact ${results.github}.`;
        }
    }
    return `
    # ${results.projectName}.

    ![license badge](https://img.shields.io/static/v1?label=license&message=${results.license[0]}&color=brightgreen&raw=true)(https://choosealicense.com/)

    ### Description
    ${results.description}

        ${results.motivation}

        ${results.solution}

        ${results.learn}

    ### Table of Contents

    *[Installation](#Installation)
    *[Usage](#Usage)
    *[License](#License)
    *[Tests](#Tests)
    *[Contributing](#Contributing)
    *[Questions](#Questions)

    ### Installation

    \`\`\`
    ${results.installation}
    \`\`\`

    ### Usage
    ${results.usage}

    ### License
    ${results.license}

    ### Tests

    \`\`\`
    ${results.tests}
    \`\`\`

    ### Contributing
    ${results.github} is the primary contributor.
    ${results.contributors}

    ### Questions
    ${contact()}
`;
}

export default generateMarkdown;
