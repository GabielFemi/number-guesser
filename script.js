const randomNumber = function () {
    return 3
}


const guessForm = document.getElementById("guessForm");
const log = document.getElementById("log");
guessForm.addEventListener("submit", processGuess)

function processGuess() {
    let userInput = document.getElementById("userInput").value;
    log.textContent = "You submitted " + userInput
    event.preventDefault()
}
// lengthOfUserInput = userInput.length
// alert(userInput.length)
// alert(userInput)