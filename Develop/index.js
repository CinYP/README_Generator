// TODO: Include packages needed for this application

//external modules 
const inquirer = require('inquirer'); 
const fs = require('fs');
const util = require('node:util');


//internal modules
const api = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown.js');
const answers = 


// TODO: Create an array of questions for user input
.prompt([
    {
        type: 'input',
        message: 'What is your Github usernme? Note that an @ is not needed!',
        name:'username',
        default: 'CinYP',
        validate: function(answer) {
            if (answer.lenght <1 ) {
                return console.log('Please provide a valid answer.')
            } else {
            return true;}
        }
    },
    {
        type: 'input',
        message: 'What is the title of your GitHub Repo?',
        name:'repo',
        default: 'README_Generator',
        validate: function(answer) {
            if (answer.lenght <1) {
                return console.log('Please provide a valid answer.')
            } else {
            return true;}
        }
    },
    {
        type: 'input',
        message: 'What is the title of your project',
        name:'title',
        default: 'Project',
        validate: function(answer) {
            if (answer.lenght <1) {
                return console.log('Please provide a valid answer.')
            } else {
            return true;}
        }
    },
    {
        type: 'input',
        message: 'How would you descripe your project?',
        name:'description',
        default: 'README_Generator',
        validate: function(answer) {
            if (answer.lenght <1) {
                return console.log('Please provide a valid answer.')
            } else {
            return true;}
        }
    },
    {
        type: 'input',
        nessage: 'What was your motivation?', 
        name: 'motivation',
        default: 'Coding is my passion. My motivation behind this project was the desire to learn more about back end-development to further expand my knowledge and skills in the computer science world.', 
    },
    {
        type: 'input',
        nessage: 'Why did you build this project? (Note: The answer is not "Because it was a homework assignment.")',
        name: 'thewhy', 
        default: 'This project required a shift in front-end development skills, JavaScript, to backend development skills.'
    },
    {
        type: 'input',
        nessage: 'What problem does it solve?',
        name:'problemSolving',
        default: 'Eliminating the hasle for developers to have to write a README file from scratch for each project.'
    },
    {
        type: 'input',
        nessage: 'What did you learn?',
        name: 'Learn', 
        default: 'A few of the skills learned in the creation of this project were Node, Node Project Management (NPM), FS module, Buffer Module, The Error Module, and other node essentials.'
    },
    {
        type: 'input',
        nessage: 'What makes your project stand out?',
        name: 'Different',
        default:'While there may be other applications that complete a similar task, the differenciating aspect of this project is the dedication to excellence that was placed in the creation of this application.'
    },
    {
        type: 'input',
        nessage: 'Does your program require an install?',
        name: 'Install',
        default: 'The application does not require an install.'
    },
    {
        type: 'input',
        nessage: 'Provide instructions and examples for use',
        name: 'Instruction',
        default: "Begin the application by typing node <filename> in your terminal. Follow the prompt, provide thoughtful questions to create your README file. Once complete, all answers are located in README.md."
    },
    {
        type: 'input',
        question: 'What is your user story?',
        name: 'userstory', 
        default: 'As a user, I would love to quickly, efficiently, and effectively create a proper README file for my application.'
    },
    {
        type: 'input',
        question: 'List your collaborators, if any, with links to their Github profile.',
        name: 'Collaborators',
        default: 'Collaborators include: Cinthia Pruitt, Georgia Institute of Technology Staff (TA and Instructor), Google.com, CodeAcademmy, and various articles which helped in the understanding of Node,js.' 
    },
    {
        type: 'list', 
        message:'Choose a license for your project.',
        name: 'licence',
        choices: [' None,GNU, AGPLV3, MIT Lisence, Boost Software License, Other'], 
        default:'None'
    }


]);

.then (answers) => {
    console.log(console.info('Answers:', answers)
    )};


    /*
// TODO: Create a function to write README file
function writeToFile (filename, data) {
    fs.writeFile(filename, data, err => {
    if(err) {
        return console.log(err);
    } else {
        console.log("Yay, you generaated a README file!") } 

});

}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
//An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
 
async function init(){
 try{
    //This will prompt the questions 
    console.log('work please')
    const userResponses = await inquirer.createPromptModule(questions);
    console.log(`Your Responses: ${userResponses}`);
    console.log("Thank you for your responses.... Give us a moment while we fetch our information..."); 

    //This gets user information 
    const userInfo = await api.getUser(userResponses);
    console.log(`Your Github user information: ${userInfo}`); 

    //Pass Inquirer userResponses and userInformation to generateMarkdown document
    console.log("I'm generating your README now...")
    const markdown = generateMarkdown(userResponses, userInfo);
    console.log(markdown);

    await writeFileAsync('ReadME.md', markdown);

} catch(error){
    console.log(error)
 }
}


*/
// Function call to initialize app
init();