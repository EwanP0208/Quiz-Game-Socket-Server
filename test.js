const QuestionManager = require("./lib/questions/questionManager");

async function getQuestions() {
    const questions = await QuestionManager.getQuestions({ category: "geography", difficulty: "easy", limit: 5 });
    console.log(questions);
}

getQuestions();