const { generateRandomNumber } = require("../utils.js");

class Question {
    constructor(question, correctAnswer, incorrectAnswers, category, difficulty) {
        this.question = question;
        this.category = category;
        this.difficulty = difficulty;
        
        // Get the index to insert the answer into randomly
        const incorrectAnswerCount = incorrectAnswers.length;
        const correctAnswerInsertIndex = generateRandomNumber(0, incorrectAnswerCount);

        // Add the correct answer into an array with the correct answers
        this.answers = incorrectAnswers;
        this.answers.splice(correctAnswerInsertIndex, 0, correctAnswer);
        this.correctAnswerIndex = correctAnswerInsertIndex;
    }

    getEmitData() {
        return {
            question: this.question,
            answers: this.answers,
            category: this.category,
            difficulty: this.difficulty
        }
    }
}

module.exports = Question;