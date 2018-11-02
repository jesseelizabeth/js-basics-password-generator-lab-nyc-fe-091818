window.addEventListener("load", () => {
  //start your code here
  const lowerCaseLetters = 
    "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = 
    "0123456789"
  const specialCharacters = 
    ""
  
  // 1. figure out how long our password should be 
  document.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = document.querySelector('input')
    const passwordLength = parseInt(input.value, 10)
    let password = "" // start with empty password
    
    for (let i = 0; i < passwordLength; i++) {
      
    }
  })
  
  // 2. make a password from the ground up 
  
  // 3. keep track of requirements 
});
