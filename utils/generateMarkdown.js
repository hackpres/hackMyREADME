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
            return `for questions please contact <a href="https://github.com/${results.github}">${results.github}</a> at ${results.emailAdd}.`;
        } else {
            return `for questions please contact <a href="https://github.com/${results.github}">${results.github}</a>.`;
        }
    }
    const contactImg = () => {
        if (results.contactImg !== null) {
            return `<img src="${results.contactImg}" width="300"/>`
        }
    }
    const descriptonImg = () => {
        if (results.descriptionImg !== null) {
            return `<img src="${results.descriptionImg}" width="300"/>`
        }
    }
    const additionalDescriptionImg = () => {
        if (results.descriptiontImg2 !== null) {
            return `<img src="${results.descriptiontImg2}" width="300"/>`
        }
    }
    const usageImg = () => {
        if (results.usageImg !== null) {
            return `<img src="${results.usageImg}" width="300"/>`
        }
    }
    const additionalUsageImg = () => {
        if (results.usagetImg2 !== null) {
            return `<img src="${results.usagetImg2}" width="300"/>`
        }
    }
    return `
# ${results.projectName}.

![license badge](https://img.shields.io/badge/license-${results.license}-brightgreen)

## Description
${results.description}

    ${results.motivation}

    ${results.solution}

    ${results.learn}

${descriptonImg()}
${additionalDescriptionImg()}

## Table of Contents

* **[Installation](#installation)**<br />
* **[Usage](#usage)**<br />
* **[License](#license)**<br />
* **[Tests](#tests)**<br />
* **[Contributing](#contributing)**<br />
* **[Contact](#contact)**<br />

### Installation
<a name="installation"/>

\`\`\`
${results.installation}
\`\`\`

### Usage
<a name="usage"/>
${results.usage}

${usageImg()}
${additionalUsageImg()}

### License
<a name="license"/>
<a href="https://choosealicense.com/licenses/${results.license}">${results.license}</a>

### Tests
<a name="tests"/>

\`\`\`
${results.tests}
\`\`\`

### Contributing
<a name="contributing"/>
${results.github} is the primary contributor.
${results.contributors}

### Contact
<a name="contact"/>
${contact()}<br/>
${contactImg()}
`;
}

export default generateMarkdown;
