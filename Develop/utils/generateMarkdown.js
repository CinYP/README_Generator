function generateMarkdown( answers){
//console.log('testing one two three...');

  
  let draftMarkdown = `
  
  ## ${answers.title}

  ## Repo

  (https://github.com/${answers.username}/${answers.repo}) 

  ## Title 

  ${answers.title}

  ## Description

  ${answers.description}

  ## Instructions 

    ${answers.instruction}

  ## About the Project 

  # Differenciation 

   ${answers.different}

  # Learnings 

    ${answers.learn}

  # The Why behind the project 

    ${answers.thewhy}

  # User-Story

    ${answers.userstory}

  # Motivation 

    ${answers.motivation}

  # Problem

    ${answers.problemSolving}

  ## Installation

    ${answers.install}

  ## License

    ${answers.license}

  ## Collaborators
    ${answers.collaborators}

  ## For More information 
  Please contact ${answers.username} or email ${answers.email}.

  `
  return draftMarkdown;

}

module.exports = generateMarkdown;
