const QuestionManager = require("./lib/questions/questionManager");

async function getQuestions() {
    const randomQuestions = await QuestionManager.getRandomQuestions();

    console.log(randomQuestions);
}

getQuestions();