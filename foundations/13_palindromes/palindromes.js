const palindromes = function(word) {
    const mutatedString = word.replaceAll(' ', '').toLowerCase();
    console.log(mutatedString);
    const reversedArray = word.replaceAll(' ', '').split('').toReversed();
    console.log(reversedArray);
    const reservedString = reversedArray.join('').toLowerCase();
    console.log(reservedString);
    return (mutatedString === reservedString) ? true : false;
};

// Fails on multiple words and case sensitivity
// I think that is due the punctuation, focus on that next

// Do not edit below this line
module.exports = palindromes;
