function decodeMessage(key, message) {
    const map = new Map()
    let base = 97
    for (const char of key) {
        if (!map.has(char) && char !== ' ') {
            map.set(char, String.fromCharCode(base))
            base++
        }
    }
    let result = ''
    for (const char of message) {
        if (map.has(char)) {
            result += map.get(char)
        } else {
            result += ' '
        }
    }
    return result
}