// TODO: Include packages needed for this application
//external modules 
const inquirer = require('inquirer'); 
const fs = require('fs');

//internal modules
const api = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create a function to write README file
function writeToFile (filename, data) {
    fs.writeFile(filename, data, err => {
    if(err) {
        return console.log(err);
    } else {
        console.log("Yay, you generaated a README file!") } 

});
}

inquirer.prompt([
// TODO: Create an array of questions for user input
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
        default: 'README Generator',
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
        message: 'What was your motivation?', 
        name: 'motivation',
        default: 'Coding is my passion. My motivation behind this project was the desire to learn more about back end-development to further expand my knowledge and skills in the computer science world.', 
    },
    {
        type: 'input',
        message: 'Why did you build this project? (Note: The answer is not "Because it was a homework assignment.")',
        name: 'thewhy', 
        default: 'This project required a shift in front-end development skills, JavaScript, to backend development skills.'
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name:'problemSolving',
        default: 'Eliminating the hasle for developers to have to write a README file from scratch for each project.'
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learn', 
        default: 'A few of the skills learned in the creation of this project were Node, Node Project Management (NPM), FS module, Buffer Module, The Error Module, and other node essentials.'
    },
    {
        type: 'input',
        message: 'What makes your project stand out?',
        name: 'different',
        default:'While there may be other applications that complete a similar task, the differenciating aspect of this project is the dedication to excellence that was placed in the creation of this application.'
    },
    {
        type: 'input',
        message: 'Does your program require an install?',
        name: 'install',
        default: 'The application does not require an install.'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'instruction',
        default: "Begin the application by typing node index.js in your terminal. Follow the prompt, provide thoughtful questions to create your README file. Once complete, all answers are located in a README.md file"
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
        name: 'collaborators',
        default: 'Collaborators include: Cinthia Pruitt, Georgia Institute of Technology Staff (TA and Instructor), Google.com, CodeAcademmy, and various articles which helped in the understanding of Node,js.' 
    },
    {
        type: 'input',
        question: 'Please provide your email address.',
        name: 'email',
        default: 'cinthiapruitt@gmail.com' 
    },
    {
        type: 'list', 
        message:'Choose a license for your project.',
        name: 'license',
        choices: ['None','GNU', 'AGPLV3', 'MIT Lisence', 'Boost Software License', 'Other'], 

     }]).then((answers) => {
    // debugging: console.log('Answers:', answers);

    //Generating markdown and passing in answers to markdown file
    const markdown = generateMarkdown(answers);
   // debugging: console.log(markdown);

   //Genetating markdown file 
    writeToFile('ReadME.md', markdown);

   // Responding to answers the user inputs 
     console.log(`Your Responses: ${answers}`);
     console.log("Thank you for your responses.... "); 
     console.log("Yay, you generated your Readme file!...")
   } 
).catch((error)=> {
    if (error.isTtyError){
        console.log('oh no!Something went wrong.')
    }
});