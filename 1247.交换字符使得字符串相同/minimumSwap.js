// Q1 1597
function minimumSwap(s1, s2) {
    const length = s1.length
    let x = 0
    let y = 0
    for (let i = 0; i < length; i++) {
        if (s1.charAt(i) !== s2.charAt(i)) {
            if (s1.charAt(i) === 'x') x++
            else y++
        }
    }
    return (x + y) % 2 === 1
        ? -1  // 差异点如果是奇数，自然不能转换成功
        : x % 2 === 0 ? (x + y) / 2 : (x + y) / 2  + 1
}