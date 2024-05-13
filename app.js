const questions = [
    {
      question: "Where is Sandy Cheeks from?",
      choices: ["Texas", "Alabama", "Afghanistan", "Rock Bottom"],
      answer: "Texas"
    },
    {
      question: "What is the name of Spongebob's street?",
      choices: ["Shell", "Crab", "Conch", "Main"],
      answer: "Conch"
    },
    {
      question: "What is the name of the clarinet that Squidward plays?",
      choices: ["John Clarinet", "Brooklyn Clarinets", "Clarrissa", "Clarry"],
      answer: "Clarry"
    },
    {
      question: "Who does Mr. Krabs try to RIZZ?",
      choices: ["Pearl", "Mrs. Puff", "Sandy", "Squidward Nose <3"],
      answer: "Mrs. Puff"
    },
    {
      question: "Jeffrey Epstein didn't kill himself?",
      choices: ["They call him The Sponge", "Jeff Epstein? The New York Financier?", "Yeah he did >:(", "Jackson + Epstein Party Bus"],
      answer: "They call him The Sponge"
    },
    {
      question: "What did they call Mr. Krabs while he was in the Navy?",
      choices: ["Captian Crunch", "Dylan Klebold", "King Krabs", "Armor-Abs Krabs"],
      answer: "Armor-Abs Krabs"
    },
    {
      question: "Who is dogwalking everyone in the playoffs?",
      choices: ["Anthony Edwards", "Shai Gilgeous-Alexander", "Jayson Tabum EEWWWWWWW!!!", "Jalen Brunson"],
      answer: "Anthony Edwards"
    },
    {
      question: "How much did Mr. Krabs sell Spongebob to the Flying Dutchman for?",
      choices: ["He DIDN'T! Spongebob is PRICELESS!", "Free", "62 cents", "The Dutchman's Soul"],
      answer: "62 cents"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const resultElement = document.getElementById('result');
  
  
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
      const li = document.createElement('li');
      if (currentQuestionIndex === questions.length - 1 && choice === "The Dutchman's Soul") {
        const a = document.createElement('a');
        a.textContent = choice;
        a.href = "secret.html";
        li.appendChild(a);
      } else {
        li.textContent = choice;
      }
      li.onclick = () => checkAnswer(choice);
      choicesElement.appendChild(li);
    });
  }
  
  function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
      score++;
      resultElement.textContent = "Correct!";
    } else {
      resultElement.textContent = "Incorrect!";
    }
    setTimeout(nextQuestion, 1000); 
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
      resultElement.textContent = '';
    } else {
      endGame();
    }
  }
  
  function endGame() {
    questionElement.textContent = `Your score: ${score}/${questions.length}`;
    choicesElement.innerHTML = '';
  
  }
  
  displayQuestion();
  