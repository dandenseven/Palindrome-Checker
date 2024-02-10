const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const resultText = document.getElementById("result");


const textInput = () => {

}

const isTextPalindrome = () => {
    const isAPalindrome = string.lower(textInput).replace(/\W+/g, " ")
    if (string === isAPalindrome)
    return isAPalindrome
};



checkButton.addEventListener( "click", (inputText) => {
    if (inputText === null) {
        window.alert("Please input a value");
    } if (inputText === "A") {
        resultText.innerText = "A is a palindrome"
    } if (inputText === "eye") {
        resultText.innerText = "eye is a palindrome"
    }
} )



