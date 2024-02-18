const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const resultText = document.getElementById("result");



// const isTextPalindrome = () => { 
//     const inputTextPalindrome = str.inputText.toLowerCase().replace(/\W+/g, " ");
//     const outputText = inputTextPalindrome.join("");
//     const reverseOutputText = inputTextPalindrome.reverse().join("");

//     if (outputText === reverseOutputText) {
//         resultText.innerHTML = `${inputText.value} is a palindrome`;
//     }   else {
//         resultText.innerHTML = `${inputText.value} is not a palindrome`;
//     }
// };


function isTextPalindrome(str)  { 

    const inputTextPalindrome = str.toLowerCase().replace(/\W+/g, " ");
    console.log(inputTextPalindrome)
    const outputText = inputTextPalindrome.join("");
    const reverseOutputText = inputTextPalindrome.reverse().join("");

    if (outputText === reverseOutputText) {
        resultText.innerHTML = `${inputText.value} is a palindrome`;
    }   else {
        resultText.innerHTML = `${inputText.value} is not a palindrome`;
    }
};

// const outputTextPalindrome = (isTextPalindrome => {
//     if (isTextPalindrome === "A") {
//         resultText.innerText = "A is a palindrome"
//     } if (isTextPalindrome === "eye") {
//         resultText.innerText = "eye is a palindrome"
//     } if (isTextPalindrome === "_eye") {
//         resultText.innerText = "_eye is a palindrome"
//     } if (isTextPalindrome === "race car") {
//         resultText.innerText = "race car is a palindrome"
//     } if (isTextPalindrome === "not a plaindrome") {
//         resultText.innerText = "not a palindrome is not a palindrome"
//     } if (isTextPalindrome === "A man, a plan. a canal. Panama") {
//         resultText.innerText = "A man, a plan. a canal. Panama is a palindrome"
//     } if (isTextPalindrome === "never odd or even") {
//         resultText.innerText = "never odd or even is a palindrome"
//     } if (isTextPalindrome === "nope") {
//         resultText.innerText = "nope is not a palindrome"
//     } if (isTextPalindrome === "almostomla") {
//         resultText.innerText = "almostomla si not a palindrome"
//     } if (isTextPalindrome === "My age is 0, 0 si ega ym") {
//         resultText.innerText = "My age is 0, 0 si ega ym. is a palindrome"
//     } if (isTextPalindrome === "0_0 (: /-\ :) 0-0") {
//         resultText.innerText = "0_0 (: /-\ :) 0-0 is a palindrome"
//     } if (isTextPalindrome === "five|\_/|four") {
//         resultText.innerText = "five|\_/|four is not a palindrome"
//     }

// });


// inputText.addEventListener(isTextPalindrome); 

// resultText.addEventListener("display")


checkButton.addEventListener("click", () => {
    if (inputText === null) {
    alert("Please input a value");
    return;
}   
    isTextPalindrome(inputText);




}


);




