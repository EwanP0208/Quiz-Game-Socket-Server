module.exports = class Client {
    constructor() {
        this.alias = null;
        this.ready = false;
        this.answers = [];
    }

    setAlias(alias) {
        this.alias = alias;
    }

    toggleReady() {
        this.ready = !this.ready;
    }

    questionAnswered(answer) {
        this.answers = [...this.answers, answer];
    }

    questionsAnsweredCount() {
        return this.answers.length;
    }

    quizComplete(questionCount) {
        return this.questionsAnsweredCount === questionCount;
    }
}