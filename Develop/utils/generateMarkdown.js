function generateMarkdown( UserResposes, UserInfo){

  let draftMarkdown = `
  
  # ${userresponses.title}

  ##Repo
  (https://github.com/${userResponses.username}/${UserResposes.repo}) 

  ##Title 
  ${UserResposes.title}

  ##Description
  ${userResponses.description}

  ##Instructions 
    ${userResponses.Instruction}

  ##About the Project 

  #Differenciation 
   ${UserResposes.Different}

  #Learnings 
    ${userResponses.Learn}

  #The Why behind the project 
    ${userResponses.thewhy}

  #User-Story
    ${userResponses.userstory}

  #Motivation 
    ${userResposes.motivation}

  #Problem
    ${UserResposes.problemSolving}

  ##Installation
    ${UserResposes.install}

  ##License
    ${userResposes.license}

  ##Collaborators
    ${userResponses.Collaborators}

  ##For More information 
  Please contact ${userReponses.username}
  `
  return draftMarkdown;

}

module.exports = generateMarkdown;
