function maxLengthBetweenEqualCharacters(s) {
    const map = new Map()
    let result = 0
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            result = Math.max(result, i - map.get(s[i]) - 1)
        } else {
            map.set(s[i], i)
        }
    }
    return result
}