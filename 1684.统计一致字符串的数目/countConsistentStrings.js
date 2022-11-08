function countConsistentStrings(allowed, words) {
    const charSet = new Set(allowed.split(''))
    let result = 0
    outer:
        for (const word of words) {
            for (const char of word) {
                if (!charSet.has(char)) continue outer
            }
            result++
        }
    return result
}