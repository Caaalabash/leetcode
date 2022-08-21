function isPrefixOfWord(sentence, searchWord) {
    const i = sentence.split(' ').findIndex(i => i.startsWith(searchWord))
    return i === -1 ? -1 : i + 1
}