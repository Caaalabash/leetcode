function reorderSpaces(text) {
    const n = text.length
    const word = []
    let space = 0
    let index = 0

    while (index < n) {
        if (text[index] === ' ') {
            space++
            index++
        } else {
            let start = index
            while (index < n && text[index] !== ' ') {
                index++
            }
            word.push(text.slice(start, index))
        }
    }

    if (word.length === 1) {
        return `${word[0]}${' '.repeat(space)}`
    }

    const gapSpaceCount = Math.floor(space / (word.length - 1))
    const endSpaceCount = space % (word.length - 1)
    return word.join(' '.repeat(gapSpaceCount)) + ' '.repeat(endSpaceCount)
}