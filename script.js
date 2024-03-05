// Accessing the elements in the DOM by ID
const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const resultText = document.getElementById("result");


// function checks sends an alert when check button is clicked with no value entered in the  text input
function check() {
    const isValueText = inputText.value.trim();
    if (isValueText === "") {
    alert("Please input a value");
    
    } else {
        return;
    } 
};


// function defines a palindrome using regex, making text the same case and reversing the order of text
function isTextPalindrome()  { 
    const isValueText = inputText.value.trim();
    const inputTextPalindrome = isValueText.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    const reverseOutputText = inputTextPalindrome.split("").reverse().join("");

    if (inputTextPalindrome === reverseOutputText) {
        resultText.innerHTML = `${inputText.value} is a palindrome`;
    }   else {
        resultText.innerHTML = `${inputText.value} is not a palindrome`;
    }
};




// checks if input is empty when the input is empty
checkButton.addEventListener("click", check);

// checks if the input is a palindrome 
checkButton.addEventListener("click", isTextPalindrome);

