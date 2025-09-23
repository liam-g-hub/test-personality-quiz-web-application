const questions = [
    {
        question: "Q1/12: You're taking the bus on your way back home. It's been a loooong day, what are you thinking about?",
        image: "test_image.png",
        answers: {
            F: {
                text: "I'm just so tired and can't wait to go home. Why does everyday feel the same...",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "Should I rest or work first when I get home? Most importantly, what's for dinner?",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "Q2/12: You look outside the windows, seems like it's going to rain soon. Suddenly everything turns into darkness!!",
        image: "test_image.png",
        answers: {
            J: {
                text: "I don't remember this tunnel. *Pull out your phone to look at the map*",
                scores: { P: 0, J: +1 },
            },
            P: {
                text: "*Turn around to see the other's reaction* Should I ask the driver what's going on?",
                scores: { P: +1, J: 0 },
            },
        },
    },
    {
        question: "Q3/12: Before you can do anything, the bus stops and everything around you floats up!",
        image: "test_image.png",
        answers: {
            S: {
                text: "Ok this is weird, am I dreaming? *pinch your arm*",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "Is this a prank? Am I getting kidnapped by aliens?!",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q4/12: Amidst the surprise, your eyes catch something drifting past the window.",
        image: "test_image.png",
        answers: {
            F: {
                text: "Woahhh...so many cats! How cute!! I wanna give them a hug!",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "Cats? In space? That's kinda odd... How do they survive out there?!",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "Q5/12: 'Welcome Aboard!' a small robot appears and announces, 'We will reach our destination in 5 months 6 days and 2 hours!'",
        image: "test_image.png",
        answers: {
            P: {
                text: "Cool! A space cruise?! Where are we going? Do I get a spacesuit? This is so exciting!",
                scores: { P: +1, J: 0 },
            },
            J: {
                text: "Hey uh...Am I in space? How did I get here? When can I go home?! Why..",
                scores: { P: 0, J: +1 },
            },
        },
    },
    {
        question: "Q6/12: The robot just points to the back of the bus which now looks more like inside of a spaceship! What do you want to see first?",
        image: "test_image.png",
        answers: {
            I: {
                text: "Solar system themed fountain in the middle. I want to take pictures with it.",
                scores: { I: 0, E: +1 },
            },
            E: {
                text: "Cozy corner with a massaging chair. I need to sit down and process.",
                scores: { I: +1, E: 0 },
            },
        },
    },
    {
        question: "When you look up again, the inspector's already gone. You glance outside the window, darkness creeps in as the bus enters another tunnel...",
        image: "test_image.png",
        answers: {
            K: {
                text: "Wait...was that Bob?",
            },
            U: {
                text: "Oh no...Do I have to go through this again?",
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
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
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


