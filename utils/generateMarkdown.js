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
        if (results.contactImg !== undefined) {
            return `<img src="${results.contactImg}" width="300"/>`
        } else {
            return ""
        }
    }
    const descriptonImg = () => {
        if (results.descriptionImg !== undefined) {
            return `<img src="${results.descriptionImg}" width="800"/>`
        } else {
            return ""
        }
    }
    const additionalDescriptionImg = () => {
        if (results.descriptionImg2 !== undefined) {
            return `<img src="${results.descriptionImg2}" width="800"/>`
        } else {
            return ""
        }
    }
    const usageImg = () => {
        if (results.usageImg !== undefined) {
            return `<img src="${results.usageImg}" width="800"/>`
        } else {
            return ""
        }
    }
    const additionalUsageImg = () => {
        if (results.usageImg2 !== undefined) {
            return `<img src="${results.usageImg2}" width="800"/>`
        } else {
            return ""
        }
    }
    const licenseLink = () => {
        if (results.license === "none") {
            return "This repo is not covered by any license."
        } else {
            return `<a href="https://choosealicense.com/licenses/${results.license}/">${results.license}</a><br/>
            For more information on the coverage of this license please click on the link above.`
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

${descriptonImg()}<br/>
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
${results.usage}<br/>

${usageImg()}<br/>
${additionalUsageImg()}

### License
<a name="license"/>

${licenseLink()}

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
