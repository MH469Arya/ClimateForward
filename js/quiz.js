// Add shuffle function to randomize questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const questions = [
    {
        question: "What is a key benefit of AI-powered smart grids in renewable energy?",
        options: [
            "Increased fossil fuel use",
            "Higher electricity costs",
            "Optimization of solar, wind, and hydro energy",
            "Increased carbon emissions"
        ],
        correct: 2,
        explanation: "AI-powered smart grids optimize the distribution and integration of renewable energy sources like solar, wind, and hydro."
    },
    {
        question: "How does precision agriculture help in climate change mitigation?",
        options: [
            "Uses more fertilizers",
            "Increases greenhouse gas emissions",
            "Minimizes water wastage and improves efficiency",
            "Replaces natural farming completely"
        ],
        correct: 2,
        explanation: "Precision agriculture helps minimize water wastage and improves resource efficiency through smart monitoring and management."
    },
    {
        question: "Which of the following is a key initiative related to Green Hydrogen in India?",
        options: [
            "Swachh Bharat Mission",
            "Green Hydrogen Mission",
            "Smart City Initiative",
            "Make in India"
        ],
        correct: 1,
        explanation: "The Green Hydrogen Mission is India's key initiative to promote sustainable hydrogen fuel production and usage."
    },
    {
        question: "What is the primary purpose of carbon capture technology?",
        options: [
            "Generate electricity",
            "Produce hydrogen",
            "Remove CO2 from the atmosphere",
            "Create solar panels"
        ],
        correct: 2,
        explanation: "Carbon capture technology is designed to capture and store CO2 emissions, preventing them from entering the atmosphere."
    },
    {
        question: "How does precision agriculture help combat climate change?",
        options: [
            "By increasing fertilizer use",
            "By using more water",
            "By optimizing resource usage through IoT and AI",
            "By reducing crop yields"
        ],
        correct: 2,
        explanation: "Precision agriculture uses IoT sensors and AI to optimize resource usage, reducing water and fertilizer consumption while improving yields."
    },
    {
        question: "What breakthrough has been made in solid-state battery technology?",
        options: [
            "Shorter battery life",
            "Slower charging speeds",
            "Higher production costs",
            "Longer life and faster charging"
        ],
        correct: 3,
        explanation: "New solid-state batteries offer longer life spans and faster charging capabilities compared to traditional batteries."
    },
    {
        question: "How much has green hydrogen production cost been reduced by new catalyst technology?",
        options: [
            "20%",
            "30%",
            "40%",
            "50%"
        ],
        correct: 2,
        explanation: "Novel catalyst technology has reduced green hydrogen production costs by 40%, making it more competitive with fossil fuels."
    },
    {
        question: "What is the primary benefit of AI-equipped farming drones?",
        options: [
            "Increased water usage",
            "Higher fertilizer consumption",
            "Optimization of crop yields",
            "Reduced crop diversity"
        ],
        correct: 2,
        explanation: "AI-equipped drones optimize crop yields while reducing water and fertilizer usage by 30%."
    },
    {
        question: "What efficiency record have new perovskite solar cells achieved?",
        options: [
            "21.25%",
            "25.25%",
            "28.25%",
            "31.25%"
        ],
        correct: 3,
        explanation: "New perovskite-silicon tandem solar cells have achieved 31.25% efficiency, setting a new world record for solar energy conversion."
    },
    {
        question: "How do AI-powered wind farms improve energy production?",
        options: [
            "By reducing turbine size",
            "By increasing maintenance costs",
            "By optimizing performance and reducing costs",
            "By using more land area"
        ],
        correct: 2,
        explanation: "AI-powered wind farms use machine learning algorithms to optimize turbine performance, increasing energy production by 20% while reducing maintenance costs."
    },
    {
        question: "Which technology uses smart sensors to optimize water usage, monitor pollution, and manage waste?",
        options: [
            "Blockchain",
            "Internet of Things (IoT)",
            "Quantum Computing",
            "Virtual Reality"
        ],
        correct: 1,
        explanation: "Internet of Things (IoT) uses smart sensors to optimize resource usage, monitor environmental conditions, and improve waste management efficiency."
    },
    {
        question: "IoT-based smart irrigation in Maharashtra has helped conserve what percentage of water?",
        options: [
            "10%",
            "20%",
            "30%",
            "40%"
        ],
        correct: 2,
        explanation: "IoT-based smart irrigation systems in Maharashtra have successfully conserved 30% of water through soil moisture monitoring and automated distribution."
    },
    {
        question: "Which farming method utilizes hydroponics and AI-controlled systems for urban food production?",
        options: [
            "Traditional Farming",
            "Vertical & Urban Farming",
            "Agroforestry",
            "Organic Farming"
        ],
        correct: 1,
        explanation: "Vertical & Urban Farming utilizes hydroponics and AI-controlled systems to enable efficient food production in urban areas."
    },
    {
        question: "Which Indian startup is known for developing hydroponic farms in urban spaces?",
        options: [
            "Farm2Table",
            "Pindfresh",
            "AgriTech Solutions",
            "Green Harvest"
        ],
        correct: 1,
        explanation: "Pindfresh is an Indian startup that develops hydroponic farms in cities, enabling fresh food production with minimal space and water consumption."
    },
    {
        question: "How does AI contribute to climate action?",
        options: [
            "By optimizing energy use",
            "By predicting natural disasters",
            "By monitoring deforestation",
            "All of the above"
        ],
        correct: 3,
        explanation: "AI contributes to climate action through multiple ways: optimizing energy consumption, predicting natural disasters, and monitoring deforestation."
    },
    {
        question: "Which organization in India uses AI-driven satellite imagery to detect illegal deforestation?",
        options: [
            "DRDO",
            "ISRO",
            "NITI Aayog",
            "Indian Forest Department"
        ],
        correct: 1,
        explanation: "ISRO uses AI-driven satellite imagery to detect illegal deforestation, enabling early intervention and conservation efforts."
    },
    {
        question: "What is the main benefit of vertical and urban farming?",
        options: [
            "Increases the use of pesticides",
            "Reduces water consumption and land use",
            "Increases deforestation",
            "Reduces food production"
        ],
        correct: 1,
        explanation: "Vertical and urban farming significantly reduces water consumption and land use while enabling efficient food production in urban areas."
    },
    {
        question: "Which technology helps optimize electricity grid efficiency to reduce carbon footprints?",
        options: [
            "Artificial Intelligence (AI)",
            "Augmented Reality (AR)",
            "Blockchain",
            "3D Printing"
        ],
        correct: 0,
        explanation: "Artificial Intelligence (AI) helps optimize electricity grid efficiency through smart monitoring and management, reducing carbon footprints."
    }
];

