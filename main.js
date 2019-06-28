let Phrase = require("werronense-palindrome");

// prompt user input, determine whether palindrome or not
function palindromeTester(event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.text = `"${phrase.content}" is a palindrome.`;
  } else {
    palindromeResult.text = `"${phrase.content}" is not a palindrome.`;
  }
}

// add event listeners after the DOM loads
document.addEventListener("DOMContentLoaded", function(){
  // select the button and add a click event listener
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event){
    palindromeTester(event);
  });
});
