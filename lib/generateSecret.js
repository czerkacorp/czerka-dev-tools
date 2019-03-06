module.exports = function(args){

  // Get the length, characters to be used and titles to be used to generatea the secret key
  const length = parseInt(args[0])
  const options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const titles = ["emperor","darth","lord","lady","overseer","sith","acolyte","grand-master","master","knight","padawan","apprentice","initiate","youngling"]

  // Choose a title and declare secret variable
  const chosenTitle = titles[Math.floor(Math.random() * titles.length)]
  let secret = ""
  
  // If no length is given, return an error and prompt the user to enter something
  if (args[0] === undefined){
    return console.log(`Error: Please provide a length to generate a secret key (e.g. czerka:generatekey 10).`)
  }

  // If the length given isn't a number, prompt the user to enter a valid number
  if (isNaN(length)){
    return console.log(`Error: "${args[0]}" is not a valid length. Please a number to generate a secret key.`)
  }

  // Visual feedback to show user key is being generated + what the length was
  console.log(`-------------------------------`)
  console.log(`-- Generating secret key`)
  console.log(`-- Length: ${args[0]}`) 
  console.log(`-------------------------------`) 

  // Generate the key based on the length provided
  for (let i = 0; i < length; i++) {
      secret += options.charAt(Math.floor(Math.random() * options.length))
  }

  // Add the random title and return the generated key as the secret key
  return console.log(`${chosenTitle}-${secret}`)
}