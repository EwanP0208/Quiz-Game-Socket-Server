const { generateRandomNumber } = require("../utils.js");

class Question {
    constructor(question, correctAnswer, incorrectAnswers) {
        this.question = question;
        
        // Get the index to insert the answer into randomly
        const incorrectAnswerCount = incorrectAnswers.length;
        const correctAnswerInsertIndex = generateRandomNumber(0, incorrectAnswerCount);

        // Add the correct answer into an array with the correct answers
        this.answers = incorrectAnswers;
        this.answers.splice(correctAnswerInsertIndex, 0, correctAnswer);
        this.correctAnswerIndex = correctAnswerInsertIndex;
    }

    getObjectEmitting() {
        return {
            question: this.question,
            answers: this.answers
        }
    }
}

module.exports = Question;