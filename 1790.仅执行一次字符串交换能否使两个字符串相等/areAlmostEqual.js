function areAlmostEqual(s1, s2) {
    if (s1 === s2) return true
    // 只能有两个位置不相等
    let a = -1
    let b = -1
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (a === -1) a = i
            else if (b === -1) b = i
            else return false
        }
    }
    return s1[a] === s2[b] && s1[b] === s2[a]
}