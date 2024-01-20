const CATEGORIES_ENDPOINT = "https://the-trivia-api.com/v2/categories";

const dummyCategoryData = {
    "Arts & Literature": [
        "arts",
        "literature",
        "arts_and_literature",
        "novels"
    ],
    "Film & TV": [
        "movies",
        "film",
        "film_and_tv"
    ],
    "Food & Drink": [
        "food_and_drink",
        "food",
        "drink",
        "alcohol"
    ],
    "General Knowledge": [
        "general_knowledge"
    ],
    "Geography": [
        "geography"
    ],
    "History": [
        "history"
    ],
    "Music": [
        "music"
    ],
    "Science": [
        "science"
    ],
    "Society & Culture": [
        "society_and_culture",
        "society",
        "culture"
    ],
    "Sport & Leisure": [
        "sport_and_leisure",
        "sports",
        "sport",
        "games"
    ]
}

function getCategories() {
    // Dummy the return for now
    Object.keys(dummyCategoryData);
}

module.exports = { getCategories };