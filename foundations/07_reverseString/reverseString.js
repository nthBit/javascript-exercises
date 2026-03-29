const reverseString = function(string) {
    stringLength = string.length;
    if (stringLength < 0) {
        return "ERROR";
    }
    newPhrase = "";
    for (i = (stringLength - 1); i >= 0; i--) {
        currentCharacter = string[i];
        newPhrase += currentCharacter;
    }
    return newPhrase;
};

// Do not edit below this line
module.exports = reverseString;
