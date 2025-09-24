const questions = [

    // Question and answer class structure
    // questions 
    // -> question = text string
    // -> image = image string
    // -> answers
    //    -> A1 = answer option 1
    //       -> text = text string
    //       -> scores = { dimension1: score, dimension2: score, ... }

    {
        // Question 1

        question: "You have to shop for groceries today! What are you wearing?",
        image: "images/Q1/Q1_BG.png",
        answers: {
            A1_1: {
                text: "Comfy and casual",
                scores: { Egg: +1, Tea_Bag: +1 },
            },
            
            A2_1: {
                text: "Full-on work mode",
                scores: { Coffee: +1, Soy_Sauce: +1 },
            },

            A3_1: {
                text: "The coolest drip ever",
                scores: { Rice: +1, Bread: +1 },
            },

            A4_1: {
                text: "I'll go there in my pajamas",
                scores: { Cheese: +1, Salt: +1 },
            },

            A5_1: {
                text: "Something very aesthetic",
                scores: { Sugar: +1, Milk: +1 },
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
                scores: { Milk: +1, Bread: +1 },
            },

            A2_2: {
                text: "Absolutely locked in",
                scores: { Rice: +1, Egg: +1 },
            },

            A3_2: {
                text: "All hands, ready for drama",
                scores: { Tea_Bag: +1, Soy_Sauce: +1 },
            },

            A4_2: {
                text: "No thoughts, empty head",
                scores: { Cheese: +1, Sugar: +1 },
            },

            A5_2: {
                text: "I wanna get this over with",
                scores: { Coffee: +1, Salt: +1 },
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
                scores: { Soy_Sauce: +1, Egg: +1 },
            },

            A2_3: {
                text: "Functional like quick snacks and energy boosts.",
                scores: { Coffee: +1, Bread: +1 },
            },

            A3_3: {
                text: "Daring; full of herbs, spices and trying new things out ",
                scores: { Milk: +1, Tea_Bag: +1 },
            },

            A4_3: {
                text: "Absolutely messy. I'll put anything if I could",
                scores: { Cheese: +1, Rice: +1 },
            },

            A5_3: {
                text: "Chock-full of artisanal products that caters to a niche taste",
                scores: { Salt: +1, Sugar: +1 },
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
                scores: { Tea_Bag: +1, Rice: +1 },
            },

            A2_4: {
                text: "Coffee and drinks aisle",
                scores: { Coffee: +1, Milk: +1 },
            },

            A3_4: {
                text: "Bakery section",
                scores: { Bread: +1, Egg: +1 },
            },

            A4_4: {
                text: "Candy and snacks area",
                scores: { Sugar: +1, Soy_Sauce: +1 },
            },

            A5_4: {
                text: "Free tastings",
                scores: { Cheese: +1, Salt: +1 },
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
                scores: { Sugar: +1, Milk: +1 },
            },

            A2_5: {
                text: "Podcasts or listening to the radio",
                scores: { Tea_Bag: +1, Salt: +1 },
            },

            A3_5: {
                text: "Tracks that simply vibe with you",
                scores: { Soy_Sauce: +1, Egg: +1 },
            },

            A4_5: {
                text: "The most random songs that you hear when you shuffle",
                scores: { Cheese: +1, Rice: +1 },
            },

            A5_5: {
                text: "Just listening to a vlog or a YouTube commentary",
                scores: { Bread: +1, Coffee: +1 },
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
                scores: { Rice: +1, Soy_Sauce: +1 },
            },

            A2_6: {
                text: " Checking your phone for any emails, schedules, etc.",
                scores: { Coffee: +1, Milk: +1 },
            },

            A3_6: {
                text: "Casually gossiping with the cashier or the customers behind you",
                scores: { Salt: +1, Egg: +1 },
            },

            A4_6: {
                text: "Doomscrolling or watching brainrot videos from your phone",
                scores: { Cheese: +1, Bread: +1 },
            },

            A5_6: {
                text: "Daydreaming",
                scores: { Suagr: +1, Tea_Bag: +1 },
            },

        },
    },
    {
        // Ending Question 

        question: "Ending scene.",
        image: "test_image.png",
        answers: {
            KRAB: {
                text: "Are you feeling it now Mr. Krabs?",
            },
            PAT: {
                text: "No, Patrick, Mayonnaise is not an instrument. Horseradish is not an instrument either.",
            },
        },
    },
];

const resultOptions = {
    "Egg": {
        image: "Egg.gif"
    },
    "Coffee": {
        image: "Coffee.gif"
    },
    "Bread": {
        image: "Bread.gif"
    },
    "Tea Bag": {
        image: "Tea_Bag.gif"
    },
    "Rice": {
        image: "Rice.gif"
    },
    "Sugar": {
        image: "Sugar.gif"
    },
    "Milk": {
        image: "Milk.gif"
    },
    "Salt": {
        image: "Salt.gif"
    },
    "Cheese": {
        image: "Cheese.gif"
    },
    "Soy Sauce": { 
        image: "Soy_Sauce.gif"
    },
};

let currentQuestion = 0;
let userAnswers = {}; // keep this global so showResult/others can read it

// Display Question function
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

// Attach onclick event handlers to buttons
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}

// Answer handling function
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

// Function to show results
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


    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

// Main starters
document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
});


document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


