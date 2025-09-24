/* finalscript.js  (modified scoring & result logic only)
   Based on your uploaded finalscript(old).js — minimal invasive edits:
   - keeps existing questions array, UI flow, and event wiring
   - changes scoring/result computation to pick highest trait and show mapped image
   - normalizes trait keys when looking up images (handles underscores/spaces/typos)
*/

const questions = [

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
        image: "images/Q5/Q5_BG.PNG",
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
        image: "images/Q6/Q6_BG.PNG",
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
                scores: { Sugar: +1, Tea_Bag: +1 }, // note: 'Suagr' typo preserved (handled in mapping)
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
        image: "images/Roster/Egg.gif"
    },
    "Coffee": {
        image: "images/Roster/Coffee.gif"
    },
    "Bread": {
        image: "images/Roster/Bread.gif"
    },
    "Tea Bag": {
        image: "images/Roster/Tea_Bag.gif"
    },
    "Rice": {
        image: "images/Roster/Rice.gif"
    },
    "Sugar": {
        image: "images/Roster/Sugar.gif"
    },
    "Milk": {
        image: "images/Roster/Milk.gif"
    },
    "Salt": {
        image: "images/Roster/Salt.gif"
    },
    "Cheese": {
        image: "images/Roster/Cheese.gif"
    },
    "Soy Sauce": { 
        image: "images/Roster/Soy_Sauce.gif"
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
        // remove old handlers to avoid duplicates (safe-guard)
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        newButton.addEventListener('click', handleAnswer);
    });
}

// Answer handling function
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    /* --- MODIFIED: defensive scoring increment logic --- */
    // If the answer has a scores object, increment; otherwise ignore (e.g., ending scene)
    if (answer && answer.scores && typeof answer.scores === 'object') {
        for (const dimension in answer.scores) {
            // ensure numeric increment (in case the value is +1)
            const inc = Number(answer.scores[dimension]) || (answer.scores[dimension] === +1 ? 1 : 0);
            userAnswers[dimension] = (userAnswers[dimension] || 0) + inc;
        }
    } else {
        // no scores to apply (ending / informational answers)
        // Do nothing — preserves original behavior
    }
    /* --- END MODIFIED --- */

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

/* --- MODIFIED: new showResult implementation (top-trait & image mapping) --- */
function normalizeKey(k) {
    if (!k) return '';
    // lowercase, remove non-word characters (space, underscores, punctuation)
    return String(k).toLowerCase().replace(/[^a-z0-9]/g, '');
}

function buildNormalizedResultMap(resultOptionsObj) {
    const norm = {};
    for (const key in resultOptionsObj) {
        norm[normalizeKey(key)] = { origKey: key, data: resultOptionsObj[key] };
    }
    return norm;
}

