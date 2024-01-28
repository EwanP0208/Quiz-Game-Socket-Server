const TRIVIA_API_ENDPOINT = "https://the-trivia-api.com/v2";

function generateParams(queryObject) {
    return Object.entries(queryObject)
        .filter(([key, value]) => !!value)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
}

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
                },
                specific: (options = {}) => {
                    return {
                        method: 'GET',
                        resource: `/questions`,
                        params: { categories: options.category, difficulties: options.difficulty, limit: options.limit},
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
        return fetch(`${TRIVIA_API_ENDPOINT}${endpoint.resource}?${generateParams(endpoint.params)}`, {
            cache: 'no-store',
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

// const Trivia = new TriviaAPI()


// // Also needs updating
// export const getQuestions = cache(async(category, difficulty) => {
//     if (!category) {
//         const res = await Trivia.questions('random');
//         return res;
//     }

//     if (!difficulty) {
//         const res = await Trivia.questions('specific', { category });
//         return res;
//     }

//     const res = await Trivia.questions('specific', { category, difficulty });
//     return res;
// })

// export async function getCategoryList() {
//     const categories = await Trivia.categories('list');

//     const categoryMapping = Object.entries(categories).reduce((acc, [key, value]) => {
//         return {
//             ...acc,
//             [key]: value.join(',')
//         }
//     }, {});

//     return categoryMapping;
// }

// export function getParentCategory(categories, subCategory) {
//     return Object.keys(categories).find(key => categories[key].includes(subCategory));
// }