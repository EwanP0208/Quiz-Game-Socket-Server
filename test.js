const TriviaAPI = require("./lib/api/trivia");

async function getData() {
    const data = await TriviaAPI.questions('random');
    console.log(data);
}

getData();