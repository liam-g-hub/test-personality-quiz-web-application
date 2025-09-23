const questions = [
    {
        question: "Question 1.",
        image: "test_image.png",
        answers: {
            A1_1: {
                text: "Unna!",
                scores: { T: 0, F: +1 },
            },
            
            A2_1: {
                text: "Uwa Uwa",
                scores: { T: 0, F: +1 },
            },

            A3_1: {
                text: "Oi!",
                scores: { T: +1, F: 0 },
            },

            A4_1: {
                text: "HAHHHHHHHH",
                scores: { T: +1, F: 0 },
            },

            A5_1: {
                text: "Meeeeeeeteeeeee....",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "Question 2.",
        image: "test_image.png",
        answers: {
            A1_2: {
                text: "Unna!",
                scores: { T: 0, F: +1 },
            },

            A2_2: {
                text: "Uwa Uwa",
                scores: { T: 0, F: +1 },
            },

            A3_2: {
                text: "Oi!",
                scores: { T: +1, F: 0 },
            },

            A4_2: {
                text: "HAHHHHHHHH",
                scores: { T: +1, F: 0 },
            },

            A5_2: {
                text: "Meeeeeeeteeeeee....",
                scores: { T: +1, F: 0 },
            },

        },
    },
    {
        question: "Question 3.",
        image: "test_image.png",
        answers: {
            A1_3: {
                text: "Unna!",
                scores: { T: 0, F: +1 },
            },

            A2_3: {
                text: "Uwa Uwa",
                scores: { T: 0, F: +1 },
            },

            A3_3: {
                text: "Oi!",
                scores: { T: +1, F: 0 },
            },

            A4_3: {
                text: "HAHHHHHHHH",
                scores: { T: +1, F: 0 },
            },

            A5_3: {
                text: "Meeeeeeeteeeeee....",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "Question 4.",
        image: "test_image.png",
        answers: {
            A1_4: {
                text: "Unna!",
                scores: { T: 0, F: +1 },
            },

            A2_4: {
                text: "Uwa Uwa",
                scores: { T: 0, F: +1 },
            },

            A3_4: {
                text: "Oi!",
                scores: { T: +1, F: 0 },
            },

            A4_4: {
                text: "HAHHHHHHHH",
                scores: { T: +1, F: 0 },
            },

            A5_4: {
                text: "Meeeeeeeteeeeee....",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "Question 5.",
        image: "test_image.png",
        answers: {
            A1_5: {
                text: "Unna!",
                scores: { T: 0, F: +1 },
            },

            A2_5: {
                text: "Uwa Uwa",
                scores: { T: 0, F: +1 },
            },

            A3_5: {
                text: "Oi!",
                scores: { T: +1, F: 0 },
            },

            A4_5: {
                text: "HAHHHHHHHH",
                scores: { T: +1, F: 0 },
            },

            A5_5: {
                text: "Meeeeeeeteeeeee....",
                scores: { T: +1, F: 0 },
            },

        },
    },
    {
        question: "Question 6.",
        image: "test_image.png",
        answers: {
            A1_6: {
                text: "Unna!",
                scores: { T: 0, F: +1 },
            },

            A2_6: {
                text: "Uwa Uwa",
                scores: { T: 0, F: +1 },
            },

            A3_6: {
                text: "Oi!",
                scores: { T: +1, F: 0 },
            },

            A4_6: {
                text: "HAHHHHHHHH",
                scores: { T: +1, F: 0 },
            },

            A5_6: {
                text: "Meeeeeeeteeeeee....",
                scores: { T: +1, F: 0 },
            },

        },
    },
    {
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
    "ISTJ": {
        image: "test_image.png"
    },
    "ISFJ": {
        image: "test_image.png"
    },
    "INFJ": {
        image: "test_image.png"
    },
    "INTJ": {
        image: "test_image.png"
    },
    "ISTP": {
        image: "test_image.png"
    },
    "ISFP": {
        image: "test_image.png"
    },
    "INFP": {
        image: "test_image.png"
    },
    "INTP": {
        image: "test_image.png"
    },
    "ESTP": {
        image: "test_image.png"
    },
    "ESFP": {
        image: "test_image.png"
    },
    "ENFP": {
        image: "test_image.png"
    },
    "ENTP": {
        image: "test_image.png"
    },
    "ESTJ": {
        image: "test_image.png"
    },
    "ESFJ": {
        image: "test_image.png"
    },
    "ENFJ": {
        image: "test_image.png"
    },
    "ENTJ": {
        image: "test_image.png"
    },

};

let currentQuestion = 0;
// let userAnswers = {};


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

    // remove this when done debugging
    // Display the scores for each letter
    
    // const scoresContainer = document.querySelector('.scores-container');
    // scoresContainer.innerHTML = `
        // <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
        // <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    
    //`;
    // to here

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

    }

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

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


