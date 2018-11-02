window.addEventListener("load", () => {
  //start your code here
  const lowerCaseLetters = 
    "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = 
    "0123456789"
  const specialCharacters = 
    " !#$%&()*+,-./:;<=>?@[\]^_{|}~"
  
  // 1. figure out how long our password should be 
  document.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = document.querySelector('input')
    const passwordLength = parseInt(input.value, 10)
    let password = "" // start with empty password
    
    for (let i = 0; i < passwordLength; i++) {
      // lowercase letters
      const randomLowerCaseLetter = Math.round(Math.random() * lowerCaseLetters.length)
      lowerCaseLetters[randomLowerCaseLetter]
      
      // uppercase letters 
      const randomUpperCaseLetter = Math.round(Math.random() * upperCaseLetters.length)
    }
  })
  
  // 2. make a password from the ground up 
  
  // 3. keep track of requirements 
});
