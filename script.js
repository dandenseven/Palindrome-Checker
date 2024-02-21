const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const resultText = document.getElementById("result");



function check() {
    const isValueText = inputText.value.trim();
    if (isValueText === null) {
    alert("Please input a value");
    
    } else {
        return;
    }
}


function isTextPalindrome()  { 

    const inputTextPalindrome = inputText.value.replace(/\W_/g, " ").toLowerCase();
    const outputText = inputTextPalindrome.join("");
    const reverseOutputText = inputTextPalindrome.reverse().join("");

    if (outputText === reverseOutputText) {
        resultText.innerHTML = `${inputTextPalindrome.value} is a palindrome`;
    }   else {
        resultText.innerHTML = `${inputTextPalindrome.value} is not a palindrome`;
    }
};







checkButton.addEventListener("click", check);
checkButton.addEventListener("click", isTextPalindrome);


// const inputTextPalindrome = str.toLowerCase().replace(/\W_/g, " ");