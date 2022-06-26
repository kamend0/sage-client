export function removeSpaces(inStr) {
    /*
    Remove any spaces after commas but before words, but not
    the spaces within the search terms (e.g. "bell pepper").
    Could probably do this way easier with Regex...
    ...but learning Regex is hard
    */
    const splitStr = inStr.split(',');
    let cleanedStr = splitStr[0].trim();
    for (let i = 1; i < splitStr.length; i += 1) {
        cleanedStr = `${cleanedStr},${splitStr[i].trim()}`;
    }
    return cleanedStr;
}
