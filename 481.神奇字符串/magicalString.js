// Kolakoski数列：是一个仅有1和2组成的无限数列，是一种通过自描述来定义的数列
// 构造出长度为n的神奇字符串，注意前缀一定是122
function magicalString(n) {
    if (n < 4) {
        return 1
    }
    const s = new Array(n).fill(0)
    const zeroCharCode = '0'.charCodeAt()
    s[0] = '1'
    s[1] = '2'
    s[2] = '2'
    let oneCount = 1
    // 双指针
    let i = 2 // 慢：代表神奇字符串被考察到第几位了
    let j = 3 // 快：代表神奇数字被生成到第几位了
    while (j < n) {
        let size = s[i].charCodeAt() - zeroCharCode // 当前组需要的重复次数
        const num = (s[j - 1].charCodeAt() - zeroCharCode) ^ 3 // 1需要转换为2，2需要转换为1
        // 构造下一组
        while (size && j < n) {
            s[j] = String.fromCharCode(zeroCharCode + num)
            if (num === 1) {
                oneCount++
            }
            j++
            size--
        }
        i++
    }
    return oneCount
}