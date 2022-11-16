function generateMarkdown( userResponses, userInfo){

  let draftMarkdown = `
  
  # ${userResponses.title}

  ##Repo
  (https://github.com/${userResponses.username}/${userResponses.repo}) 

  ##Title 
  ${userResponses.title}

  ##Description
  ${userResponses.description}

  ##Instructions 
    ${userResponses.Instruction}

  ##About the Project 

  #Differenciation 
   ${userResponses.Different}

  #Learnings 
    ${userResponses.Learn}

  #The Why behind the project 
    ${userResponses.thewhy}

  #User-Story
    ${userResponses.userstory}

  #Motivation 
    ${userResponses.motivation}

  #Problem
    ${userResponses.problemSolving}

  ##Installation
    ${userResponses.install}

  ##License
    ${userResponses.license}

  ##Collaborators
    ${userResponses.Collaborators}

  ##For More information 
  Please contact ${userResponses.username}
  `
  return draftMarkdown;

}

module.exports = generateMarkdown;
