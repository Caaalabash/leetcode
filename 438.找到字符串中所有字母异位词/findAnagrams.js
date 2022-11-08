function findAnagrams(s, p) {
    const sLen = s.length
    const pLen = p.length

    if (sLen < pLen) {
        return []
    }

    const result = []
    const sCount = new Array(26).fill(0)
    const pCount = new Array(26).fill(0)

    for (let i = 0; i < pLen; i++) {
        pCount[p[i].charCodeAt() - 97]++
        sCount[s[i].charCodeAt() - 97]++
    }

    const pCountStr = pCount.toString()

    if (sCount.toString() === pCountStr) {
        result.push(0)
    }

    for (let i = 0; i < sLen - pLen; i++) {
        sCount[s[i].charCodeAt() - 97]--
        sCount[s[i + pLen].charCodeAt() - 97]++

        if (sCount.toString() === pCount.toString()) {
            result.push(i + 1)
        }
    }
    return result
}