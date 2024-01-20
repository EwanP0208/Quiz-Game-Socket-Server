const TriviaAPI = require("./apis/trivia");
const Question = require("./question.js");

class QuestionManager {
    static async getRandomQuestions() {
        const triviaData = await TriviaAPI.questions('random');
        return triviaData.map(data => {
            return new Question(data.question.text, data.correctAnswer, data.incorrectAnswers)
        });
    }
}

module.exports = QuestionManager;