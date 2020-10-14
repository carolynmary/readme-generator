const getBadges = require("./getBadges.js")
const getContributing = require("./getContributing.js")
const getCredits = require("./getCredits.js")
const getInstall = require("./getInstall.js")
const getLicense = require("./getLicense.js")
const getNext = require("./getNext.js")
const getTesting = require("./getTesting.js")
const getTOC = require("./getTOC.js")
const getURL = require("./getURL.js")
const getUsage = require("./getUsage.js")

// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ![header](assets/images/cm_header.png)

  <!-- ![logo](path-to-file-here) -->
  # ${answers.title} 
  
${getBadges(answers.badges, answers.license)}
${getURL(answers.urlLink)}
  
  - - -
  - - -
  ### ${answers.description}
  - - -
  - - -

  <!-- TOC -->
${getTOC(answers.toc)}
  
${getInstall(answers.installation)}

${getUsage(answers.usage)}

${getTesting(answers.testing)}

${getNext(answers.next)}

${getCredits(answers.credits, answers.creditsName, answers.creditsWork, answers.creditsLink)}

${getContributing(answers.contributing)}

  <!-- License --> 
${getLicense(answers.license)}
  
  ## Questions & Feedback
  
  Have a question or feedback? Send me a note or just say hi, I'd be happy to hear from you!
  
  > “Knowledge is having the right answer. Intelligence is asking the right question.” ~ Unknown
  
  Email: ${answers.email} </br>
  
  GitHub: [${answers.git}](https://github.com/${answers.git}) </br>
  
  Porfolio: [${answers.portfolioLink}](https://${answers.portfolioLink}) 
  
  </br>
  </br>

  ![header](Assets/images/cm_footer.png)
  © 2020 Carolyn Mary Stolze
  `;
};

module.exports = generateMarkdown;