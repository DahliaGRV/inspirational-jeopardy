var quoteText = document.getElementById("myQuote");
var authorText = document.getElementById("quoteAuthor");
var answerText = "";
var questionText = document.getElementById("question1");
var modal = document.getElementById("modal1");
var submitBtn = document.getElementById("submit");
var questionContainer = document.getElementById("questions");
var playAgainBtn = document.getElementById("return");
var resultPage = document.getElementById("resultpage");
var parametersContainer = document.getElementById("parameters");
var userAnswer = document.getElementById("textarea1");
var categoryRow = document.getElementById("category-labels");
var potpourriiii = 306;
var stupidAnswers = 136;
var americanHistory = 780;
var animals = 21;
var threeLetterWords = 105;
var people = 442;
var category;
var value;
var score = 0;


// TODO: EVERYTHING RELATING TO PARAMETERS
// TODO: generate 5 questions for each category
// TODO: link boxes to the questions
// TODO: WHEN question answered clear text in the box

// function to pull a question and put it on the screen
$(".question-row")
  .children()
  .on("click", function (event) {
    value = $(this).parent().attr("data-value");
    if ($(this).hasClass("animals")) {
      category = animals;
    } else if ($(this).hasClass("potpourriiii")) {
      category = potpourriiii;
    } else if ($(this).hasClass("americanHistory")) {
      category = americanHistory;
    } else if ($(this).hasClass("threeLetterWords")) {
      category = threeLetterWords;
    } else if ($(this).hasClass("people")) {
      category = people;
    } else if ($(this).hasClass("stupidAnswers")) {
      category = stupidAnswers;
    } else {
      return;
    }
    getJservice();
  });

function getJservice() {
  var requestUrl =
    "http://jservice.io/api/clues?category=" + category + "&value=" + value;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      questionText.textContent = data[0].question;
      var answerTemp = removeTags(data[0].answer);
      answerText = answerTemp.replace(/&/, "and");
      console.log(answerText);
    });
}

// function getJservice() {
//   var requestUrl = "http://jservice.io/api/random";

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {

//       questionText.textContent = data[0].question;
//       var answerTemp =  removeTags(data[0].answer);
//       answerText = answerTemp.replace(/&/, "and")

//       console.log(answerText)
//     });
// }

// function to pull quotes
function getQuote() {
  var requestUrl = "https://type.fit/api/quotes";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var randomNumber = Math.floor(Math.random() * 1643);
      // set this to show up in the quote block between questions
      console.log(data[randomNumber].text);
      quoteText.textContent = data[randomNumber].text;
      authorText.textContent = data[randomNumber].author;
    });
}

// function that hides the parameters
function hideParameters() {
  parametersContainer.classList.add("hide");
}

// function that runs the quiz for the first question
$("#start-quiz").on("click", function () {
  hideParameters();
  getJservice();
  showQuiz();
});

// function for dealing with questions as they get answered
submitBtn.addEventListener("click", function () {
  if (userAnswer.value == answerText.toLowerCase()) {
    M.toast({ html: "Correct!!", classes: "rounded" });
    getJservice();
  } else {
    // make the quote thing show up
    M.toast({ html: "Incorrect :(", classes: "rounded" });
    hideQuiz();
    getQuote();
    showQuote();
  }
});

function wrongAnswer() {
  getQuote();
}

// function that shows the quote
function showQuote() {
  quoteContainer.classList.remove("hide");
}

// function that hides shows the quote
function hideQuote() {
  quoteContainer.classList.add("hide");
}

// function that hides shows the quiz
function showQuiz() {
  questionContainer.classList.remove("hide");
}

// function that hides the quiz
function hideQuiz() {
  questionContainer.classList.add("hide");
}

function removeTags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace(/(<([^>]+)>)/gi, "");
}

$(".dropdown-trigger").dropdown();

// changes category 1 heading when an option is selected
$("#category1")
  .children()
  .on("click", function (event) {
    var placeholder = event.currentTarget.textContent;
    console.log(placeholder);
    $("#category-display-1").children().text(event.currentTarget.textContent);
    if (placeholder == "American History") {
      $(".category-1").each(function () {
        $(this).addClass("americanHistory");
      });
    } else if (placeholder == "Potpourriiii") {
      $(".category-1").each(function () {
        $(this).addClass("potpourriiii");
      });
    } else if (placeholder == "Stupid Answers") {
      $(".category-1").each(function () {
        $(this).addClass("stupidAnswers");
      });
    } else if (placeholder == "Animals") {
      $(".category-1").each(function () {
        $(this).addClass("animals");
      });
    } else if (placeholder == "Three Letter Words") {
      $(".category-1").each(function () {
        $(this).addClass("threeLetterWords");
      });
    } else {
      $(".category-1").each(function () {
        $(this).addClass("people");
      });
    }
  });

// changes category 2 heading when an option is selected
$("#category2")
  .children()
  .on("click", function (event) {
    var placeholder = event.currentTarget.textContent;
    console.log(placeholder);
    $("#category-display-2").children().text(event.currentTarget.textContent);
    if (placeholder == "American History") {
      $(".category-2").each(function () {
        $(this).addClass("americanHistory");
      });
    } else if (placeholder == "Potpourriiii") {
      $(".category-2").each(function () {
        $(this).addClass("potpourriiii");
      });
    } else if (placeholder == "Stupid Answers") {
      $(".category-2").each(function () {
        $(this).addClass("stupidAnswers");
      });
    } else if (placeholder == "Animals") {
      $(".category-2").each(function () {
        $(this).addClass("animals");
      });
    } else if (placeholder == "Three Letter Words") {
      $(".category-2").each(function () {
        $(this).addClass("threeLetterWords");
      });
    } else {
      $(".category-2").each(function () {
        $(this).addClass("people");
      });
    }
  });
// changes category 3 heading when an option is selected
$("#category3")
  .children()
  .on("click", function (event) {
    var placeholder = event.currentTarget.textContent;
    console.log(placeholder);
    $("#category-display-3").children().text(event.currentTarget.textContent);
    if (placeholder == "American History") {
      $(".category-3").each(function () {
        $(this).addClass("americanHistory");
      });
    } else if (placeholder == "Potpourriiii") {
      $(".category-3").each(function () {
        $(this).addClass("potpourriiii");
      });
    } else if (placeholder == "Stupid Answers") {
      $(".category-3").each(function () {
        $(this).addClass("stupidAnswers");
      });
    } else if (placeholder == "Animals") {
      $(".category-3").each(function () {
        $(this).addClass("animals");
      });
    } else if (placeholder == "Three Letter Words") {
      $(".category-3").each(function () {
        $(this).addClass("threeLetterWords");
      });
    } else {
      $(".category-3").each(function () {
        $(this).addClass("people");
      });
    }
  });
