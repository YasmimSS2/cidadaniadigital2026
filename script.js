const quizData = [
    {
        question: "1. O que caracteriza principalmente um vídeo em formato Deepfake?",
        options: [
            "Um corte simples feito em aplicativos de edição comuns.",
            "Um vídeo gerado por Inteligência Artificial que substitui rostos ou vozes de forma realista.",
            "Um texto falso compartilhado em redes sociais como o WhatsApp.",
            "Uma imagem antiga que foi republicada com a data errada."
        ],
        correct: 1
    },
    {
        question: "2. Qual o primeiro passo recomendado ao receber uma notícia alarmante?",
        options: [
            "Compartilhar imediatamente nos grupos de amigos para alertá-los.",
            "Curtir e comentar expressando sua indignação.",
            "Não compartilhar por impulso e checar a informação em portais de notícias confiáveis.",
            "Apagar o aplicativo de mensagens para evitar vírus."
        ],
        correct: 2
    },
    {
        question: "3. Qual das seguintes opções ajuda a identificar uma imagem ou vídeo criado por IA?",
        options: [
            "Iluminação perfeita e ausência de qualquer sombra.",
            "Fundo estável e fontes oficiais citadas no próprio vídeo.",
            "Piscadas não naturais, mãos com defeitos (como dedos extras) ou áudio dessincronizado.",
            "Presença de legendas coloridas e música de fundo animada."
        ],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const resultBox = document.getElementById("result-box");
const questionBox = document.getElementById("question-box");
const resultText = document.getElementById("result-text");

function loadQuiz() {
    if (currentQuestion < quizData.length) {
        const currentData = quizData[currentQuestion];
        questionText.innerText = currentData.question;
        optionsContainer.innerHTML = "";

        currentData.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.classList.add("option-btn");
            button.innerText = option;
            button.onclick = () => checkAnswer(index);
            optionsContainer.appendChild(button);
        });
    } else {
        showResults();
    }
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    loadQuiz();
}

function showResults() {
    questionBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    resultText.innerHTML = `Você acertou <strong>${score}</strong> de <strong>${quizData.length}</strong> perguntas!<br><br>` + 
        (score === quizData.length ? "Excelente! Você é um cidadão digital consciente." : "Continue estudando as práticas de segurança para não ser enganado!");
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    questionBox.classList.remove("hidden");
    resultBox.classList.add("hidden");
    loadQuiz();
}

// Inicializa o quiz na tela
loadQuiz();
