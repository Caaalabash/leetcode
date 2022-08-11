function reformat(s) {
    let a = []
    let b = []
    for (let i = 0; i < s.length; i++) {
        if ('a' <= s[i] && s[i] <= 'z') {
            a.push(s[i])
        } else {
            b.push(s[i])
        }
    }
    if (Math.abs(a.length - b.length) > 1) return ''
    let result = ''
    // 让a是较长的那一个
    if (b.length > a.length) {
        [a, b] = [b, a]
    }
    for (let i = 0; i < b.length; i++) {
        result += a[i]
        result += b[i]
    }
    if (a.length > b.length) {
        result += a[b.length]
    }
    return result
}