function escapeHtml(str) {
  return String(str === undefined || str === null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function showResult() {
    const resultElement = document.getElementById('result');
    let resultTextContainer = document.querySelector('.result-text');
    let resultImage = document.getElementById('result-image');

    // Build normalized mapping so we can match 'Tea_Bag' -> 'Tea Bag', 'Suagr' -> 'Sugar' (best-effort)
    const normMap = buildNormalizedResultMap(resultOptions);

    // If there are no recorded scores (user skipped scoring questions), gracefully handle
    if (!userAnswers || Object.keys(userAnswers).length === 0) {
        // show a fallback message
        if (resultTextContainer) {
            resultTextContainer.innerHTML = `<p>No trait data collected. Try answering the quiz questions.</p>`;
        }
        if (resultImage) {
            resultImage.src = 'images/placeholder.png';
            resultImage.alt = 'Placeholder';
        }
        document.getElementById('quiz').style.display = 'none';
        if (resultElement) resultElement.style.display = 'block';
        document.getElementById('restart-button').style.display = 'block';
        return;
    }

    // Find top trait(s)
    let maxScore = -Infinity;
    const topTraits = [];
    for (const trait in userAnswers) {
        const v = Number(userAnswers[trait]) || 0;
        if (v > maxScore) {
            maxScore = v;
            topTraits.length = 0;
            topTraits.push(trait);
        } else if (v === maxScore) {
            topTraits.push(trait);
        }
    }

    // Tie handling (deterministic): choose first alphabetically of topTraits (you can change this logic)
    topTraits.sort();
    const winnerTrait = topTraits[0];

    // Try direct lookup in resultOptions first
    let personalityData = resultOptions[winnerTrait];

    // If not found, try normalized lookup (handles underscores/spaces/typos like 'Suagr' -> normalize)
    if (!personalityData) {
        const nk = normalizeKey(winnerTrait);
        if (normMap[nk]) personalityData = normMap[nk].data;
        else {
            // attempt best-effort fuzzy corrections: handle common swapped underscore/space variants
            // try winnerTrait with underscore -> space and vice versa
            const alt1 = String(winnerTrait).replace(/_/g, ' ');
            const alt2 = String(winnerTrait).replace(/\s+/g, '_');
            if (resultOptions[alt1]) personalityData = resultOptions[alt1];
            else if (resultOptions[alt2]) personalityData = resultOptions[alt2];
            else {
                // fallback: try close normalized matches (e.g., 'suagr' -> 'sugar')
                // Take first normalized resultOption whose normalized key has small edit distance? -> too heavy
                // For simplicity, try explicit common fixes:
                if (nk === 'suagr' && normMap['sugar']) personalityData = normMap['sugar'].data;
            }
        }
    }

    // Prepare and show result content
    // Ensure resultTextContainer and resultImage exist; if not, create them inside #result
    if (!resultElement) {
        console.warn('showResult: #result element not found in DOM.');
    } else {
        if (!resultTextContainer) {
            resultTextContainer = document.createElement('div');
            resultTextContainer.className = 'result-text';
            resultElement.appendChild(resultTextContainer);
        }
        if (!resultImage) {
            resultImage = document.createElement('img');
            resultImage.id = 'result-image';
            resultImage.alt = 'result image';
            resultElement.appendChild(resultImage);
        }
    }

    // Build trait breakdown HTML
    let traitHtml = '<h3>Your trait scores</h3><ul>';
    const allTraits = Object.keys(userAnswers).sort();
    for (const t of allTraits) {
        traitHtml += `<li>${t}: ${userAnswers[t] || 0}</li>`;
    }
    traitHtml += '</ul>';

    // Compose displayed top-trait info
    let displayTitle = `Top trait: ${winnerTrait} (${maxScore})`;
    let displayDesc = '';
    let displayImagePath = 'images/placeholder.png';

    if (personalityData) {
        displayImagePath = 'images/Roster/' + personalityData.image;
        // optional: if resultOptions contains more metadata later, use it
    }

    // Insert into DOM
    if (resultTextContainer) {
        resultTextContainer.innerHTML = `<h2>${escapeHtml(displayTitle)}</h2>
            <p>${escapeHtml(displayDesc)}</p>`;
        resultTextContainer.innerHTML += traitHtml;
    }
    if (resultImage) {
        resultImage.src = displayImagePath;
        resultImage.alt = `${winnerTrait} Image`;
    }

    // Show/hide UI
    const quizEl = document.getElementById('quiz');
    if (quizEl) quizEl.style.display = 'none'; // Hide the quiz
    if (resultElement) resultElement.style.display = 'block'; // Show the result
    const restartBtn = document.getElementById('restart-button');
    if (restartBtn) restartBtn.style.display = 'block'; // Show the restart button
}
/* --- END MODIFIED --- */

//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};

    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

// Main starters
function attachMainListeners(){
  const startBtn = document.getElementById('start-button');
  const restartBtn = document.getElementById('restart-button');

  if (startBtn) {
    startBtn.addEventListener('click', function() {
      const sp = document.getElementById('start-page');
      const qp = document.getElementById('quiz-page');
      if (sp) sp.style.display = 'none';
      if (qp) qp.style.display = 'block';
      currentQuestion = 0;
      userAnswers = {};
      displayQuestion();
    });
  } else {
    console.warn('finalscript.js: start-button not found — quiz will try to auto-start.');
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', restartQuiz);
  } else {
    console.warn('finalscript.js: restart-button not found (restart may be unavailable).');
  }

  // If there's no start button, assume we should start the quiz automatically.
  if (!startBtn) {
    // small timeout to ensure other initialization finished
    setTimeout(() => {
      try { displayQuestion(); } catch (e) { /* ignore */ }
    }, 0);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachMainListeners);
} else {
  attachMainListeners();
}