let currentQuestion = 0;
let score = 0;
let answeredQuestions = new Set();

function initializeQuiz() {
    // Shuffle questions at the start
    shuffleArray(questions);
    currentQuestion = 0;
    score = 0;
    answeredQuestions.clear();
    displayQuestion(currentQuestion);
    updateProgress();
}

function displayQuestion(index) {
    const quizContainer = document.getElementById('quiz-container');
    const question = questions[index];
    
    let html = `
        <div class="question-card">
            <h3>${question.question}</h3>
            <div class="options-grid">
                ${question.options.map((option, i) => `
                    <div class="option" onclick="selectOption(${i})">
                        ${option}
                    </div>
                `).join('')}
            </div>
            <div class="feedback" style="display: none;"></div>
        </div>
    `;
    
    quizContainer.innerHTML = html;
}

function selectOption(optionIndex) {
    if (answeredQuestions.has(currentQuestion)) return;
    
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    const feedback = document.querySelector('.feedback');
    
    answeredQuestions.add(currentQuestion);
    
    options[optionIndex].classList.add(
        optionIndex === question.correct ? 'correct' : 'incorrect'
    );
    options[question.correct].classList.add('correct');
    
    feedback.textContent = question.explanation;
    feedback.classList.add(optionIndex === question.correct ? 'correct' : 'incorrect');
    feedback.style.display = 'block';
    
    if (optionIndex === question.correct) score++;
    
    updateProgress();
    
    // Enable next button after answering
    document.getElementById('next-button').disabled = false;
}

function updateProgress() {
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('total-questions').textContent = questions.length;
    
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    prevButton.disabled = currentQuestion === 0;
    nextButton.textContent = currentQuestion === questions.length - 1 ? 'Finish' : 'Next';
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion(currentQuestion);
    } else {
        showResults();
    }
    updateProgress();
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion(currentQuestion);
        updateProgress();
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    const finalScore = Math.round((score / questions.length) * 100);
    
    let performanceMessage;
    if (finalScore >= 90) performanceMessage = "Outstanding! You're an expert!";
    else if (finalScore >= 70) performanceMessage = "Great job! You know your stuff!";
    else if (finalScore >= 50) performanceMessage = "Good effort! Room for improvement.";
    else performanceMessage = "Keep learning! Try again to improve your score.";

    quizContainer.innerHTML = `
        <div class="results animate-fade-in">
            <h2>Quiz Complete!</h2>
            <div class="score-container">
                <div class="score">Your Score: ${finalScore}%</div>
            </div>
            <p class="performance-message">${performanceMessage}</p>
            <div class="action-buttons">
                <button class="button" onclick="restartQuiz()">Try Again</button>
                <a href="climate-spotlight.html" class="button">Learn More</a>
            </div>
        </div>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answeredQuestions.clear();
    initializeQuiz();
}

// Add these helper functions
function updateProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    const progress = (answeredQuestions.size / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function disableOptions() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', initializeQuiz);
