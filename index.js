const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const questions = require("./utils/questions.js");

const writeFilePromisify = util.promisify(fs.writeFile);

// function to initialize program
async function init() {
    console.log("Welcome to my README template generator!")
    try {
        const answers = await inquirer.prompt(questions);
        // console.log(answers);
        const mdCode = await generateMarkdown(answers);
        await writeFilePromisify("README.md", mdCode);
        console.log("README.md generated!");
    } catch (err) {
        console.log(err);
    }
}
init();