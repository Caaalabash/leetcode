function halvesAreAlike(s) {
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    const n = s.length
    if (n % 2 === 1) {
        return false
    }
    let count = 0
    for (let i = 0; i < n / 2; i++) {
        if (set.has(s[i])) count++
    }
    for (let i = n / 2; i < n; i++) {
        if (set.has(s[i])) count--
    }
    return count === 0
}