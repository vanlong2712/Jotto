export function getLetterMatchCount(guessedWord, secrectWord) {
    const secretLetterSet = new Set(secrectWord.split(''));
    const guessedLetterSet = new Set(guessedWord.split(''));
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
}