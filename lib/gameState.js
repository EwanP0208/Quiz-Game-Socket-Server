const Client = require("./client");

class GameState {
    constructor(categories="", difficulties="", questionCount=10) {
        this.categories = categories;
        this.difficulties = difficulties;
        this.questionCount = questionCount;
        this.clients = {};
    }

    gameSettings() {
        return {
            categories: this.categories,
            difficulties: this.difficulties,
            questionCount: this.questionCount
        }
    }

    addClient(clientID) {
        this.clients[clientID] = new Client();
    }

    addQuestionSet(questions) {
        this.questions = questions;
    }

    correctAnswers() {
        return [0,0,0,0,0,0,0,0,0,0];
    }

    questionAnswered(clientID, answerIndex) {
        const client = this.clients[clientID];
        if (client) client.questionAnswered(answerIndex);
    }

    getQuestionProgress() {
        return Object.entries(this.clients).map(([clientID, clientRecord]) => ({
            clientID, questionCout: clientRecord.questionsAnsweredCount()
        }))
    }

    allClientsComplete() {
        const clientCount = Object.values(this.clients).length;
        const clientsCompleteCount = Object.values(this.clients).filter(client => client.quizComplete()).length;

        return (clientCount > 1 && clientsCompleteCount === clientCount);
    }

    // Aliases
    setClientAlias(clientID, alias) {
        const client = this.clients[clientID];
        if (client) client.setAlias(alias);
    }
    
    getAllAliases() {
        return Object.entries(this.clients).map(([clientID, clientRecord]) => ({
            clientID, alias: clientRecord.alias
        }));
    }

    // Ready states
    toggleClientReady(clientID) {
        const client = this.clients[clientID];
        if (client) client.toggleReady();
    }

    getReadyStates() {
        return Object.entries(this.clients).map(([clientID, clientRecord]) => ({
            clientID, ready: clientRecord.ready
        }))
    }

    allClientsReady() {
        const clientCount = Object.values(this.clients).length;
        const readyClientsCount = Object.values(this.clients).filter(client => client.ready).length;

        return (clientCount > 1 && readyClientsCount === clientCount);
    }
}

module.exports = GameState;