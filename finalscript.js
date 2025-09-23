// Question and answer class structure
// questions 
// -> question = text string
// -> image = image string
// -> answers
//    -> A1 = answer option 1
//       -> text = text string
//       -> scores = { dimension1: score, dimension2: score, ... }


const questions = [
    {
        // Question 1

        question: "You have to shop for groceries today! What are you wearing?",
        image: "images/Q1/Q1_BG.png",
        answers: {
            A1_1: {
                text: "Comfy and casual",
                scores: { T: 0, F: +1 },
            },
            
            A2_1: {
                text: "Full-on work mode",
                scores: { T: 0, F: +1 },
            },

            A3_1: {
                text: "The coolest drip ever",
                scores: { T: +1, F: 0 },
            },

            A4_1: {
                text: "I’ll go there in my pajamas",
                scores: { T: +1, F: 0 },
            },

            A5_1: {
                text: "Something very aesthetic",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        // Question 2

        question: "What's your mood today?",
        image: "images/Q2/Q2_BG.png",
        answers: {
            A1_2: {
                text: "Calm and collected",
                scores: { T: 0, F: +1 },
            },

            A2_2: {
                text: "Absolutely locked in",
                scores: { T: 0, F: +1 },
            },

            A3_2: {
                text: "All hands, ready for drama",
                scores: { T: +1, F: 0 },
            },

            A4_2: {
                text: "No thoughts, empty head",
                scores: { T: +1, F: 0 },
            },

            A5_2: {
                text: "I wanna get this over with",
                scores: { T: +1, F: 0 },
            },

        },
    },
    {
        // Question 3

        question: "What's your shopping cart vibe?",
        image: "images/Q3/Q3_BG.png",
        answers: {
            A1_3: {
                text: "Balanced! Boring but everything you need :)",
                scores: { T: 0, F: +1 },
            },

            A2_3: {
                text: "Functional like quick snacks and energy boosts.",
                scores: { T: 0, F: +1 },
            },

            A3_3: {
                text: "Daring; full of herbs, spices and trying new things out ",
                scores: { T: +1, F: 0 },
            },

            A4_3: {
                text: "Absolutely messy. I'll put anything if I could",
                scores: { T: +1, F: 0 },
            },

            A5_3: {
                text: "Chock-full of artisanal products that caters to a niche taste",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        // Question 4

        question: "It's time to shop! Where do you wanna go",
        image: "images/Q4/Q4_BG.png",
        answers: {
            A1_4: {
                text: "Fresh and produce corner",
                scores: { T: 0, F: +1 },
            },

            A2_4: {
                text: "Coffee and drinks aisle",
                scores: { T: 0, F: +1 },
            },

            A3_4: {
                text: "Bakery section",
                scores: { T: +1, F: 0 },
            },

            A4_4: {
                text: "Candy and snacks area",
                scores: { T: +1, F: 0 },
            },

            A5_4: {
                text: "Free tastings",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        // Question 5

        question: "Put your headphones on. What are you listening?",
        image: "images/Q5/Q5_BG.png",
        answers: {
            A1_5: {
                text: "Chill lo-fi playlists or relaxing music",
                scores: { T: 0, F: +1 },
            },

            A2_5: {
                text: "Podcasts or listening to the radio",
                scores: { T: 0, F: +1 },
            },

            A3_5: {
                text: "Tracks that simply vibe with you",
                scores: { T: +1, F: 0 },
            },

            A4_5: {
                text: "The most random songs that you hear when you shuffle",
                scores: { T: +1, F: 0 },
            },

            A5_5: {
                text: "Just listening to a vlog or a YouTube commentary",
                scores: { T: +1, F: 0 },
            },

        },
    },
    {
        // Question 6

        question: "It's time to check out! What's your call?",
        image: "images/Q6/Q6_BG.png",
        answers: {
            A1_6: {
                text: "Organizing your items while patiently waiting",
                scores: { T: 0, F: +1 },
            },

            A2_6: {
                text: " Checking your phone for any emails, schedules, etc.",
                scores: { T: 0, F: +1 },
            },

            A3_6: {
                text: "Casually gossiping with the cashier or the customers behind you",
                scores: { T: +1, F: 0 },
            },

            A4_6: {
                text: "Doomscrolling or watching brainrot videos from your phone",
                scores: { T: +1, F: 0 },
            },

            A5_6: {
                text: "Daydreaming",
                scores: { T: +1, F: 0 },
            },

        },
    },
    {
        // Ending Question 

        question: "Ending scene.",
        image: "test_image.png",
        answers: {
            K: {
                text: "Are you feeling it now Mr. Krabs?",
            },
            U: {
                text: "No, Patrick, Mayonnaise is not an instrument. Horseradish is not an instrument either.",
            },
        },
    },
];

const resultOptions = {
    "Egg": {
        image: "Egg.png"
    },
    "Coffee": {
        image: "Coffee.png"
    },
    "Bread": {
        image: "Bread.png"
    },
    "Tea Bag": {
        image: "Tea_Bag.png"
    },
    "Rice": {
        image: "Rice.png"
    },
    "Sugar": {
        image: "Sugar.png"
    },
    "Milk": {
        image: "Milk.png"
    },
    "Salt": {
        image: "Salt.png"
    },
    "Cheese": {
        image: "Cheese.png"
    },
    "Soy Sauce": { 
        image: "Soy_Sauce.png"
    },
};

/// NEW //

const traitNames = [
  "Egg",      // 0
  "Tea_Bag",  // 1
  "Coffee",   // 2
  "Soy_Sauce",// 3
  "Rice",     // 4
  "Bread",    // 5
  "Cheese",   // 6
  "Salt",     // 7
  "Sugar",    // 8
  "Milk"      // 9
];

let traitScores = new Array(traitNames.length).fill(0);

const scoringMap = {
  1: { // Q1
    1: [0,1],   // Egg, Tea_Bag
    2: [2,3],   // Coffee, Soy_Sauce
    3: [4,5],   // Rice, Bread
    4: [6,7],   // Cheese, Salt
    5: [8,9]    // Sugar, Milk
  },
  2: { // Q2
    1: [9,5],   // Milk, Bread
    2: [4,0],   // Rice, Egg
    3: [1,3],   // Tea_Bag, Soy_Sauce
    4: [6,8],   // Cheese, Sugar
    5: [2,7]    // Coffee, Salt
  },
  3: { // Q3
    1: [3,0],   // Soy_Sauce, Egg
    2: [2,5],   // Coffee, Bread
    3: [9,1],   // Milk, Tea_Bag
    4: [6,4],   // Cheese, Rice
    5: [7,8]    // Salt, Sugar
  },
  4: { // Q4
    1: [1,4],   // Tea_Bag, Rice
    2: [2,9],   // Coffee, Milk
    3: [5,0],   // Bread, Egg
    4: [8,3],   // Sugar, Soy_Sauce
    5: [6,7]    // Cheese, Salt
  },
  5: { // Q5
    1: [8,9],   // Sugar, Milk
    2: [1,7],   // Tea_Bag, Salt
    3: [3,0],   // Soy_Sauce, Egg
    4: [6,4],   // Cheese, Rice
    5: [5,2]    // Bread, Coffee
  },
  6: { // Q6
    1: [4,3],   // Rice, Soy_Sauce
    2: [2,9],   // Coffee, Milk
    3: [7,0],   // Salt, Egg
    4: [6,5],   // Cheese, Bread
    5: [8,1]    // Sugar, Tea_Bag
  }
};

function getChoiceNumberFromKey(key) {
  const m = key.match(/^A(\d+)_\d+$/);
  if (m) return parseInt(m[1], 10);
  return null;
}

function recordTraitAnswer(questionIndex1based, choiceNumber) {
  if (!scoringMap[questionIndex1based]) return;
  const arr = scoringMap[questionIndex1based][choiceNumber];
  if (!arr) return;
  arr.forEach(i => { traitScores[i] = (traitScores[i] || 0) + 1; });
}

function computeTopTraitWinners() {
  const maxScore = Math.max(...traitScores);
  const winners = [];
  traitScores.forEach((s, idx) => {
    if (s === maxScore) winners.push({ name: traitNames[idx], index: idx, score: s });
  });
  return { maxScore, winners };
}

/// NEW //

let currentQuestion = 0;
let userAnswers = {}; // keep this global so showResult/others can read it

function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});

//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}

//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...

function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "images/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {
        // Blank
    }

    /// NEW //

    const traitResult = computeTopTraitWinners(); // { maxScore, winners }
    let traitHtml = `<h2>Top trait${traitResult.winners.length > 1 ? 's' : ''} (MATLAB-style):</h2><ul>`;
    traitResult.winners.forEach(w => {
        const displayName = w.name.replace(/_/g, ' ');
        // try lookup in resultOptions; some keys use spaces
        const lookup = resultOptions[displayName] || resultOptions[w.name];
        traitHtml += `<li><strong>${displayName}</strong> — ${w.score} point${w.score !== 1 ? 's' : ''}`;
        if (lookup && lookup.image) {
            traitHtml += `<br><img src="images/${lookup.image}" alt="${displayName}" style="max-width:200px;margin-top:6px;">`;
        }
        traitHtml += `</li>`;
    });
    traitHtml += `</ul>`;

    /// NEW //

    // append trait result under the existing result text
    resultTextContainer.innerHTML += traitHtml;

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};

    /// NEW //
    traitScores = new Array(traitNames.length).fill(0);
    /// NEW //

    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


