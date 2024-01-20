const TRIVIA_API_ENDPOINT = "https://the-trivia-api.com/v2";

class TriviaAPI {
    constructor() {
        this.endpoints = {
            questions: {
                random: (options = {}) => {
                    return {
                        method: 'GET',
                        resource: `/questions`,
                        params: {},
                        body: null
                    }
                }
            },
            categories: {
                list: (options = {}) => {
                    return {
                        method: 'GET',
                        resource: `/categories`,
                        params: {},
                        body: null
                    }
                }
            }
        }
    }

    request(endpoint={}) {
        return fetch(`${TRIVIA_API_ENDPOINT}${endpoint.resource}`, {
            method: endpoint?.method,
            body: endpoint?.body ? JSON.stringify(endpoint.body) : null
        }).then(async (response) => {
            const data = await response.json();
            return data;
        }).catch((error) => {
            return error;
        });
    }

    categories(method='', options={}) {
        const matchingEndpoint = this.endpoints.categories[method];

        if (matchingEndpoint) {
            const endpoint = matchingEndpoint(options);
            return this.request(endpoint);
        }
    }

    questions(method='', options={}) {
        const matchingEndpoint = this.endpoints.questions[method];

        if (matchingEndpoint) {
            const endpoint = matchingEndpoint(options);
            return this.request(endpoint);
        }
    }
}

module.exports = new TriviaAPI();