// All of the questions might need to be a "when" and functions for writing text instead of all there in one.
//   ------------------------------------------------------------------------------------

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "confirm",
        name: "url",
        message: "Does your project have a URL?" 
    },
    {
        type: "input",
        name: "urlLink",
        message: "What is the url?",
        when: function (answers) {
            return answers.url;
        },
    },
    {
        type: "confirm",
        name: "badges",
        message: "Do you want badges?"
    },
    {
        type: "checkbox",
        name: "toc",
        message: "Select which to include in the TOC?",
        choices: ["Installation", "How to Use", "Testing", "What’s Next", "Credits", "Contributing", "License", "Questions & Feedback"]
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief overview..."
    },
    { 
        type: "input",
        name: "installation",
        message: "Describe how to install...",
        default: "run command `npm i` to install dependencies"
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how to use...",
        default: "run command `node index`"
    },
    {
        type: "input",
        name: "testing",
        message: "Describe how to run a test...",
        default: "run command `npm test`"
    },
    {
        type: "input",
        name: "next",
        message: "Tell us what’s coming up in the future...",
        default: "Let me know if you have suggestions!"
    },
    {
        type: "confirm",
        name: "credits",
        message: "Would you like to credit anyone?"
    },
    {
        type: "input",
        name: "creditsName",
        message: "Who are you crediting?",
        when: function(answers){
            return answers.credits;
        }
    },
    {
        type: "input",
        name: "creditsWork",
        message: "How did she/he/they contribute?",
        when: function(answers){
            return answers.credits;
        }
    },
    {
        type: "input",
        name: "creditsLink",
        message: "Do they have a website to link to?",
        when: function(answers){
            return answers.credits;
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "What guidelines do you have for users who want to contribute?",
        default: "Please contact me for guidelines."
    },
    {
        type: "list",
        name: "license",
        message: "What type of license do you want?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "AGPL 3.0", "ISC", "None"]
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "git",
        message: "What is your GitHub username?"
    },
    {
        type: "confirm",
        name: "portfolioYN",
        message: "Do you have a portfolio website?"
    },
    {
        type: "input",
        name: "portfolioLink",
        message: "What is the url to your website?",
        when: function(answers){
            return answers.portfolioYN;
        }
    },
];

module.exports = questions;
