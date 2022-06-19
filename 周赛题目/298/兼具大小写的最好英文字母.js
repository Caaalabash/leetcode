function greatestLetter(s) {
    const map = {}
    let result = ''

    for (let i = 0; i < s.length; i++) {
        map[s.charAt(i)] = i
    }
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) <= 'Z') {
            continue
        }
        const upper = s.charAt(i).toUpperCase()
        if (upper > result && upper in map) {
            result = upper
        }
    }
    return result
}