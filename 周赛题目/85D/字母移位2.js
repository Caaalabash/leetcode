// 超时: 第一层for 5*10^4 第二层for 5*10^4
function shiftingLetters(s, shifts) {
    const cache = {}
    const list = s.split('')
    for (const shift of shifts) {
        for (let i = shift[0]; i <= shift[1]; i++) {
            const key = `${list[i]}-${shift[2]}`
            if (!cache[key]) {
                cache[key] = getNextChar(list[i], shift[2])
            }
            list[i] = cache[key]
        }
    }
    return list.join('')
}

function getNextChar(char, direction) {
    // 向前
    if (direction === 0) {
        if (char === 'a') return 'z'
        return String.fromCharCode(char.charCodeAt() - 1)
    } else {
        if (char === 'z') return 'a'
        return String.fromCharCode(char.charCodeAt() + 1)
    }
}