function generateRandomString(length=8) {
    const AVAILABLE_CHARACTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
    const characterCount = AVAILABLE_CHARACTERS.length;

    let randomChars = Array.from({ length }, () => {
       const randomCharIndex = Math.floor(Math.random() * characterCount);
       return AVAILABLE_CHARACTERS.charAt(randomCharIndex);
    });
    
    return randomChars.join('');
}

module.exports = { generateRandomString };