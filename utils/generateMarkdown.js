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
function generateMarkdown(data) {
    const license = encodeURI(data.license);
    const contact = () => {
        if (data.email !== null) {
            return "for questions please contact ${data.author} at ${data.email}.";
        } else {
            return "for questions please contact ${data.author}.";
        }
    }
    return `
    # ${data.title}

    ![license badge](https://img.shields.io/static/v1?label=license&message=${license}&color=brightgreen)(https://choosealicense.com/)

    ### Description
    ${data.description}

    &ensp${data.motivation}

    &ensp${data.solution}

    &ensp${data.learn}

    ### Table of Contents

    *[License](#License)
    *[Installation](#Installation)
    *[Usage](#Usage)
    *[Tests](#Tests)
    *[Contributing](#Contributing)
    *[Questions](#Questions)

    ### Installation

    \`\`\`
    ${data.installation}
    \`\`\`

    ### Usage
    ${data.usage}

    ### License
    ${data.license}

    ### Tests

    \`\`\`
    ${data.tests}
    \`\`\`

    ### Contributing
    ${data.author} is the primary contributor.
    ${data.contributing}

    ### Questions
    ${contact()}
`;
}

export default generateMarkdown;
