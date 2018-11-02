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
    if (passwordLength < 4) {
      alert('Enter a password length that is 4 or more')
      return
    }
    
    for (let i = 0; i < passwordLength; i++) {
      
      // lowercase letters
      const randomLowerCaseIndex = Math.round(Math.random() * lowerCaseLetters.length)
      password = password + lowerCaseLetters[randomLowerCaseIndex]
      if (password.length === passwordLength) {
        break
      }
      
      // uppercase letters 
      const randomUpperCaseIndex = Math.round(Math.random() * upperCaseLetters.length)
      password = password + upperCaseLetters[randomUpperCaseIndex]
      if (password.length === passwordLength) {
        break
      }
      
      // numbers 
      const randomNumberIndex = Math.round(Math.random() * numbers.length)
      password = password + numbers[randomNumberIndex]
      if (password.length === passwordLength) {
        break
      }
      
      // special characters 
      const randomSpecialCharactersIndex = Math.round(Math.random() * specialCharacters.length)
      password = password + specialCharacters[randomSpecialCharactersIndex]
      if (password.length === passwordLength) {
        break
      }
      
    }
    console.log(password)
    const result = document.querySelector('#result')
    result.innerText = password
  })
  
  // 2. make a password from the ground up 
  
  // 3. keep track of requirements 
});
