const TriviaAPI = require("./apis/trivia");
const Question = require("./question.js");

class QuestionManager {
    static async getQuestions(questionSettings) {
        const triviaData = await TriviaAPI.questions('specific', questionSettings);
        return triviaData.map(data => {
            return new Question(data.question.text, data.correctAnswer, data.incorrectAnswers, data.category, data.difficulty)
        })
    }
}

module.exports = QuestionManager;